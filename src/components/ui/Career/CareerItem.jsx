import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const yearMonth = (targetDate) => {
  const date = new Date(targetDate);
  if (isNaN(date)) {
    return "現在";
  }
  const [year, month] = [date.getFullYear(), date.getMonth() + 1];
  return `${year}年${month}月`;
};
const term = ({ before, after }) => {
  const beforeDate = yearMonth(before);
  const afterDate = yearMonth(after);

  return `${beforeDate}
  ~
  ${afterDate}`;
};

const boderStyle = {
  position: "absolute",
  content: '""',
  top: 0,
  left: "50%",
  height: "100%",
  borderLeft: "2px solid blue",
};

const CareerItem = ({ career, lastChildFlg }) => {
  return (
    <Grid
      key={career.date}
      container
      sx={{
        minHeight: "100px",
      }}
    >
      <Grid item xs={2} textAlign="center">
        <Typography sx={{ whiteSpace: "pre-wrap" }}>
          {term(career.date)}
        </Typography>
      </Grid>
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
        <Avatar>{career.icon}</Avatar>
      </Grid>
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
              <Typography variant="h6">{career.title}</Typography>
            </ListItemText>
          </ListItem>
          {career.contents.map((content) => (
            <ListItem key={content} disablePadding sx={{ pl: 2 }}>
              <ListItemText
                key={content}
                sx={{
                  display: "list-item",
                }}
              >
                {content}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default CareerItem;
