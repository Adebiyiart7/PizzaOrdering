import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";

const Chip = ({ text, bgColor }) => {
  return (
    <View
      style={[
        styles.chip,
        { backgroundColor: bgColor ? bgColor : colors.white },
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 16,
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 14,
    color: colors.lightGray,
  },
});

export default Chip;
