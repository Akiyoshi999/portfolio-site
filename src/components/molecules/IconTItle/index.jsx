import { Link, Typography } from "@mui/material";
import { navMain } from "../../../const/navBarItems";
import ImageComponent from "../../atoms/ImageComponent";

const IconTitle = () => (
  <>
    <Link href={navMain.topPath} position="relative" sx={{ height: "100%" }}>
      <ImageComponent
        src={navMain.icon}
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
      {navMain.title}
    </Typography>
  </>
);

export default IconTitle;
