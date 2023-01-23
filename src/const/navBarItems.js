import HomeIcon from "@mui/icons-material/Home";
import BadgeIcon from "@mui/icons-material/Badge";

import BuildIcon from "@mui/icons-material/Build";
// 成果物の候補
import ComputerIcon from "@mui/icons-material/Computer";
import LaptopIcon from "@mui/icons-material/Laptop";

import WorkIcon from "@mui/icons-material/Work";
import ConstructionIcon from "@mui/icons-material/Construction";
import CardMembershipIcon from "@mui/icons-material/CardMembership";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PhishingIcon from "@mui/icons-material/Phishing";
import CasinoIcon from "@mui/icons-material/Casino";

import EmailIcon from "@mui/icons-material/Email";
import { careerSection } from "./careerItems";
import { topContent } from "./topItems";
import { profileSection } from "./profileItems";
import { productSection } from "./productItems";
import { skillSection } from "./skillItems";
import { contactSection } from "./contactItem";

const navMain = {
  title: "Akiyoshi Portfolio",
  icon: "/images/logo.png",
  topPath: "/",
};

const navBarItems = [
  {
    id: 0,
    icon: <HomeIcon />,
    content: "TOP",
    route: "/",
    elId: topContent.elId,
  },
  {
    id: 1,
    icon: <BadgeIcon />,
    content: "プロフィール",
    route: "/profile",
    elId: profileSection.elId,
  },
  {
    id: 2,
    icon: <BuildIcon />,
    content: "スキル",
    route: "",
    subContents: [
      {
        subContent: "成果物",
        subIcon: <ComputerIcon />,
        route: "/skill",
        elId: productSection.elId,
      },
      {
        subContent: "経歴",
        subIcon: <ConstructionIcon />,
        route: "/skill",
        elId: careerSection.elId,
      },
      {
        subContent: "スキル",
        subIcon: <CardMembershipIcon />,
        route: "/skill",
        elId: skillSection.elId,
      },
    ],
  },
  {
    id: 3,
    icon: <SportsEsportsIcon />,
    content: "趣味",
    route: "",
    subContents: [
      {
        subContent: "釣り",
        subIcon: <PhishingIcon />,
        route: "/hobby",
        elId: "hobby-fish-section",
      },
      {
        subContent: "ボードゲーム",
        subIcon: <CasinoIcon />,
        route: "/hobby",
        elId: "hobby-boardgame-section",
      },
      ,
    ],
  },
  {
    id: 4,
    icon: <EmailIcon />,
    content: "連絡先",
    route: "/contact",
    elId: contactSection.elId,
  },
];

export { navMain, navBarItems };
