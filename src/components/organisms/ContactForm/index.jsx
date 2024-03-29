import { Stack, Typography } from "@mui/material";
import SectionBox from "../../ui/Section/SectionBox";
import SectionTitle from "../../ui/Section/SectionTitle";
import InputComponent from "../../atoms/InputComponent/InputComponent";
import SlideAlert from "../../atoms/SlideAlert/SlideAlert";
import { alerts, contactSection } from "../../../const/contactItem";
import { useContactForm } from "./logic";
import FormButton from "../../atoms/FormButton/FormButton";
import ContainerBox from "../../ui/Container/ContainerBox";

const ContactForm = () => {
  const {
    control,
    errors,
    handleSubmit,
    submit,
    success,
    setSuccess,
    alert,
    setAlert,
    loading,
  } = useContactForm();

  return (
    <ContainerBox>
      <SectionBox id={contactSection.elId} textAlign="center" width="80%">
        <SectionTitle>{contactSection.title}</SectionTitle>
        <Typography mb={3}>{contactSection.body}</Typography>
        <Stack component="form" onSubmit={handleSubmit(submit)} spacing={2}>
          <InputComponent
            control={control}
            areaName="name"
            label="名前"
            type="text"
            errors={errors}
          />
          <InputComponent
            control={control}
            areaName="email"
            label="メールアドレス"
            type="email"
            errors={errors}
          />
          <InputComponent
            control={control}
            areaName="message"
            label="お問い合わせ内容"
            type="text"
            multiline
            minRows={5}
            errors={errors}
          />
          <FormButton loading={loading} />
        </Stack>

        <SlideAlert
          state={success}
          setState={setSuccess}
          msg={alerts.success.msg}
          severity={alerts.success.severity}
        />
        <SlideAlert
          state={alert}
          setState={setAlert}
          msg={alerts.error.msg}
          severity={alerts.error.severity}
        />
      </SectionBox>
    </ContainerBox>
  );
};

export default ContactForm;
