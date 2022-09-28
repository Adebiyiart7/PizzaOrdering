import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import colors from "../config/colors";

const Screen = ({ children, style }) => {
  return <View style={[styles.screen, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.appBackground,
  },
});

export default Screen;