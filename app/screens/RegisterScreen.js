import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppTextInput from "../components/forms/AppTextInput";
import defaultStyles from "../config/defaultStyles";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  phoneNumber: Yup.string().required().min(3).max(20).label("Phone Number"),
  password: Yup.string().required().min(8).max(20).matches().label("Password"),
});

const RegisterScreen = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        phoneNumber: "",
        password: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit, handleChange }) => (
        <>
          <Text style={styles.label}>Email</Text>
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            keyboardType="email-address"
            icon={
              <MaterialCommunityIcons name="email" {...defaultStyles.icon} />
            }
            onChangeText={handleChange("email")}
          />
          <Text style={styles.label}>Phone Number</Text>
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Phone Number"
            keyboardType="numeric"
            icon={
              <MaterialCommunityIcons name="phone" {...defaultStyles.icon} />
            }
            onChangeText={handleChange("phoneNumber")}
          />
          <Text style={styles.label}>Password</Text>
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            icon={<MaterialCommunityIcons name="key" {...defaultStyles.icon} />}
            onChangeText={handleChange("password")}
          />
          <AppButton title={"Register"} onPress={handleSubmit} />
        </>
      )}
    </Formik>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
