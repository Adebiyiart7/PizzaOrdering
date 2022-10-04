import React from "react";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import defaultStyles from "../config/defaultStyles";
import AppFormField from "../components/forms/AppFormField";
import AppForm from "../components/forms/AppForm";
import SubmitButton from "../components/forms/SubmitButton";
import { register } from "../features/auth/authSlice";

// const emailRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  phone_number: Yup.string().required().min(3).max(20).label("Phone Number"),
  password: Yup.string().required().min(8).max(20).label("Password"),
});

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  console.log(isError);
  console.log(isLoading);
  console.log(isSuccess);
  console.log(message);

  return (
    <AppForm
      initialValues={{
        email: "",
        phone_number: "",
        password: "",
      }}
      onSubmit={(values) => dispatch(register(values))}
      validationSchema={validationSchema}
    >
      <>
        <AppFormField
          label={"Email"}
          name={"email"}
          value="adebiyiartworld@gmail.com"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
          keyboardType="email-address"
          icon={<MaterialCommunityIcons name="email" {...defaultStyles.icon} />}
        />
        <AppFormField
          label={"Phone Number"}
          name={"phone_number"}
          value="09029242729"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Phone Number"
          keyboardType="numeric"
          icon={<MaterialCommunityIcons name="phone" {...defaultStyles.icon} />}
        />
        <AppFormField
          label={"Password"}
          name={"password"}
          value="password"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
          icon={<MaterialCommunityIcons name="key" {...defaultStyles.icon} />}
        />

        <SubmitButton style={{ marginVertical: 12 }} title="Register" />
      </>
    </AppForm>
  );
};

export default RegisterScreen;
