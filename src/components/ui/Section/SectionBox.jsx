import { Box as MuiBox } from "@mui/material";
import { experimental_sx, styled } from "@mui/system";

const CustomBox = styled(MuiBox)(
  experimental_sx({
    py: 5,
    width: "80%",
    margin: "0 auto",
    textAlign: "center",
  })
);

const SectionBox = ({ ...props }) => (
  <CustomBox {...props}>{props.children}</CustomBox>
);

export default SectionBox;
