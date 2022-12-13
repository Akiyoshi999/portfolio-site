import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { hobbySection } from "../../data/const/hobboItems";
import HobbyItem from "../../Hobby/HobbyItem";
import SectionBox from "../../ui/Section/SectionBox";
import SectionTitle from "../../ui/Section/SectionTitle";

const HobbySection = () => {
  const oddJudge = (number) => number % 2 === 0;
  return (
    <SectionBox id="hobby" backgroundColor="gray">
      <Box textAlign="center">
        <SectionTitle>My Hobby</SectionTitle>
        <Typography variant="body"></Typography>
        <Grid container spacing={4}>
          {hobbySection.map((hobby, ind) => (
            <HobbyItem key={ind} {...hobby} evenInd={oddJudge(ind)} />
          ))}
        </Grid>
      </Box>
    </SectionBox>
  );
};

export default HobbySection;
