import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  experimental_sx,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CustomHashTag from "../../atoms/HashTag";
import SlideDialog from "../../atoms/SlideDialog";

const HashTag = styled(CustomHashTag)(({ theme }) =>
  theme.unstable_sx({
    m: "2px",
  })
);

const ProductCard = (product) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            component="img"
            height="auto"
            width="100%"
            image={product.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" pb={2}>
              {product.body}
            </Typography>
            {product.usedSkills.map((skill) => (
              <HashTag tagName={skill} key={skill} />
            ))}
          </CardContent>
        </CardActionArea>
      </Card>
      <SlideDialog openFlg={open} onClose={handleClose} />
    </>
  );
};

export default ProductCard;
