import Toolbar from "@mui/material/Toolbar";
import { AppBar, Stack } from "@mui/material";
import { navBarItems } from "../../../const/navBarItems";
import TabletNavMenu from "../TabletNavMenu";
import IconTitle from "../../molecules/IconTItle";

const TabletHeader = () => {
  return (
    <AppBar
      spacing={2}
      position="sticky"
      color="orange700"
      sx={{
        top: 0,
        zIndex: 300,
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
      }}
    >
      <Toolbar sx={{ maxWidth: "xl", height: "64px" }}>
        <IconTitle />
        <Stack
          direction="row"
          justifyContent="flex-end"
          height="100%"
          m={0}
          sx={{ flexGrow: 1 }}
        >
          {navBarItems.map((menu) => (
            <TabletNavMenu {...menu} key={menu.id} />
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TabletHeader;
