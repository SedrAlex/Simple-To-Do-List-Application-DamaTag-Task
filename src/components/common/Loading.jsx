import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loading = props => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: props.fullHeight ? "100 vh" : "100%",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
