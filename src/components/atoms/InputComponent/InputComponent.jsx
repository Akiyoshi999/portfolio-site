import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const InputComponent = ({
  control,
  areaName,
  defaultValue,
  errors,
  ...props
}) => {
  return (
    <Controller
      name={areaName}
      control={control}
      render={({ field }) => {
        return (
          <TextField
            {...field}
            {...props}
            error={errors[areaName] !== undefined}
            helperText={errors[areaName]?.message}
          />
        );
      }}
    />
  );
};

export default InputComponent;
