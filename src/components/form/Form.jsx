import axios from "axios";
import { ErrorSharp } from "@mui/icons-material";
import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const Form = () => {
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
            setAlert(true);
          } else {
            console.log("FAILED");
            console.error(JSON.parse(result.data));
            setLoading(false);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const validationRules = {
    name: {
      required: "名前を入力してください",
    },
    email: {
      required: "メールアドレスを入力してください",
      pattern: {
        value: /^[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
        message: "無効なメールアドレスです。",
      },
    },
    message: {
      required: "お問い合わせ内容を入力してください",
    },
  };

  return (
    <Stack component="form" onSubmit={handleSubmit(submit)} spacing={2}>
      <Controller
        name="name"
        control={control}
        rules={validationRules.name}
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
        rules={validationRules.email}
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
        rules={validationRules.message}
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
      <Button type="submit">SUBMIT</Button>
    </Stack>
  );
};

export default Form;
