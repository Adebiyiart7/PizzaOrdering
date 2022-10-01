import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import Screen from "../Screen";
import TopNavbar from "./TopNavbar";

const ScreenContainer = ({ children }) => {
  return (
    <Screen style={styles.screenContainer}>
      <TopNavbar />
      <ScrollView>{children}</ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screenContainer: {},
});

export default ScreenContainer;
