import { Paper, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import {
  backendSkills,
  cerfHead,
  certification,
  commonHead,
  devSkills,
  frontSkills,
  skillDesc,
  skillDescHead,
} from "../../data/const/skillItems";
import SectionBox from "../../ui/Section/SectionBox";
import SectionTitle from "../../ui/Section/SectionTitle";
import TableItems from "../../ui/table/TableItems";

const SkillSet = () => {
  return (
    <SectionBox id="my-skill-set" backgroundColor="gray">
      <Box className="skill-desc" textAlign="center">
        <SectionTitle>My Skill Set</SectionTitle>
        <Typography variant="body">
          修練のすえ身につけたスキルをグラフィカルにまとめました。広く浅くではありますがフロントからバックエンドまで幅広くスキルアップに取り組んできました。オールラウンドに対応できる点が強みですが、全体的に理解が浅く、専門性の低さを認識しています。今後はバックエンド系の開発（クラウド含む）の業務に携わる比率を増やし、少しずつ専門性を高めていきたいと考えています。
        </Typography>
        <Box mt={5} component={Paper}>
          <TableItems head={skillDescHead} body={skillDesc} />
        </Box>
        <Grid container rowSpacing={5} columnSpacing={5} px={1} py={5}>
          <Grid xs={12} md={6} item>
            <TableItems head={commonHead} body={frontSkills} />
          </Grid>
          <Grid xs={12} md={6} item>
            <TableItems head={commonHead} body={frontSkills} />
          </Grid>
          <Grid xs={12} md={6} item>
            <TableItems head={commonHead} body={backendSkills} />
          </Grid>
          <Grid xs={12} md={6} item>
            <TableItems head={commonHead} body={devSkills} />
          </Grid>
          <Grid xs={12} md item>
            <TableItems head={cerfHead} body={certification} />
          </Grid>
        </Grid>
      </Box>
    </SectionBox>
  );
};

export default SkillSet;
