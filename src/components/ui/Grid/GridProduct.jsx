import { Grid } from "@mui/material";
import { styled } from "@mui/system";

const CustomMenu = (props) => (
  <Grid
    xs={12}
    sm={6}
    md={4}
    item
    display="flex"
    sx={{ justifyContent: "center" }}
    {...props}
  >
    {props.children}
  </Grid>
);

export default styled(CustomMenu)({});
