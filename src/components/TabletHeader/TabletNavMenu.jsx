import { Button } from "@mui/material";
import React, { useState } from "react";
import TabletSubMenuItems from "./TabletSubMenuItems";

export const TabletNavMenu = (props) => {
  const params = {
    subContents: [],
    ...props,
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlelose = () => {
    setAnchorEl(null);
  };

  const action = {
    anchorEl: anchorEl,
    open: Boolean(anchorEl),
    onClose: handlelose,
    subContents: params.subContents,
  };

  return (
    <>
      <Button
        sx={{
          color: "black",
          "&:hover": {
            color: "white",
          },
        }}
        href={params.route}
        onClick={params.subContents.length ? handleOpen : () => {}}
        startIcon={params.icon}
      >
        {params.content}
      </Button>
      {params.subContents ? (
        <TabletSubMenuItems unique={params.content} {...action} />
      ) : (
        ""
      )}
    </>
  );
};
