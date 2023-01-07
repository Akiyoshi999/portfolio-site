import { Menu } from "@mui/material";
import TabletSubMenuItem from "../../atoms/TabletSubMenuItem";

const TabletSubMenuItems = ({ anchorEl, onClose, subContents }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        width: "100%",
      }}
    >
      {subContents.map((subContent) => (
        <TabletSubMenuItem key={subContent.subContent} {...subContent} />
      ))}
    </Menu>
  );
};

export default TabletSubMenuItems;
