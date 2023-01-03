import {
  Alert,
  Button,
  CircularProgress,
  Fade,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SectionBox from "../../ui/Section/SectionBox";
import SectionTitle from "../../ui/Section/SectionTitle";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactInputSchema } from "./scheme";

const SlideTransition = (props) => {
  return <Fade {...props} />;
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alert, setAlert] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "akiyoshi",
      email: "ubuntu@example.com",
      message: "Hello, this is a message",
    },
    resolver: yupResolver(contactInputSchema),
  });

  const submit = (data) => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      axios
        .post(process.env.NEXT_PUBLIC_SEND_URL, JSON.stringify(data))
        .then((result) => {
          if (result.status === 200) {
            console.log("SUCCESS");
            console.log(result.data);
            reset();
            setSuccess(true);
            setLoading(false);
          } else {
            console.log("FAILED");
            console.error(JSON.parse(result.data));
            setLoading(false);
            setAlert(true);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <Box
      className="hobby-wrapper"
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "lightblue",
      }}
    >
      <SectionBox
        textAlign="center"
        sx={{
          width: {
            xs: "80%",
            md: "60%",
          },
        }}
      >
        <SectionTitle>Contact</SectionTitle>
        <Typography variant="body">
          簡単ではありますが、お問い合わせのフォームをご用意しました。
          ホームページの改善点や私について連絡がしたい方は、こちらからご連絡ください。
        </Typography>
        <Stack
          component="form"
          onSubmit={handleSubmit(submit)}
          spacing={2}
          backgroundColor="lightgray"
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="名前"
                error={errors.name !== undefined}
                helperText={errors.name?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="email"
                label="メールアドレス"
                error={errors.email !== undefined}
                helperText={errors.email?.message}
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                multiline
                label="お問い合わせ内容"
                minRows={5}
                error={errors.message !== undefined}
                helperText={errors.message?.message}
              />
            )}
          />
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
                {false ? <CircularProgress /> : "送信"}
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
        </Stack>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={success}
          autoHideDuration={3000}
          TransitionComponent={SlideTransition}
          onClose={() => setSuccess(false)}
        >
          <Alert onClose={() => setSuccess(false)}>
            メッセージありがとうございます。後ほどご連絡いたします。
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={alert}
          autoHideDuration={3000}
          TransitionComponent={SlideTransition}
          onClose={() => setAlert(false)}
        >
          <Alert onClose={() => setAlert(false)} severity="error">
            エラーが発生しました。恐れいりますが、時間を空けてもう一度お問い合わせください。
          </Alert>
        </Snackbar>
      </SectionBox>
    </Box>
  );
};

export default ContactForm;
