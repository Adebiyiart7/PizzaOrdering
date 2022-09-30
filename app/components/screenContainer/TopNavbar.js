import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Constants from "expo-constants";

import colors from "../../config/colors";

const statusBarHeight = Constants.statusBarHeight;

const TopNavbar = () => {
  return (
    <View style={styles.topNavbar}>
      <FontAwesome5 name="pizza-slice" size={32} />
    </View>
  );
};

const styles = StyleSheet.create({
  topNavbar: {
    height: 56,
    borderBottomWidth: 1,
    borderColor: colors.mediumBorder,
    marginBottom: 12,
    paddingTop: statusBarHeight,
    paddingHorizontal: 16 + statusBarHeight,
    backgroundColor: colors.white,
  },
});

export default TopNavbar;
