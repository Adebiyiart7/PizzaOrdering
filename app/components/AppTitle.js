import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../config/colors";

const AppTitle = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.darkGray,
    textTransform: "capitalize",
  },
});

export default AppTitle;
