import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../config/colors";

const AppTitle = ({ text, style }) => {
  return <Text style={[styles.title, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.darkGray,
    textTransform: "capitalize",
  },
});

export default AppTitle;
