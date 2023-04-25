import { Typography, Grid } from "@mui/material";
import {
  skillDesc,
  skillDescHead,
  skillList,
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
          {skillList.map((skillSection, ind) => (
            <Grid
              key={ind}
              xs={skillList.length - 1 !== ind ? 12 : true}
              md={skillList.length - 1 !== ind ? 6 : true}
              item
            >
              <TableItems
                title={skillSection.title}
                titleIcon={skillSection.titleIcon}
                subheader={skillSection.subheader}
                headItems={skillSection.commonHead}
                rowItemsList={skillSection.skills}
              />
            </Grid>
          ))}
        </Grid>
      </SectionBox>
    </ContainerBox>
  );
};

export default SkillSet;
