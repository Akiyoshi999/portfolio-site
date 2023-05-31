import { Chip, ThemeProvider, createTheme } from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";

const theme = createTheme({
  palette: {
    brown800: {
      main: "#4e342e",
      contrastText: "#fff",
    },
  },
});

const HashTag = ({ tagName, ...props }) => (
  <ThemeProvider theme={theme}>
    <Chip
      {...props}
      label={tagName}
      size="small"
      color="brown800"
      icon={<TagIcon fontSize="small" />}
    />
  </ThemeProvider>
);

export default HashTag;
