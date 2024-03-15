import { LoadingButton } from "@mui/lab";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [usernameErrText, setUsernameErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");
  const [confirmPasswordErrText, setConfirmPasswordErrText] = useState("");

  const schema = Yup.object().shape({
    username: Yup.string()
      .minLength(3)
      .maxLength(25)
      .required(" Name should be required please"),
    email: yup.string().email().required("Email should be required please"),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null],'Passwords must match'),
  })
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setUsernameErrText("");
    // setPasswordErrText("");
    // setConfirmPasswordErrText("");

    const data = new FormData(e.target);
  

  const errors = schema.validate(formData);

  if (errors.length > 0) {
    // There are errors in the form data
    alert(errors.join("\n"));
  } else {
    // The form data is valid, do something with it
  }
  try {
    const res = await authApi.signup({
      username, password, confirmPassword
    })
    setLoading(false)
    localStorage.setItem('token', res.token)
    navigate('/')
  } catch (err) {
    const errors = err.data.errors
    errors.forEach(e => {
      if (e.param === 'username') {
        setUsernameErrText(e.msg)
      }
      if (e.param === 'password') {
        setPasswordErrText(e.msg)
      }
      if (e.param === 'confirmPassword') {
        setConfirmPasswordErrText(e.msg)
      }
    })
    setLoading(false)
  }

  }
  return (
    <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit} noValidate>
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        disabled={loading}
        // error={usernameErrText !== ""}
        // helperText={usernameErrText}
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
        // error={usernameErrText !== ""}
        // helperText={usernameErrText}
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
        sx={{
          mt: 3,
          mb: 2,
        }}
        variant="outlined"
        fullWidth
        color="success"
        type="submit"
        loading={loading}
      >
        Signup
      </LoadingButton>
      <Button
        component={Link}
        to="/login"
        sx={{ textTransform: "none", color: "#000" }}
      >
        Already have an account? Login
      </Button>
    </Box>
  );
};

export default Signup;
