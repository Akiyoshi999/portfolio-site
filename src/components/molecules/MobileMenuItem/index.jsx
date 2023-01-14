import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import MobileSubMenuItems from "../MobileSubMenuItems";

const MobileMenuItem = ({ icon, content, subContents, route = "" }) => {
  const [subMenuopen, setSubMenuopen] = useState(false);
  const handleSubMenuFlg = () => {
    setSubMenuopen(!subMenuopen);
  };

  const expandCond = subMenuopen ? <ExpandLess /> : <ExpandMore />;

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton href={route} onClick={handleSubMenuFlg}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={content} />
          {subContents ? expandCond : ""}
        </ListItemButton>
      </ListItem>
      {subContents ? (
        <Collapse in={subMenuopen} timeout="auto">
          <MobileSubMenuItems subContents={subContents} />
        </Collapse>
      ) : (
        ""
      )}
    </>
  );
};

export default MobileMenuItem;
