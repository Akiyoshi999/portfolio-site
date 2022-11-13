import { MenuItem } from "@mui/material";
import TabletSubMenu from "./elements/TabletSubMenu";
import TabletSubMenuItem from "./TabletSubMenuItem";

const TabletSubMenuItems = ({ anchorEl, onClose, subContents }) => {
  return (
    <TabletSubMenu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      {subContents.map((subContent) => (
        <MenuItem key={subContent.subContent}>
          <TabletSubMenuItem {...subContent} />
        </MenuItem>
      ))}
    </TabletSubMenu>
  );
};

export default TabletSubMenuItems;
