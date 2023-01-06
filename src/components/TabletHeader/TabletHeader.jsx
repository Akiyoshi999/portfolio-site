import Toolbar from "@mui/material/Toolbar";
import { AppBar, Box, Link, Stack, Typography } from "@mui/material";
import { TabletNavMenu } from "./TabletNavMenu";
import navBarItems from "../../const/navBarItems";

export default function TabletHeader() {
  return (
    <AppBar
      spacing={2}
      position="relative"
      color="orange700"
      sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
    >
      <Toolbar sx={{ maxWidth: "xl", height: "64px" }}>
        <Link href="/" position="relative" sx={{ height: "100%" }}>
          <Box
            component="img"
            src="/images/logo.png"
            sx={{ height: "100%", width: "auto", pt: 1 }}
          />
        </Link>
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
