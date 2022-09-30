import React from "react";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/defaultStyles";
import AppFormField from "../components/forms/AppFormField";
import AppForm from "../components/forms/AppForm";
import SubmitButton from "../components/forms/SubmitButton";

// const emailRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).max(20).label("Password"),
});

const LoginScreen = () => {
  return (
    <AppForm
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      <>
        <AppFormField
          label={"Email"}
          name={"email"}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
          keyboardType="email-address"
          icon={<MaterialCommunityIcons name="email" {...defaultStyles.icon} />}
        />
        <AppFormField
          label={"Password"}
          name={"password"}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
          icon={<MaterialCommunityIcons name="key" {...defaultStyles.icon} />}
        />

        <SubmitButton style={{ marginVertical: 12 }} title="Login" />
      </>
    </AppForm>
  );
};

export default LoginScreen;
