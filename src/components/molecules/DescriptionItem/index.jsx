import { Stack, Typography } from "@mui/material";
import TextTitle from "../../atoms/TextTitle";

const DescriptionItem = ({ title, description }) => {
  return (
    <Stack spacing={2}>
      <TextTitle>{title}</TextTitle>
      <Typography>{description}</Typography>
    </Stack>
  );
};

export default DescriptionItem;
