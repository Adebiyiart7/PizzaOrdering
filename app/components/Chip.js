import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

import colors from "../config/colors";

const Chip = ({ text, focused, icon, onPress, style }) => {
  return (
    <TouchableHighlight
      underlayColor={colors.appBackground}
      onPress={onPress}
      style={[
        style,
        styles.chip,
        { backgroundColor: focused ? colors.primary : colors.white },
      ]}
    >
      <View>
        <Text style={[styles.text, { color: focused && colors.white }]}>
          {text}
        </Text>
        {icon && <Text style={styles.icon}>{icon}</Text>}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 16,
    borderRadius: 6,
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
