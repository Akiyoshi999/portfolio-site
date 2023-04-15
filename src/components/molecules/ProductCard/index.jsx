import {
  Card,
  CardActionArea,
  CardContent,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CustomHashTag from "../../atoms/HashTag";
import ProductDialog from "../ProductDialog";
import CustomCardMedia from "../../ui/Card/CustomCardMedia";

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
        <CardActionArea
          onClick={handleClickOpen}
          sx={{ pointerEvents: product.preparationFlg && "none" }}
        >
          <CustomCardMedia
            image={product.images[0]}
            preparationFlg={product.preparationFlg}
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
      {!product.preparationFlg && (
        <ProductDialog
          openFlg={open}
          onClose={handleClose}
          title={product.title}
          images={product.images}
          describe={product.describe}
        />
      )}
    </>
  );
};

export default ProductCard;
