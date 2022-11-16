import { Typography } from "@mui/material";
import { Box, keyframes } from "@mui/system";
import { useInView } from "react-intersection-observer";

const testAnimation = keyframes`
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

export default function Profile() {
  const { ref, inView } = useInView({
    rootMargin: "-64px",
    triggerOnce: "true",
  });
  console.log(inView);

  return (
    <Box
      sx={{
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
        },
      }}
    >
      <Box
        component="img"
        // TODO TOPページの画像を変更する
        src="/images/test.png"
        sx={{
          height: " calc(100vh - 64px)",
          width: "100%",
        }}
      />
      <Box
        ref={ref}
        sx={{
          position: "absolute",
          color: "white",
          top: 0,
          left: 0,
          height: "100%",
          width: "65%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Box flexGrow={1} />
        {inView && (
          <Box flexGrow={1.5}>
            <Typography
              variant="h5"
              sx={{
                opacity: 0,
                animation: `${testAnimation} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
              }}
            >
              お客様とより良いサービスを提供したいーー
            </Typography>
            <Typography
              sx={{
                opacity: 0,
                animation: `${testAnimation} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
              }}
            >
              サイトウグループは、お客様に愛されるサービスを提供いたします。
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
