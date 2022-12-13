import { Box } from "@mui/system";
import HobbySection from "../layout/Hobby/HobbySection";

const Hobby = () => {
  return (
    <Box
      className="hobby-wrapper"
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "lightblue",
      }}
    >
      <HobbySection />
    </Box>
  );
};

export default Hobby;
