import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const MobileNavSubMenuItem = ({ subIcon, subContent }) => {
  return (
    <>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>{subIcon}</ListItemIcon>
          <ListItemText primary={subContent} />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default MobileNavSubMenuItem;
