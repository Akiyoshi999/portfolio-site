import { Box, Typography } from "@mui/material";
import { careers, careerSection } from "../../../const/careerItems";
import CareerItem from "../../molecules/CareerItem";
import SectionBox from "../../ui/Section/SectionBox";
import SectionTitle from "../../ui/Section/SectionTitle";

const SkillCareer = () => {
  return (
    <Box>
      <SectionBox id={careerSection.elId} sx={{ backgroundColor: "#bcaaa4" }}>
        <SectionTitle>{careerSection.title}</SectionTitle>
        <Typography variant="body">{careerSection.body}</Typography>
        {careers.map((career, ind) => {
          return (
            <CareerItem
              key={career.title}
              title={career.title}
              contents={career.contents}
              icon={career.icon}
              date={career.date}
              lastChildFlg={careers.length - 1 !== ind}
            />
          );
        })}
      </SectionBox>
    </Box>
  );
};

export default SkillCareer;
