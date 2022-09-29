import { StyleSheet, Text, View } from "react-native";
import React from "react";
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
