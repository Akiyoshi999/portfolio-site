import { Menu, Typography } from "@mui/material";
import { styled } from "@mui/system";

const CustomMenu = (props) => (
  <Typography
    variant="h3"
    sx={{ mb: 5, fontFamily: ["Concert One", "cursive"].join(",") }}
  >
    {props.children}
  </Typography>
);

export default styled(CustomMenu)({});
