import { ListItemIcon, MenuItem } from "@mui/material";
import { Link as Scroll } from "react-scroll";
import ScrollButton from "../ScrollButton";

const TabletSubMenuItem = ({ subIcon, handleClose, subContent, elId }) => {
  return (
    <MenuItem>
      <ListItemIcon>{subIcon}</ListItemIcon>
      <ScrollButton to={elId} onClick={handleClose}>
        {subContent}
      </ScrollButton>
    </MenuItem>
  );
};

export default TabletSubMenuItem;
