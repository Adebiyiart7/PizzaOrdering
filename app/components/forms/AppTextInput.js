import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import colors from "../../config/colors";
import defaultStyles from "../../config/defaultStyles";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <TextInput style={styles.input} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 16,
    overflow: "hidden",
    height: 56,
    borderWidth: 1,
    borderColor: colors.lightBorder,
    backgroundColor: colors.white,
    borderRadius: defaultStyles.borderRadius,
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
