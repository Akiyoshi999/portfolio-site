import { ListItemIcon, MenuItem, Typography } from "@mui/material";
import React from "react";

const TabletSubMenuItem = (props) => {
  return (
    <>
      <ListItemIcon>{props.subIcon}</ListItemIcon>
      <Typography>{props.subContent}</Typography>
    </>
  );
};

export default TabletSubMenuItem;
