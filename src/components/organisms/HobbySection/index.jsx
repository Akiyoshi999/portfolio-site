import { Grid, Typography } from "@mui/material";
import { hobbys, hobbySection } from "../../../const/hobbyItems";
import HobbyItem from "../../molecules/HobbyItem";
import SectionBox from "../../ui/Section/SectionBox";
import SectionTitle from "../../ui/Section/SectionTitle";

const oddJudge = (number) => number % 2 === 0;

const HobbySection = () => {
  return (
    <SectionBox id="hobby-section" backgroundColor="gray">
      <SectionTitle>{hobbySection.title}</SectionTitle>
      <Typography variant="body">{hobbySection.body}</Typography>
      <Grid container spacing={4}>
        {hobbys.map((hobby, ind) => (
          <HobbyItem key={ind} {...hobby} oddFlg={oddJudge(ind)} />
        ))}
      </Grid>
    </SectionBox>
  );
};

export default HobbySection;
