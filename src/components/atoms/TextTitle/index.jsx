import { Typography } from "@mui/material";

const TextTitle = ({ ...props }) => (
  <Typography
    variant="h6"
    sx={{
      display: "flex",
      alignItems: "center",
      "&::before,&::after": {
        content: "''",
        flexGrow: "1",
        height: "1px",
        background: "#000",
        margin: "0 1em",
      },
    }}
    {...props}
  >
    {props.children}
  </Typography>
);

export default TextTitle;
