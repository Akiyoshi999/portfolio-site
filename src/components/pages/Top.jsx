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
      <SkillProduct />
      <SkillCareer />
      <SkillSet />
      <HobbySection />
      <ContactForm />
    </>
  );
};

export default Top;
