import { Box } from "@mui/system";
import React from "react";

const TopConImage = ({ img }) => {
  return (
    <Box
      component="img"
      src={img}
      sx={{
        height: " calc(100vh - 64px)",
        width: "100%",
      }}
    />
  );
};

export default TopConImage;
