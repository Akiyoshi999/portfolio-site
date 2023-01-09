import { Typography as MuiTypography } from "@mui/material";
import { styled } from "@mui/system";

const CustomMenu = (props) => (
  <MuiTypography
    variant="h3"
    sx={{
      mb: 5,
      fontFamily: ["Concert One", "cursive"].join(","),
    }}
  >
    {props.children}
  </MuiTypography>
);

export default styled(CustomMenu)({});
