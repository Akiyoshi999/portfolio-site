// import "../styles/globals.scss";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../const/muiSetting";
import Header from "../components/layout/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
