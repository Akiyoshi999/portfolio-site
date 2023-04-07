import {
  experimental_sx,
  ListItem as MuiListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";

const ListItem = styled(MuiListItem)(({ theme }) =>
  theme.unstable_sx({ pl: 2 })
);

const MobileSubMenuItem = ({ subIcon, subContent, elId, handleScroll }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={() => handleScroll(elId)}>
        <ListItemIcon>{subIcon}</ListItemIcon>
        <ListItemText primary={subContent} />
      </ListItemButton>
    </ListItem>
  );
};

export default MobileSubMenuItem;
