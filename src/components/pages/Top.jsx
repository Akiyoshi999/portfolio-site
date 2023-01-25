import { Box } from "@mui/material";
import ContactForm from "../organisms/ContactForm";
import HobbySection from "../organisms/HobbySection";
import ProfileSection from "../organisms/ProfileSection";
import SkillCareer from "../organisms/SkillCareer";
import SkillProduct from "../organisms/SkillProduct";
import SkillSet from "../organisms/SkillSet";
import TopContainer from "../organisms/TopContainer";

const Top = () => {
  return (
    <>
      <TopContainer />
      <ProfileSection />
      <Box sx={{ backgroundColor: "gray" }}>
        <SkillProduct />
        <SkillCareer />
        <SkillSet />
      </Box>
      <HobbySection />
      <ContactForm />
    </>
  );
};

export default Top;
