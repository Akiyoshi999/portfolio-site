import Toolbar from "@mui/material/Toolbar";
import { AppBar, Box, Stack, Typography } from "@mui/material";
import { TabletNavMenu } from "./TabletNavMenu";
import navBarItems from "../data/const/navBarItems";

export default function TabletHeader() {
  return (
    <AppBar
      spacing={2}
      position="relative"
      color="orange700"
      sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
    >
      <Toolbar sx={{ maxWidth: "xl", height: "64px" }}>
        <Box
          component="img"
          src="/images/logo.png"
          sx={{ height: "100%", width: "auto", mt: 1 }}
          // sx={{ height: "62px", width: "62px", mt: 1 }}
        />
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            ml: 2,
            fontFamily: ["Comfortaa", "cursive"].join(","),
          }}
        >
          Akiyoshi Portfolio
        </Typography>

        <Stack
          direction="row"
          sx={{ justifyContent: "flex-end", flexGrow: 1, m: 0, height: "100%" }}
        >
          {navBarItems.map((menu) => (
            <TabletNavMenu {...menu} key={menu.id} />
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
