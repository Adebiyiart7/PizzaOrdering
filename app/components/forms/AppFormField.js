import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import Label from "./Label";
import ErrorMessage from "./ErrorMessage";
import AppTextInput from "./AppTextInput";

const AppFormField = ({ name, label, ...otherProps }) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();

  return (
    <View style={styles.container}>
      <Label label={label} />
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 12,
  },
});

export default AppFormField;
