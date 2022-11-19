import {
  Button,
  Link,
  ListItemIcon,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";

const TabletSubMenuItem = (props) => {
  return (
    <>
      <ListItemIcon>{props.subIcon}</ListItemIcon>
      <Link href={props.route} sx={{ color: "black", textDecoration: "none" }}>
        {props.subContent}
      </Link>
    </>
  );
};

export default TabletSubMenuItem;
