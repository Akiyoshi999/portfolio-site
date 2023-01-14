import { useState } from "react";

export const useMobileMenu = () => {
  const [menuFlg, setMenuFlg] = useState(false);
  const handleMenuOpen = () => {
    setMenuFlg(true);
  };
  const handleMenuClose = () => {
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
  };
};
