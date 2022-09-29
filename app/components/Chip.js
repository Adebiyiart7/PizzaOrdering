import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";

const Chip = ({ text, bgColor, icon }) => {
  return (
    <View
      style={[
        styles.chip,
        { backgroundColor: bgColor ? bgColor : colors.white },
      ]}
    >
      <Text style={styles.text}>{text}</Text>
      {icon && <Text style={styles.icon}>{icon}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 16,
    alignSelf: "flex-start",
  },
  icon: {
    paddingLeft: 5,
  },
  text: {
    fontSize: 14,
    color: colors.lightGray,
  },
});

export default Chip;
