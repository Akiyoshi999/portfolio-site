import { createTheme } from "@mui/material";
import { amber, grey, orange, red } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          // whiteSpace: "pre-wrap",
        },
      },
    },
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
    orange700: {
      main: amber[700],
    },
  },
});

export { theme };
