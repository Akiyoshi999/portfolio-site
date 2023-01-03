import { alpha, createTheme } from "@mui/material";
import { amber, grey, orange, red } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            transition:
              "background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s",
          },
        },
      },
    },
  },
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

export { theme };
