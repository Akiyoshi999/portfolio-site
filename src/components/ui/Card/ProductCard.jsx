import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Dialog,
  DialogTitle,
  Slide,
  Typography,
} from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";
import { forwardRef } from "react";
import { useState } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductCard = (product) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
              <Chip
                key={skill}
                label={skill}
                size="small"
                color="primary"
                icon={<TagIcon fontSize="small" />}
                sx={{ m: "4px" }}
              ></Chip>
            ))}
          </CardContent>
        </CardActionArea>
      </Card>

      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle>TEST Dialo</DialogTitle>
      </Dialog>
    </>
  );
};

export default ProductCard;
