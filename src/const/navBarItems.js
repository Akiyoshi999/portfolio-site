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
import { hobbys } from "./hobbyItems";

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
    elId: topContent.elId,
  },
  {
    id: 1,
    icon: <BadgeIcon />,
    content: "プロフィール",
    elId: profileSection.elId,
  },
  {
    id: 2,
    icon: <BuildIcon />,
    content: "スキル",
    subContents: [
      {
        subContent: "成果物",
        subIcon: <ComputerIcon />,
        elId: productSection.elId,
      },
      {
        subContent: "経歴",
        subIcon: <ConstructionIcon />,
        elId: careerSection.elId,
      },
      {
        subContent: "スキル",
        subIcon: <CardMembershipIcon />,
        elId: skillSection.elId,
      },
    ],
  },
  {
    id: 3,
    icon: <SportsEsportsIcon />,
    content: "趣味",
    subContents: [
      {
        subContent: "釣り",
        subIcon: <PhishingIcon />,
        elId: hobbys[0].elId,
      },
      {
        subContent: "ボードゲーム",
        subIcon: <CasinoIcon />,
        elId: hobbys[2].elId,
      },
      ,
    ],
  },
  {
    id: 4,
    icon: <EmailIcon />,
    content: "連絡先",
    elId: contactSection.elId,
  },
];

export { navMain, navBarItems };
