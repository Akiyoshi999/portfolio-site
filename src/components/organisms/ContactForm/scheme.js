import * as yup from "yup";

export const contactInputSchema = yup.object().shape({
  name: yup.string().required("名前を入力してください"),
  email: yup
    .string()
    .email("正しいメールアドレスを入力してください。")
    .required("メールアドレスを入力してください"),
  message: yup.string().required("お問い合わせ内容を入力してください"),
});
