import {
  experimental_sx,
  Link as MuiLink,
  ListItemIcon,
  MenuItem,
  styled,
} from "@mui/material";

const Link = styled(MuiLink)(
  experimental_sx({
    color: "black",
    textDecoration: "none",
  })
);

const TabletSubMenuItem = ({ subIcon, route, subContent }) => {
  console.log(subContent, route);
  return (
    <MenuItem>
      <ListItemIcon>{subIcon}</ListItemIcon>
      <Link href={route}>{subContent}</Link>
    </MenuItem>
  );
};

export default TabletSubMenuItem;
