import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SectionTitle from "../ui/Section/SectionTitle";

const Profile = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "gray",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SectionTitle>PROFILE</SectionTitle>
      <Grid container>
        <Grid
          xs={12}
          sm={5}
          item
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Avatar
            src="/images/Avator.JPG"
            sx={{ height: "auto", width: "calc(80px + 20vw)" }}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography
            sx={{
              textAlign: "justify",
              m: 1,
              p: 1,
            }}
          >
            {/* TODO 編集予定 */}
            石川県出身のエンジニア。高専で機械工学、技科大で材料工学を学んだのち、メーカーで温度センサーの材料開発・生産に従事。その後ITの技術にひかれ、31才でIT業界へ転職。運用・テクニカルサポートからキャリアをスタートし、AWSクラウドサーバー構築、Webページ作成、Python/djangoのツール改修など、インフラからフロントサイドまで幅広く業務を経験してきました。
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
