import { ListItemIcon, MenuItem } from "@mui/material";
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
