import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { careers } from "../../../const/careerItems";
import CareerItem from "../../ui/Career/CareerItem";
import SectionBox from "../../ui/Section/SectionBox";
import SectionTitle from "../../ui/Section/SectionTitle";

const SkillCareer = () => {
  return (
    <SectionBox id="skill-career" backgroundColor="silver">
      <SectionTitle>My Career</SectionTitle>
      <Typography variant="body"></Typography>
      {careers.map((career, ind) => {
        return (
          <CareerItem
            career={career}
            lastChildFlg={careers.length - 1 !== ind}
            key={career.title}
          />
        );
      })}
    </SectionBox>
  );
};

export default SkillCareer;
