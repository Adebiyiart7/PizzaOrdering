import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

const SubmitButton = ({ title, style }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton style={style} title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
