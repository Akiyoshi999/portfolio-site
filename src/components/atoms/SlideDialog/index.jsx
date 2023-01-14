import { Dialog, DialogTitle, Slide } from "@mui/material";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SlideDialog = ({ openFlg, onClose }) => {
  return (
    <Dialog
      open={openFlg}
      keepMounted
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <DialogTitle>TEST Dialo</DialogTitle>
    </Dialog>
  );
};

export default SlideDialog;
