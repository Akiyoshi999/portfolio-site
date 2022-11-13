import React from "react";
import { Box, Divider } from "@mui/material";
import NavBarItems from "../data/const/navBarItems";
import MobileNavMenuItem from "./MobileNavMenuItem";

const MobileNavMenu = ({ anchor }) => {
  return (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      {NavBarItems.map((item) => (
        <MobileNavMenuItem key={item.content} {...item} />
      ))}
      <Divider />
    </Box>
  );
};

export default MobileNavMenu;
