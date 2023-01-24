import { useState } from "react";
import { scroller } from "react-scroll";

export const useMobileMenu = () => {
  const [menuFlg, setMenuFlg] = useState(false);
  const handleMenuOpen = () => {
    setMenuFlg(true);
  };
  const handleMenuClose = () => {
    setMenuFlg(false);
  };

  const handleScroll = (elId) => {
    scroller.scrollTo(elId, { smooth: true });
    setMenuFlg(false);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return {
    menuFlg,
    handleMenuOpen,
    handleMenuClose,
    handleScroll,
  };
};
