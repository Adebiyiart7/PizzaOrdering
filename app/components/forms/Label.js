import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../../config/colors";

const Label = ({ label }) => {
  return <Text style={styles.label}>{label}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    paddingBottom: 8,
    fontWeight: "bold",
    color: colors.secondary,
  },
});

export default Label;
