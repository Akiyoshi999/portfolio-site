import { Box, experimental_sx, Grid, styled, Typography } from "@mui/material";
import ImageComponent from "../../atoms/ImageComponent";

const HobbyTitle = ({ title }) => (
  <Grid xs={12} item>
    <Typography variant="h3">{title}</Typography>
  </Grid>
);

const HobbyImage = ({ img }) => (
  <Grid xs={12} md={5} item>
    <ImageComponent src={img} sx={{ height: "auto", width: "100%" }} />
  </Grid>
);

const HobbyContent = ({ content }) => (
  <Grid xs={12} md={7} item>
    <Typography variant="body1" pt={3}>
      {content}
    </Typography>
  </Grid>
);

const HobbyItemGrid = ({ title, img, content, oddFlg }) => (
  <>
    <HobbyTitle title={title} />
    <Grid
      item
      container
      direction={{ xs: "row", md: oddFlg ? "row" : "row-reverse" }}
    >
      <HobbyImage img={img} />
      <HobbyContent content={content} />
    </Grid>
  </>
);

const HobbyItem = ({ title, img, content, oddFlg }) => {
  return (
    <HobbyItemGrid title={title} img={img} content={content} oddFlg={oddFlg} />
  );
};

export default HobbyItem;
