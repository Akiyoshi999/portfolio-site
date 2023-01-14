import { Grid, Typography } from "@mui/material";
import ImageComponent from "../../atoms/ImageComponent";

const HobbyImage = ({ img }) => (
  <Grid xs={5} item>
    <ImageComponent src={img} sx={{ height: "auto", width: "100%" }} />
  </Grid>
);

const HobbyContent = ({ content, title }) => (
  <Grid xs={7} item>
    <Typography variant="h4">{title}</Typography>
    <Typography variant="body1" pt={3}>
      {content}
    </Typography>
  </Grid>
);

const HobbyItem = ({ title, img, content, oddFlg }) => {
  return oddFlg ? (
    <>
      <HobbyImage img={img} />
      <HobbyContent title={title} content={content} />
    </>
  ) : (
    <>
      <HobbyContent title={title} content={content} />
      <HobbyImage img={img} />
    </>
  );
};

export default HobbyItem;
