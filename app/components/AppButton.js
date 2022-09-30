import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";

const AppButton = ({ title, onPress }) => {
  return (
    <TouchableHighlight
      underlayColor={colors.lightPrimary}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    width: "100%",
    paddingVertical: 15,
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: defaultStyles.borderRadius,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.white,
    textTransform: "uppercase",
  },
});

export default AppButton;
