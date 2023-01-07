import { Typography as MuiTypography, styled } from "@mui/material";
import { keyframes, experimental_sx } from "@mui/system";
const keyframeAnime = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateX(+30%);
            transform: translateX(+30%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
`;
const animation = `${keyframeAnime} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`;
const AnimeTypography = styled(MuiTypography)(({ animeFlg = "slide" }) =>
  experimental_sx({
    opacity: animeFlg === "slide" && 0,
    animation: animeFlg === "slide" && animation,
  })
);

export default AnimeTypography;
