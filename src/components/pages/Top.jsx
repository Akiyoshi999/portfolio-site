import { Box } from "@mui/material";
import ContactForm from "../organisms/ContactForm";
import HobbySection from "../organisms/HobbySection";
import ProfileSection from "../organisms/ProfileSection";
import SkillCareer from "../organisms/SkillCareer";
import SkillProduct from "../organisms/SkillProduct";
import SkillSet from "../organisms/SkillSet";
import TopContainer from "../organisms/TopContainer";
import Footer from "./Footer";

const Top = () => {
  return (
    <>
      <Box>
        <TopContainer />
        <ProfileSection />
        <SkillProduct />
        <SkillCareer />
        <SkillSet />
        <HobbySection />
        <ContactForm />
      </Box>
      <Footer />
    </>
  );
};

export default Top;
