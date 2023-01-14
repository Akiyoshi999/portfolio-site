import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CareerSubItem from "../../atoms/CareerSubItem";
import DateTerm from "../../atoms/DateTypography";

const boderStyle = {
  position: "absolute",
  content: '""',
  top: 0,
  left: "50%",
  height: "100%",
  borderLeft: "2px solid blue",
};

const DateItem = ({ date }) => (
  <Grid item xs={2} textAlign="center">
    <DateTerm date={date} />
  </Grid>
);

const IconItem = ({ icon, lastChildFlg }) => (
  <Grid
    item
    xs={1}
    sx={{
      bgcolor: "red",
      position: "relative",
      "&::before": lastChildFlg ? boderStyle : "",
    }}
    display="flex"
    justifyContent="center"
  >
    <Avatar>{icon}</Avatar>
  </Grid>
);

const ContentItem = ({ title, contents }) => (
  <Grid className="career" item xs={9}>
    <List
      sx={{
        pl: 1,
        pb: 3,
        listStyleType: "disc",
      }}
      disablePadding
    >
      <ListItem className="career-title" disablePadding>
        <ListItemText>
          <Typography variant="h6">{title}</Typography>
        </ListItemText>
      </ListItem>
      {contents.map((content) => (
        <CareerSubItem key={content} content={content} />
      ))}
    </List>
  </Grid>
);

const CareerItem = ({ title, icon, date, contents, lastChildFlg }) => {
  return (
    <Grid
      container
      sx={{
        minHeight: "100px",
      }}
    >
      <DateItem date={date} />
      <IconItem icon={icon} lastChildFlg={lastChildFlg} />
      <ContentItem title={title} contents={contents} />
    </Grid>
  );
};

export default CareerItem;
