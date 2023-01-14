import { Box as MuiBox } from "@mui/material";
import { experimental_sx, styled } from "@mui/system";

export default styled(MuiBox)(
  experimental_sx({
    py: 2,
    width: "80%",
    margin: "0 auto",
    textAlign: "center",
  })
);
