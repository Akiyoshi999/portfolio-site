import { Box } from "@mui/system";
import HobbySection from "../organisms/HobbySection";

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
