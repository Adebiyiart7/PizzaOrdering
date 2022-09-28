import { StyleSheet, Text, TouchableHighlight } from "react-native";
import React from "react";
import colors from "../config/colors";

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
    backgroundColor: colors.primary,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
    color: colors.white,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
