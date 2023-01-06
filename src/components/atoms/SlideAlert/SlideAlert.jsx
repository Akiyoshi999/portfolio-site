import { Alert, Fade, Snackbar } from "@mui/material";
import React from "react";

const SlideTransition = (props) => {
  return <Fade {...props} />;
};

const SlideAlert = ({ state, setState, severity = "success", msg = "" }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={state}
      autoHideDuration={3000}
      TransitionComponent={SlideTransition}
      onClose={() => setState(false)}
    >
      <Alert onClose={() => setState(false)} severity={severity}>
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default SlideAlert;
