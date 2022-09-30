import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import colors from "../config/colors";

const Screen = ({ children, style }) => {
  return <ScrollView style={[styles.screen, style]}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.appBackground,
  },
});

export default Screen;
