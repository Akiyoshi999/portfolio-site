// import "../styles/globals.scss";
import { ThemeProvider } from "@emotion/react";
import { navTheme } from "../components/data/material-ui-setting";
import Header from "../components/layout/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={navTheme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
