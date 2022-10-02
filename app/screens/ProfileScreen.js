import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import defaultStyles from "../config/defaultStyles";
import colors from "../config/colors";

const Profile = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.listItem}>
        <ListItem
          image={require("../../trash/images/profile.jpg")}
          title="Adeeyo Joseph Adebiyi"
          subTitle="adebiyiartworld@gmail.com"
        />
      </View>
      <View style={styles.listItem}>
        <ListItem
          leftIcon={
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={24}
              color={colors.mediumGray}
            />
          }
          title="Delivery Address"
          subTitle="Abuja, Gwarimpa Estate, Third Avenue, House - 13, Apartment 5, Floor 6, Room 9"
          subTitleNumLine={2}
        />
      </View>
      <View style={styles.listItem}>
        <ListItem
          leftIcon={
            <MaterialCommunityIcons
              name="shopping-outline"
              size={24}
              color={colors.mediumGray}
            />
          }
          title="My Order"
          subTitle="Mexican Pizza, $200"
          subTitleNumLine={2}
          third={"In progress"}
          thirdIcon={
            <MaterialCommunityIcons
              name="progress-clock"
              size={15}
              color={colors.mediumGray}
            />
          }
          rightIcon={
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color={colors.secondary}
            />
          }
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.history}>
          <MaterialCommunityIcons
            name="history"
            color={colors.primary}
            size={20}
          />
          &nbsp;Order history
        </Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
  },
  history: {
    fontSize: 16,
    color: colors.secondary,
  },
  screen: {
    paddingVertical: defaultStyles.screenPadding,
  },
  listItem: {
    marginBottom: 20,
  },
});

export default Profile;
