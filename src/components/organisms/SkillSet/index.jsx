import { Typography, Grid } from "@mui/material";
import {
  backendSkills,
  cerfHead,
  certification,
  commonHead,
  devSkills,
  frontSkills,
  skillDesc,
  skillDescHead,
  skillSection,
} from "../../../const/skillItems";
import SectionBox from "../../ui/Section/SectionBox";
import SectionTitle from "../../ui/Section/SectionTitle";
import TableItems from "../../molecules/TableItems";

const SkillSet = () => {
  return (
    <SectionBox id="my-skill-set" backgroundColor="gray">
      <SectionTitle>{skillSection.title}</SectionTitle>
      <Typography variant="body">{skillSection.body}</Typography>
      <Grid container rowSpacing={5} columnSpacing={5} py={5}>
        <Grid xs={12} item>
          <TableItems headItems={skillDescHead} rowItemsList={skillDesc} />
        </Grid>
        <Grid xs={12} md={6} item>
          <TableItems headItems={commonHead} rowItemsList={frontSkills} />
        </Grid>
        <Grid xs={12} md={6} item>
          <TableItems headItems={commonHead} rowItemsList={frontSkills} />
        </Grid>
        <Grid xs={12} md={6} item>
          <TableItems headItems={commonHead} rowItemsList={backendSkills} />
        </Grid>
        <Grid xs={12} md={6} item>
          <TableItems headItems={commonHead} rowItemsList={devSkills} />
        </Grid>
        <Grid xs={12} md item>
          <TableItems headItems={cerfHead} rowItemsList={certification} />
        </Grid>
      </Grid>
    </SectionBox>
  );
};

export default SkillSet;
