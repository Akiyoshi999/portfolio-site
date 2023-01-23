import { ListItemIcon, MenuItem } from "@mui/material";
import { Link as Scroll } from "react-scroll";

const TabletSubMenuItem = ({ subIcon, handleClose, subContent, elId }) => {
  return (
    <MenuItem>
      <ListItemIcon>{subIcon}</ListItemIcon>
      <Scroll to={elId} smooth onClick={handleClose}>
        {subContent}
      </Scroll>
    </MenuItem>
  );
};

export default TabletSubMenuItem;
