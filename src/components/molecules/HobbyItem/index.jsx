import { Grid, Typography } from "@mui/material";
import ImageComponent from "../../atoms/ImageComponent";
import Carousel from "react-material-ui-carousel";

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

const HobbyImage = ({ images }) => (
  <Grid xs={12} md={5} item>
    <Carousel
      autoPlay={true}
      fullHeightHover={false}
      navButtonsAlwaysVisible
      interval={7000}
    >
      {images.map((image, i) => (
        <ImageComponent
          key={i}
          src={image}
          sx={{
            height: "auto",
            width: "100%",
            maxHeight: "400px",
            objectFit: "contain",
          }}
        />
      ))}
    </Carousel>
  </Grid>
);

const HobbyContent = ({ content }) => (
  <Grid xs={12} md={7} item>
    <Typography variant="body1" pt={3} whiteSpace="pre-wrap">
      {content}
    </Typography>
  </Grid>
);

const HobbyItem = ({ title, images, content, elId, oddFlg }) => {
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
        <HobbyImage images={images} />
        <HobbyContent content={content} />
      </Grid>
    </>
  );
};

export default HobbyItem;
