import { Box } from "@mui/system";

const ImageComponent = ({ img, ...props }) => {
  return <Box component="img" src={img} {...props} />;
};

export default ImageComponent;
