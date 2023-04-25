import { Box as MuiBox } from "@mui/material";
import { styled } from "@mui/system";

const CustomBox = styled(MuiBox)(({ theme }) =>
  theme.unstable_sx({
    backgroundColor: "#e0e0e0",
    ":nth-of-type(2),:nth-last-of-type(1)": {
      backgroundColor: "white",
    },
  })
);

const ContainerBox = ({ ...props }) => (
  <CustomBox {...props}>{props.children}</CustomBox>
);

export default ContainerBox;
