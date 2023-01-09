import { ThemeProvider } from "@emotion/react";
import { theme } from "../const/muiSetting";
import "../styles/globals.css";
import MobileHeader from "../components/organisms/MobileHeader";
import TabletHeader from "../components/organisms/TabletHeader";

const Header = () => (
  <>
    <TabletHeader />
    <MobileHeader />
  </>
);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
