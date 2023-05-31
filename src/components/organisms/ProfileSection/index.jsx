import { Avatar, Grid, Typography } from "@mui/material";
import { profileSection } from "../../../const/profileItems";
import SectionBox from "../../ui/Section/SectionBox";
import SectionTitle from "../../ui/Section/SectionTitle";
import ContainerBox from "../../ui/Container/ContainerBox";

const ProfileSection = () => {
  return (
    <ContainerBox>
      <SectionBox id={profileSection.elId}>
        <SectionTitle>{profileSection.title}</SectionTitle>
        <Grid container>
          <Grid xs={12} md={5} item display="flex" justifyContent="center">
            <Avatar
              src={profileSection.avator}
              sx={{ height: "auto", width: "calc(80px + 20vw)" }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography textAlign="justify" m={1} p={1} whiteSpace="pre-wrap">
              {profileSection.body}
            </Typography>
          </Grid>
        </Grid>
      </SectionBox>
    </ContainerBox>
  );
};

export default ProfileSection;
