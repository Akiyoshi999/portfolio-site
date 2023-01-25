import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navBarItems, navMain } from "../../../const/navBarItems";
import ImageComponent from "../../atoms/ImageComponent";
import MobileMenuItem from "../../molecules/MobileMenuItem";
import { useMobileMenu } from "./logic";
import ScrollButton from "../../atoms/ScrollButton";
import { topContent } from "../../../const/topItems";

export default function MobileHeader() {
  const { menuFlg, handleMenuOpen, handleMenuClose, handleScroll } =
    useMobileMenu();

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
        <ScrollButton to={topContent.elId} sx={{ cursor: "pointer" }}>
          <ImageComponent
            src={navMain.icon}
            sx={{ height: "62px", width: "62px" }}
          />
        </ScrollButton>
      </Grid>
    </Toolbar>
  );

  return (
    <>
      <AppBar
        spacing={2}
        position="sticky"
        color="orange700"
        sx={{
          top: 0,
          zIndex: 100,
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
        <Box sx={{ width: 250 }}>
          {navBarItems.map((item) => (
            <MobileMenuItem
              key={item.content}
              handleScroll={handleScroll}
              {...item}
            />
          ))}
          <Divider />
        </Box>
      </Drawer>
    </>
  );
}
