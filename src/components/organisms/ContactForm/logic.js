import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactInputSchema } from "./scheme";

export const useContactForm = () => {
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
      name: "",
      email: "",
      message: "",
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
            reset();
            setSuccess(true);
            setLoading(false);
          } else {
            setLoading(false);
            setAlert(true);
          }
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  };
  return {
    success,
    setSuccess,
    setAlert,
    alert,
    loading,
    control,
    errors,
    handleSubmit,
    submit,
    reset,
  };
};
