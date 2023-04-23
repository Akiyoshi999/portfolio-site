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
import ContainerBox from "../../ui/Container/ContainerBox";

const SkillSet = () => {
  return (
    <ContainerBox>
      <SectionBox id={skillSection.elId}>
        <SectionTitle>{skillSection.title}</SectionTitle>
        <Typography variant="body">{skillSection.body}</Typography>
        <Grid container rowSpacing={5} columnSpacing={5} py={5}>
          <Grid xs={12} item>
            <TableItems headItems={skillDescHead} rowItemsList={skillDesc} />
          </Grid>
          <Grid xs={12} md={6} item>
            <TableItems
              title={frontSkills.title}
              headItems={commonHead}
              rowItemsList={frontSkills.skills}
            />
          </Grid>
          <Grid xs={12} md={6} item>
            <TableItems
              title={frontSkills.title}
              headItems={commonHead}
              rowItemsList={frontSkills.skills}
            />
          </Grid>
          <Grid xs={12} md={6} item>
            <TableItems
              title={backendSkills.title}
              headItems={commonHead}
              rowItemsList={backendSkills.skills}
            />
          </Grid>
          <Grid xs={12} md={6} item>
            <TableItems
              title={devSkills.title}
              headItems={commonHead}
              rowItemsList={devSkills.skills}
            />
          </Grid>
          <Grid xs={12} md item>
            <TableItems
              title={certification.title}
              headItems={cerfHead}
              rowItemsList={certification.skills}
            />
          </Grid>
        </Grid>
      </SectionBox>
    </ContainerBox>
  );
};

export default SkillSet;
