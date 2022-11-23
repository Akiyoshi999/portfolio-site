import { Rating } from "@mui/material";
const skillDescHead = ["評価", "説明"];

const skillDesc = [
  { id: 1, rate: <Rating value={1} />, description: "基礎は理解している。" },
  {
    id: 2,
    rate: <Rating value={2} />,
    description: "実務対応できるがもう少し習熟が必要。",
  },
  {
    id: 3,
    rate: <Rating value={3} />,
    description: "実務レベルで自由に駆使できる。",
  },
  {
    id: 4,
    rate: <Rating value={4} />,
    description: "先導者レベルで対応できる。",
  },
  {
    id: 5,
    rate: <Rating value={5} />,
    description: "達人レベルで対応できる。",
  },
];

const commonHead = ["技術", "スキル"];

const frontSkills = [
  { id: 1, name: "JavaScript", rate: <Rating value={3} /> },
  { id: 2, name: "HTML/CSS", rate: <Rating value={2} /> },
  { id: 3, name: "React.js", rate: <Rating value={2} /> },
  { id: 4, name: "Vue.js", rate: <Rating value={2} /> },
  { id: 5, name: "CSS FW", rate: <Rating value={1} /> },
];

const backendSkills = [
  { id: 1, name: "PHP/Laravel", rate: <Rating value={3} /> },
  { id: 2, name: "Python", rate: <Rating value={2} /> },
  { id: 3, name: "RDBS", rate: <Rating value={2} /> },
  { id: 4, name: "Nginx", rate: <Rating value={2} /> },
];

const devSkills = [
  { id: 1, name: "Linux", rate: <Rating value={3} /> },
  { id: 2, name: "Github", rate: <Rating value={3} /> },
  { id: 3, name: "Docker/Docker Compose", rate: <Rating value={2} /> },
  { id: 4, name: "AWS", rate: <Rating value={2} /> },
  { id: 5, name: "CircleCI", rate: <Rating value={1} /> },
];

const cerfHead = ["資格"];
const certification = [
  { id: 1, name: "Linuc レベル 1" },
  { id: 2, name: "AWS Certified Solutions Architect Associate" },
];

export {
  skillDescHead,
  skillDesc,
  commonHead,
  frontSkills,
  backendSkills,
  devSkills,
  certification,
  cerfHead,
};
