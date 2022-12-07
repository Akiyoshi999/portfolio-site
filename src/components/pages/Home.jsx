import { Box } from "@mui/system";
import { useInView } from "react-intersection-observer";
import TopConCatchCopy from "../TopCon/TopConCatchCopy";
import TopConImage from "../TopCon/TopConImage";

const Home = () => {
  const { ref, inView } = useInView({
    rootMargin: "-64px",
    triggerOnce: "true",
  });

  return (
    <Box
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
      {/* // TODO TOPページの画像を変更する */}
      <TopConImage img="/images/test.png" />
      <Box
        ref={ref}
        sx={{
          position: "absolute",
          color: "white",
          top: 0,
          left: 0,
          height: "100%",
          width: "65%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Box flexGrow={1} />
        {inView && (
          <Box flexGrow={1.5}>
            <TopConCatchCopy flexGrow={1.5} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
