import { Menu } from "@mui/material";
import { styled } from "@mui/system";

const CustomMenu = (props) => (
  <Menu
    {...props}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    keepMounted
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    sx={{
      width: "100%",
    }}
  >
    {props.children}
  </Menu>
);

export default styled(CustomMenu)({});
