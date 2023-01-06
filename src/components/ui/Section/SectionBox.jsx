import { Box } from "@mui/material";
import { styled } from "@mui/system";

const CustomMenu = (props) => (
  <Box sx={{ py: 2, width: "80%", margin: "0 auto" }} {...props}>
    {props.children}
  </Box>
);

export default styled(CustomMenu)({});
