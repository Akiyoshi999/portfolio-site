import { Box } from "@mui/system";
import SkillCareer from "../layout/Skill/SkillCareer";
import SkillSet from "../layout/Skill/SkillSet";

export default function Skill() {
  return (
    <Box
      className="skill-wrapper"
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "lightblue",
        pt: 2,
      }}
    >
      <SkillCareer />
      <SkillSet />
    </Box>
  );
}
