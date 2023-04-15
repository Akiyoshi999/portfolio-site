import Carousel from "react-material-ui-carousel";
import CustomeImageComponent from "../../atoms/ImageComponent";
import { styled } from "@mui/material";

const ImageComponent = styled(CustomeImageComponent)(({ theme }) =>
  theme.unstable_sx({ height: { xs: "500px" }, width: "100%" })
);

const ImagesCarousel = ({ images }) => {
  return (
    <Carousel
      autoPlay={true}
      fullHeightHover={false}
      navButtonsAlwaysVisible
      interval={7000}
    >
      {images.map((image, i) => (
        <ImageComponent key={i} src={image} />
      ))}
    </Carousel>
  );
};

export default ImagesCarousel;
