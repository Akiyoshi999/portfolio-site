import { Typography } from "@mui/material";
import { Box, keyframes } from "@mui/system";
import React from "react";

const TopConCatchCopy = () => {
  const keyframeAnime = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateX(+30%);
            transform: translateX(+30%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
`;
  const animation = `${keyframeAnime} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`;
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          opacity: 0,
          animation: animation,
        }}
      >
        お客様とより良いサービスを提供したいーー
      </Typography>
      <Typography
        sx={{
          opacity: 0,
          animation: animation,
        }}
      >
        サイトウグループは、お客様に愛されるサービスを提供いたします。
      </Typography>
    </>
  );
};

export default TopConCatchCopy;
