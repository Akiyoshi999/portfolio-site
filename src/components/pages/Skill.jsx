import { Box } from "@mui/system";
import SkillProduct from "../layout/Skill/SkillProduct";
import SkillSet from "../layout/Skill/SkillSet";
import SkillCareer from "../organisms/SkillCareer";

export default function Skill() {
  return (
    <Box
      className="skill-wrapper"
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "lightblue",
      }}
    >
      <SkillProduct />
      <SkillCareer />
      <SkillSet />
    </Box>
  );
}
