import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { profileSection } from "../../../const/profileItems";
import SectionTitle from "../../ui/Section/SectionTitle";

const ProfileSection = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      position="relative"
      width="100%"
      height="100vh"
      sx={{ backgroundColor: "gray" }}
    >
      <SectionTitle>{profileSection.title}</SectionTitle>
      <Grid container>
        <Grid xs={12} sm={5} item display="flex" justifyContent="center">
          <Avatar
            src={profileSection.avator}
            sx={{ height: "auto", width: "calc(80px + 20vw)" }}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography textAlign="justify" m={1} p={1}>
            {profileSection.body}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileSection;
