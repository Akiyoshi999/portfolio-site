import {
  Dialog as MuiDidalog,
  DialogContent,
  DialogTitle,
  Grid,
  styled,
} from "@mui/material";

import DescriptionItem from "../../molecules/DescriptionItem";
import ImagesCarousel from "../ImagesCarousel";

const Dialog = styled(MuiDidalog)(({ theme }) =>
  theme.unstable_sx({
    width: "90%",
    margin: "0 auto",
    height: "90%",
    textAlign: "center",
    alignItems: "center",
    "& .MuiDialog-paper": { height: "90vh" },
  })
);

const ProductDialog = ({ openFlg, onClose, title, images, describe }) => {
  return (
    <Dialog open={openFlg} onClose={onClose} keepMounted maxWidth="lg">
      <DialogTitle
        variant="h4"
        sx={{
          fontFamily: ["Concert One", "cursive"].join(","),
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid xs={12} md={4} item sx={{ wordWrap: "break-word" }}>
            {describe.map((item, i) => (
              <DescriptionItem
                key={i}
                title={item.title}
                description={item.content}
              />
            ))}
          </Grid>
          <Grid xs={12} md={8} item>
            <ImagesCarousel images={images} />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
