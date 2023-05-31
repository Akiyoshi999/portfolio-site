import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useInView } from "react-intersection-observer";
import { topContent } from "../../../const/topItems";
import AnimeTypography from "../../atoms/AnimeTypography";
import ImageComponent from "../../atoms/ImageComponent";

const TopContainer = () => {
  const { ref, inView } = useInView({
    rootMargin: "-64px",
    triggerOnce: "true",
  });

  return (
    <Box
      id={topContent.elId}
      sx={{
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
        },
      }}
    >
      <ImageComponent
        img={topContent.image}
        sx={{
          height: " calc(100vh - 64px)",
          width: "100%",
        }}
      />
      <Grid
        container
        ref={ref}
        direction="column"
        textAlign="center"
        sx={{
          position: "absolute",
          color: "white",
          top: 0,
          left: 0,
          height: "100%",
          ml: { md: 3 },
          width: { xs: "100%", md: "65%" },
        }}
      >
        <Grid item xs={4} />
        {inView && (
          <Grid item xs={8}>
            <AnimeTypography variant="h5">{topContent.title}</AnimeTypography>
            <AnimeTypography>{topContent.body}</AnimeTypography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
export default TopContainer;
