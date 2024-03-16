import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import authUtils from "../../utils/authUtils";
import Loading from "../common/Loading";
import { Box, Container } from "@mui/material";
import Logo from "../../assets/images/DamaTag.png";

const AuthLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await authUtils.isAuthenticated();
      if (!isAuth) {
        setLoading(false);
      } else {
        navigate("/todo");
      }
    };
    checkAuth();
  }, [navigate]);

  return loading ? (
    <Loading fullHeight />
  ) : (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src={Logo} style={{ width: "100%" }} alt="pop-logo" />
        <Outlet />
      </Box>
    </Container>
  );
};

export default AuthLayout;
