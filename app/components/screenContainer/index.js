import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../Screen";
import TopNavbar from "./TopNavbar";

const ScreenContainer = ({ children }) => {
  return (
    <>
      <TopNavbar />
      {children}
    </>
  );
};

const styles = StyleSheet.create({});

export default ScreenContainer;
