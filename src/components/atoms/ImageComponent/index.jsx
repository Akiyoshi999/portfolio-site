import { styled } from "@mui/material";
import { Box as MuiBox } from "@mui/system";

const ImageComponent = ({ img, ...props }) => {
  const Box = styled(MuiBox)(({ theme }) =>
    theme.unstable_sx({
      pointerEvents: "none",
    })
  );
  return <Box component="img" src={img} {...props} />;
};

export default ImageComponent;
