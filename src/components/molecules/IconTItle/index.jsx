import { Typography } from "@mui/material";
import { navMain } from "../../../const/navBarItems";
import { topContent } from "../../../const/topItems";
import ImageComponent from "../../atoms/ImageComponent";
import ScrollButton from "../../atoms/ScrollButton";

const IconTitle = () => (
  <>
    <ScrollButton
      to={topContent.elId}
      sx={{
        position: "relative",
        height: "100%",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ImageComponent
        src={navMain.icon}
        sx={{ position: "relative", height: "100%", width: "auto", pt: 1 }}
      />

      <Typography
        variant="h5"
        ml={2}
        sx={{
          fontFamily: ["Comfortaa", "cursive"].join(","),
        }}
      >
        {navMain.title}
      </Typography>
    </ScrollButton>
  </>
);

export default IconTitle;
