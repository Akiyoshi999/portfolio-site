import { alpha, createTheme } from "@mui/material";
import { amber, grey, orange, red } from "@mui/material/colors";

const navTheme = createTheme({
  typography: {
    fontFamily: [],
  },
  palette: {
    mode: "light",
    // primary: {
    //   main: "#311b92",
    // },
    orange700: {
      // main: amber[700],
      main: alpha(orange[400], 0.7),
    },
  },
});

export { navTheme };
