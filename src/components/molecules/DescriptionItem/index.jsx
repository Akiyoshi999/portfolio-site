import { Link, Stack, Typography } from "@mui/material";
import TextTitle from "../../atoms/TextTitle";

const DescriptionItem = ({ title, description }) => {
  return (
    <Stack spacing={2}>
      <TextTitle>{title}</TextTitle>
      {title == "Github" ? (
        <Link href={description} target="_blank" rel="noopener noreferrer">
          {description}
        </Link>
      ) : (
        <Typography whiteSpace="pre-wrap">{description}</Typography>
      )}
    </Stack>
  );
};

export default DescriptionItem;
