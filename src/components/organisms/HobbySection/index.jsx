import { Grid, Typography } from "@mui/material";
import { hobbys, hobbySection } from "../../../const/hobbyItems";
import HobbyItem from "../../molecules/HobbyItem";
import SectionBox from "../../ui/Section/SectionBox";
import SectionTitle from "../../ui/Section/SectionTitle";
import ContainerBox from "../../ui/Container/ContainerBox";

const oddJudge = (number) => number % 2 === 0;

const HobbySection = () => {
  return (
    <ContainerBox>
      <SectionBox id="hobby-section">
        <SectionTitle>{hobbySection.title}</SectionTitle>
        <Typography variant="body">{hobbySection.body}</Typography>
        <Grid container spacing={4}>
          {hobbys.map((hobby, ind) => (
            <HobbyItem key={ind} {...hobby} oddFlg={oddJudge(ind)} />
          ))}
        </Grid>
      </SectionBox>
    </ContainerBox>
  );
};

export default HobbySection;
