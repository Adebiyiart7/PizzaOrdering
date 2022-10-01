import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import Screen from "../Screen";
import TopNavbar from "./TopNavbar";

const ScreenContainer = ({ children, style }) => {
  return (
    <Screen style={[styles.screenContainer, style]}>
      {/* <TopNavbar /> */}
      {children}
    </Screen>
  );
};

const styles = StyleSheet.create({
  screenContainer: {},
});

export default ScreenContainer;
