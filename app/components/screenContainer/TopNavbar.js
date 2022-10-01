import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  FontAwesome5,
  Fontisto,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Constants from "expo-constants";

import colors from "../../config/colors";

const statusBarHeight = Constants.statusBarHeight;

const TopNavbar = () => {
  return (
    <View style={styles.topNavbar}>
      <View style={styles.brand}>
        {/* <FontAwesome5 name="pizza-slice" size={32} color={colors.primary} /> */}
        <Text style={styles.appName}>Pizzer</Text>
      </View>
      <View style={styles.right}>
        {/* <Octicons
          name="search"
          size={24}
          color={colors.mediumGray}
          style={styles.topNavbarIcon}
        /> */}
        <MaterialCommunityIcons
          name="menu"
          size={30}
          color={colors.mediumGray}
          style={styles.topNavbarIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appName: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 8,
    color: colors.primary,
  },
  brand: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    flexDirection: "row",
  },
  topNavbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: colors.mediumBorder,
    marginBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  topNavbarIcon: {
    marginLeft: 24,
  },
});

export default TopNavbar;
