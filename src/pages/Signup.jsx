import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import authApi from "../api/authApi";
import * as Yup from 'yup'

const schema = Yup.object().shape({
  name: Yup.string().required(" Name should be required please"),
  email: Yup.string().email().required("Email should be required please"),
  password: Yup.string().required().min(4),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const Signup = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [usernameErrText, setUsernameErrText] = useState("");
  const [emailErrText, setEmailErrText] = useState("");

  const [passwordErrText, setPasswordErrText] = useState("");
  const [confirmPasswordErrText, setConfirmPasswordErrText] = useState("");

 // Define the validation schema
 const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please fill this field"),
  email: Yup.string().email("Invalid email").required("Please fill this field"),
  password: Yup.string().required("Please fill this field").min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords must match")
    .required("Please fill this field"),
});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const name=  data.get("name").trim()
    const email = data.get("email").trim()
    const password =  data.get("password").trim()
    const  confirmPassword = data.get("confirmPassword").trim()
    

    try {
      // Validate the form data against the schema
      await validationSchema.validate({ name, email, password, confirmPassword }, { abortEarly: false });
 

      const res = await authApi.signup({
        name,
        email,
        password,
        confirmPassword,
      });
      setLoading(false);
      localStorage.setItem("token", res.token);
      navigate("/login");
    }
    catch (err) {
      if (err instanceof Yup.ValidationError) {
        // Handle validation errors
        err.inner.forEach(({ path, message }) => {
          if (path === 'name') setUsernameErrText(message);
          if (path === 'email') setEmailErrText(message);

          if (path === 'password') setPasswordErrText(message);
          if (path === 'confirmPassword') setConfirmPasswordErrText(message);
        });
      }
      setLoading(false);

    }
 
    }
  

  return (
    <>
      <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="name"
          name="name"
          disabled={loading}
          error={usernameErrText !== ""}
          helperText={usernameErrText}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          type="email"
          disabled={loading}
          error={emailErrText !== ""}
          helperText={emailErrText}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          disabled={loading}
          error={passwordErrText !== ""}
          helperText={passwordErrText}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          disabled={loading}
          error={confirmPasswordErrText !== ""}
          helperText={confirmPasswordErrText}
        />
        <LoadingButton
          sx={{ mt: 3, mb: 2 ,backgroundColor:"#fff"}}
          variant="outlined"
          fullWidth
          color="success"
          type="submit"
          loading={loading}
        >
          Signup
        </LoadingButton>
      </Box>
      <Button component={Link} to="/login" sx={{ textTransform: "none" ,color:"#000"}}>
        Already have an account? Login
      </Button>
    </>
  );
};

export default Signup;
