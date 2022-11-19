import * as React from "react";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNavMenu from "./MobileNavMenu";

export default function MobileHeader() {
  const [menuFlg, setMenuFlg] = React.useState(false);
  const handleMenuOpen = () => {
    setMenuFlg(true);
  };
  const handleMenuClose = () => {
    setMenuFlg(false);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

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
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ maxWidth: "xl", height: "64px" }}
            // sx={{ display: "flex", justifyContent: "center" }}
          >
            <IconButton size="large" color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Grid
              container
              display="flex"
              justifyContent="center"
              sx={{ height: "100%", mt: 1 }}
            >
              <Box
                component="img"
                src="/images/logo.png"
                sx={{ height: "62px", width: "62px" }}
              />
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="left" open={menuFlg} onClose={handleMenuClose}>
        <MobileNavMenu anchor="left" />
      </Drawer>
    </>
  );
}
