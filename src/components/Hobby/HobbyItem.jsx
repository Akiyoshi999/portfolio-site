import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const HobbyItem = ({ title, img, content, evenInd }) => {
  const imgItem = (
    <Grid xs={5} item>
      <Box component="img" src={img} sx={{ height: "auto", width: "100%" }} />
    </Grid>
  );

  const contentItem = (
    <Grid xs={7} item>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1" pt={3}>
        {content}
      </Typography>
    </Grid>
  );

  return (
    <>
      {evenInd ? imgItem : contentItem}
      {evenInd ? contentItem : imgItem}
    </>
  );
};

export default HobbyItem;
