import { Chip } from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";

const HashTag = ({ tagName, ...props }) => (
  <Chip
    {...props}
    label={tagName}
    size="small"
    color="primary"
    icon={<TagIcon fontSize="small" />}
  />
);

export default HashTag;
