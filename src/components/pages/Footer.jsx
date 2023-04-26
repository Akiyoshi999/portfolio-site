import React from "react";
import emotionStyled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const ContentBox = emotionStyled(Box)(({ css }) => css);

const Footer = () => {
  return (
    <ContentBox
      sx={{
        bgcolor: "#1b2123",
        color: "white",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        height: "48px",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          fontFamily: ["Comfortaa", "cursive"].join(","),
        }}
      >
        &copy; 2023 Akiyoshi Saito
      </Typography>
    </ContentBox>
  );
};

export default Footer;
