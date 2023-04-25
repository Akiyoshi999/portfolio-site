import { Grid, Typography } from "@mui/material";
import ImageComponent from "../../atoms/ImageComponent";

const HobbyTitle = ({ title, id }) => (
  <Grid id={id} xs={12} item>
    <Typography
      variant="h4"
      sx={{
        display: "flex",
        alignItems: "center",
        "&::before,&::after": {
          content: "''",
          flexGrow: "1",
          height: "1px",
          background: "black",
          margin: "0 1em",
        },
      }}
    >
      {title}
    </Typography>
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

const HobbyItem = ({ title, img, content, elId, oddFlg }) => {
  return (
    <>
      <HobbyTitle title={title} id={elId} />
      <Grid
        item
        container
        direction={{ xs: "row", md: oddFlg ? "row" : "row-reverse" }}
        columnSpacing={2}
        mb={2}
      >
        <HobbyImage img={img} />
        <HobbyContent content={content} />
      </Grid>
    </>
  );
};

export default HobbyItem;
