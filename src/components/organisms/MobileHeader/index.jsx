import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Link,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navBarItems, navMain } from "../../../const/navBarItems";
import { useState } from "react";
import ImageComponent from "../../atoms/ImageComponent";
import MobileMenuItem from "../../molecules/MobileMenuItem";
import { useMobileMenu } from "./logic";

export default function MobileHeader() {
  const { menuFlg, handleMenuOpen, handleMenuClose } = useMobileMenu();

  const MobileHeaderDeault = ({ handleOpen }) => (
    <Toolbar disableGutters sx={{ maxWidth: "xl", height: "64px" }}>
      <IconButton size="large" color="inherit" onClick={handleOpen}>
        <MenuIcon />
      </IconButton>
      <Grid
        container
        display="flex"
        justifyContent="center"
        sx={{ height: "100%", mt: 1 }}
      >
        <Link href={navMain.title}>
          <ImageComponent
            src={navMain.icon}
            sx={{ height: "62px", width: "62px" }}
          />
        </Link>
      </Grid>
    </Toolbar>
  );

  return (
    <>
      <AppBar
        spacing={2}
        position="relative"
        color="orange700"
        sx={{
          flexGrow: 1,
          display: {
            xs: "flex",
            md: "none",
          },
        }}
      >
        <MobileHeaderDeault handleOpen={handleMenuOpen} />
      </AppBar>
      <Drawer anchor="left" open={menuFlg} onClose={handleMenuClose}>
        <Box
          sx={{ width: 250 }}
          // onClick={toggleDrawer(anchor, false)}
          // onKeyDown={toggleDrawer(anchor, false)}
        >
          {navBarItems.map((item) => (
            <MobileMenuItem key={item.content} {...item} />
          ))}
          <Divider />
        </Box>
      </Drawer>
    </>
  );
}
