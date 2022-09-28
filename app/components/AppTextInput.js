import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

import colors from "../config/colors";

const AppTextInput = ({ icon, placeholder, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    overflow: "hidden",
  },
  icon: {
    marginRight: 8,
  },
  input: {
    color: colors.darkGray,
    fontSize: 16,
    width: "80%",
  },
});

export default AppTextInput;