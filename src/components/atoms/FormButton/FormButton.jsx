import { Button, CircularProgress, Grid } from "@mui/material";

const FormButton = ({ loading }) => {
  return (
    <Grid
      sx={{
        m: 1,
        display: "flex",
        justifyContent: "center",
      }}
      container
    >
      <Grid item xs={12} sx={{ position: "relative" }}>
        <Button
          variant="contained"
          color="success"
          disabled={loading}
          type="submit"
          sx={{ width: "100%" }}
        >
          送信
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px",
            }}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default FormButton;
