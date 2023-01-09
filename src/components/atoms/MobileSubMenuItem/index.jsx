import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const MobileSubMenuItem = ({ subIcon, subContent, route }) => {
  return (
    <ListItem>
      <ListItemButton href={route}>
        <ListItemIcon>{subIcon}</ListItemIcon>
        <ListItemText primary={subContent} />
      </ListItemButton>
    </ListItem>
  );
};

export default MobileSubMenuItem;
