import { Rating as MuiRating } from "@mui/material";
const Rating = (props) => <MuiRating readOnly {...props}></MuiRating>;

const skillSection = {
  title: "My Skill Set",
  body: "修練のすえ身につけたスキルをグラフィカルにまとめました。広く浅くではありますがフロントからバックエンドまで幅広くスキルアップに取り組んできました。オールラウンドに対応できる点が強みですが、全体的に理解が浅く、専門性の低さを認識しています。今後はバックエンド系の開発（クラウド含む）の業務に携わる比率を増やし、少しずつ専門性を高めていきたいと考えています。",
  elId: "skill-skills-section",
};
const skillDescHead = ["評価", "説明"];

const skillDesc = [
  [<Rating value={1} />, "基礎は理解している。"],
  [<Rating value={2} />, "実務対応できるがもう少し習熟が必要。"],
  [<Rating value={3} />, "実務レベルで自由に駆使できる。"],
  [<Rating value={4} />, "先導者レベルで対応できる。"],
  [<Rating value={5} />, "達人レベルで対応できる。"],
];

const commonHead = ["技術", "スキル"];

const frontSkills = [
  ["JavaScript", <Rating value={3} />],
  ["HTML/CSS", <Rating value={2} />],
  ["React.js", <Rating value={2} />],
  ["Vue.js", <Rating value={2} />],
  ["CSS FW", <Rating value={1} />],
];

const backendSkills = [
  ["PHP/Laravel", <Rating value={3} />],
  ["Python", <Rating value={2} />],
  ["RDBS", <Rating value={2} />],
  ["Nginx", <Rating value={2} />],
];

const devSkills = [
  ["Linux", <Rating value={3} />],
  ["Github", <Rating value={3} />],
  ["Docker/Docker Compose", <Rating value={2} />],
  ["AWS", <Rating value={2} />],
  ["CircleCI", <Rating value={1} />],
];

const cerfHead = ["資格"];
const certification = [
  ["Linuc レベル 1"],
  ["AWS Certified Solutions Architect Associate"],
  ["AWS Certified Developer - Associate"],
  ["AWS Certified SysOps Administrator - Associate"],
];

export {
  skillSection,
  skillDescHead,
  skillDesc,
  commonHead,
  frontSkills,
  backendSkills,
  devSkills,
  certification,
  cerfHead,
};
