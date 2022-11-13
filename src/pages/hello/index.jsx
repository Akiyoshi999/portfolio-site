import React, { useState } from "react";
import {
  Button,
  createTheme,
  Menu,
  MenuItem,
  ThemeProvider,
} from "@mui/material";
const theme = createTheme({});
const MyMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    console.log(e.currentTarget);
    // console.log(e.clientX, e.clientY);
    // console.log(anchorEl);
    const menu = document.getElementById("simple-menu");
    // console.log(menu);
    // if (e.currentTarget.localName !== "ul") {
    //   const menu = document.getElementById("simple-menu").children[2];
    //   const menuBoundary = {
    //     left: menu.offsetLeft,
    //     top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
    //     right: menu.offsetLeft + menu.offsetHeight,
    //     bottom: menu.offsetTop + menu.offsetHeight,
    //   };
    //   if (
    //     e.clientX >= menuBoundary.left &&
    //     e.clientX <= menuBoundary.right &&
    //     e.clientY <= menuBoundary.bottom &&
    //     e.clientY >= menuBoundary.top
    //   ) {
    //     return;
    //   }
    // }

    setOpen(false);
  };

  const handleMenu = (e) => {
    console.log(e.currentTarget);
  };

  // theme.props = {
  //   MuiList: {
  //     onMouseLeave: (e) => {
  //       handleClose(e);
  //     },
  //   },
  // };
  return (
    <>
      <Button
        id="menubutton"
        aria-owns={open ? "simple-menu" : undefined}
        aria-haspopup="true"
        onMouseOver={handleOpen}
        onMouseLeave={handleClose}
        sx={{ zIndex: 1301 }}
      >
        Open MENU
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        // onMouse={{ handleMenu }}
        onMouseLeave={handleClose}
        disablePortal
      >
        <MenuItem>Menu</MenuItem>
        <MenuItem>Items</MenuItem>
      </Menu>
    </>
  );
};

export default MyMenu;
