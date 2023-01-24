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

const MobileMenuItem = ({ icon, content, subContents, elId, handleScroll }) => {
  const [subMenuopen, setSubMenuopen] = useState(false);
  const handleSubMenuFlg = () => {
    setSubMenuopen(!subMenuopen);
  };

  const expandCond = subMenuopen ? <ExpandLess /> : <ExpandMore />;

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          onClick={subContents ? handleSubMenuFlg : () => handleScroll(elId)}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={content} />
          {subContents ? expandCond : ""}
        </ListItemButton>
      </ListItem>
      {subContents ? (
        <Collapse in={subMenuopen} timeout="auto">
          <MobileSubMenuItems
            subContents={subContents}
            handleScroll={handleScroll}
          />
        </Collapse>
      ) : (
        ""
      )}
    </>
  );
};

export default MobileMenuItem;
