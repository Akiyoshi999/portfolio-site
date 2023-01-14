import {
  experimental_sx,
  ListItem,
  ListItemText as MuiListItemText,
  styled,
} from "@mui/material";

const ListItemText = styled(MuiListItemText)(
  experimental_sx({
    display: "list-item",
  })
);

const CareerSubItem = ({ content }) => (
  <ListItem disablePadding sx={{ pl: 2 }}>
    <ListItemText>{content}</ListItemText>
  </ListItem>
);

export default CareerSubItem;
