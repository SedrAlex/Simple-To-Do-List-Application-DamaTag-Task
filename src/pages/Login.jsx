import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import authApi from '../api/authApi'
import * as Yup from 'yup'

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [emailErrText, setEmailErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");

   // Define the validation schema
 const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Please fill this field"),
  password: Yup.string().required("Please fill this field").min(8, "Password must be at least 8 characters"),
 })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailErrText("");
    setPasswordErrText("");

    const data = new FormData(e.target);
    const email = data.get("email").trim();
    const password = data.get("password").trim();
console.log("data",data.get("password"));
 

    try {
      await validationSchema.validate({  email, password }, { abortEarly: false });

      const res = await authApi.login({ email, password });
      setLoading(false);
      localStorage.setItem("token", res.token);
      navigate("/");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        // Handle validation errors
        err.inner.forEach(({ path, message }) => {
          if (path === 'email') setEmailErrText(message);

          if (path === 'password') setPasswordErrText(message);
        });
      }
      setLoading(false);

    }
 
  };

  return (
    <>
      <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit} noValidate>
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
        <LoadingButton
          sx={{ mt: 3, mb: 2,color:"#043c01",backgroundColor:"#fff" }}
          variant="outlined"
          fullWidth
          color="success"
          type="submit"
          loading={loading}
        >
          Login
        </LoadingButton>
      </Box>
      <Button  component={Link} to="/signup" sx={{ textTransform: "none",color:"#000" }}>
        Don't have an account? Signup
      </Button>
    </>
  );
};

export default Login;
