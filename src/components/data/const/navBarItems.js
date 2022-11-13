import HomeIcon from "@mui/icons-material/Home";
import BadgeIcon from "@mui/icons-material/Badge";

import BuildIcon from "@mui/icons-material/Build";
// 成果物の候補
import ComputerIcon from "@mui/icons-material/Computer";
import LaptopIcon from "@mui/icons-material/Laptop";

import ConstructionIcon from "@mui/icons-material/Construction";
import CardMembershipIcon from "@mui/icons-material/CardMembership";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PhishingIcon from "@mui/icons-material/Phishing";
import CasinoIcon from "@mui/icons-material/Casino";

import EmailIcon from "@mui/icons-material/Email";

const NavBarItems = [
  { id: 0, icon: <HomeIcon />, content: "TOP", route: "/" },
  { id: 1, icon: <BadgeIcon />, content: "プロフィール", route: "/profile" },
  {
    id: 2,
    icon: <BuildIcon />,
    content: "スキル",
    route: "",
    subContents: [
      { subContent: "成果物", subIcon: <ComputerIcon /> },
      { subContent: "スキル", subIcon: <ConstructionIcon /> },
      { subContent: "資格", subIcon: <CardMembershipIcon /> },
    ],
  },
  {
    id: 3,
    icon: <SportsEsportsIcon />,
    content: "趣味",
    route: "",
    subContents: [
      { subContent: "釣り", subIcon: <PhishingIcon /> },
      { subContent: "ボードゲーム", subIcon: <CasinoIcon /> },
      ,
    ],
  },
  { id: 4, icon: <EmailIcon />, content: "連絡先", route: "/contact" },
];

export default NavBarItems;
