import { Rating as MuiRating, Typography } from "@mui/material";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import HandymanIcon from "@mui/icons-material/Handyman";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import MonitorIcon from "@mui/icons-material/Monitor";
import StorageIcon from "@mui/icons-material/Storage";
const Rating = (props) => <MuiRating readOnly {...props}></MuiRating>;

const skillSection = {
  title: "My Skill Set",
  body: `私がこれまでに習得してきたスキルをテーブル形式にまとめました。
  深く理解しているわけではありませんが、フロントエンド、バックエンド、インフラ、OSなどの知識を幅広く持っています。
  多様な角度から物事を見ることが私の強みです。
  色々な知識に触れていくうちにインフラや開発の分野に強く興味を惹かれているので、今後はその分野の仕事に携わりたいと考えています。`,
  elId: "skill-skills-section",
};

const skillDescHead = ["評価", "説明"];
const cerfHead = ["資格"];

const skillDesc = [
  [<Rating value={1} />, "基礎は理解している。"],
  [<Rating value={2} />, "実務対応できるがもう少し習熟が必要。"],
  [<Rating value={3} />, "実務レベルで自由に駆使できる。"],
  [<Rating value={4} />, "先導者レベルで対応できる。"],
  [<Rating value={5} />, "達人レベルで対応できる。"],
];

const commonHead = ["技術", "スキル"];

const frontSkills = {
  title: "フロントエンド",
  titleIcon: <MonitorIcon />,
  subheader: `HPはJS/Reactで開発したので、基本的なところは習得できていると思います。
  バックエンドはLaravel、フロントエンドはVue.jsの環境なども勉強のため構築したことがあります。`,
  header: commonHead,
  titleIcon: <MonitorIcon />,
  skills: [
    ["JavaScript", <Rating value={3} />],
    ["HTML/CSS", <Rating value={2} />],
    ["React.js", <Rating value={2} />],
    ["Vue.js", <Rating value={2} />],
  ],
};

const backendSkills = {
  title: "バックエンド",
  titleIcon: <RoomPreferencesIcon />,
  subheader: `Laravelで掲示板やREST API など実装したことがあるので、phpは一通り触れます。
  Lambdaなどは基本的にPythonで実装しています。`,
  header: commonHead,
  skills: [
    ["PHP/Laravel", <Rating value={3} />],
    ["Python", <Rating value={2} />],
    ["RDBS", <Rating value={2} />],
    ["NoSQL", <Rating value={1} />],
  ],
};

const devSkills = {
  title: "開発",
  titleIcon: <HandymanIcon />,
  subheader: `開発に必要なツールは一通り触っています。
  プログラムを書いた場合は、最低限のテストは書くように意識してます。
  CI/CD環境もAWSとGithubとCircle CIで構築したことがあります。`,
  header: commonHead,
  skills: [
    ["Git/Github", <Rating value={3} />],
    ["Docker/Docker Compose", <Rating value={2} />],
    ["CircleCI", <Rating value={1} />],
  ],
};

const infraSkills = {
  title: "インフラ・サーバー",
  titleIcon: <StorageIcon />,
  subheader: `AWSはこのHPの作成や、資格を勉強した際に多くのサービスを使用しているので、使えます。`,
  header: commonHead,
  skills: [
    ["AWS", <Rating value={3} />],
    ["Linux", <Rating value={3} />],
    ["Apache/NodeJS", <Rating value={1} />],
  ],
};
const certification = {
  title: "資格",
  titleIcon: <CardMembershipIcon />,
  subheader: `現在は"AWS Certified Security - Specialty"を学習中です。`,
  skills: [
    ["Linuc レベル 1"],
    ["AWS Certified Solutions Architect Associate"],
    ["AWS Certified Developer - Associate"],
    ["AWS Certified SysOps Administrator - Associate"],
  ],
};

const skillList = [
  frontSkills,
  backendSkills,
  devSkills,
  infraSkills,
  certification,
];

export { skillSection, skillDescHead, skillDesc, skillList };
