import { useState } from "react";

export const useTabletNavMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const action = {
    anchorEl: anchorEl,
    open: Boolean(anchorEl),
    onClose: handleClose,
  };
  return {
    handleOpen,
    handleClose,
    action,
  };
};
