import { CardMedia as MuiCardMedia, styled } from "@mui/material";

const CusCardMedia = ({ preparationFlg = false, ...props }) => (
  <MuiCardMedia {...props} />
);

const CardMedia = styled(CusCardMedia)(({ theme, preparationFlg }) =>
  theme.unstable_sx({
    minHeight: 200,
    maxHeight: "100%",
    textAlign: "center",
    "&:before": preparationFlg && {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.8)",
    },
    "&:after": preparationFlg && {
      content: '"Comming Soon..."',
      color: "white",
      position: "absolute",
      top: "25%",
      left: 0,
      width: "100%",
      fontSize: "20px",
      fontFamily: ["Comfortaa", "cursive"].join(","),
    },
  })
);

const CustomCardMedia = ({ image, preparationFlg }) => {
  return (
    <CardMedia width="100%" image={image} preparationFlg={preparationFlg} />
  );
};

export default CustomCardMedia;
