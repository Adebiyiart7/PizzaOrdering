import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import colors from "../config/colors";

const ListItem = ({
  image,
  leftIcon,
  title,
  subTitle,
  subTitleNumLine = 1,
  third,
  thirdIcon,
  rightIcon,
}) => {
  return (
    <View style={styles.container}>
      {image && <Image source={image} style={styles.image} />}
      {leftIcon && leftIcon}
      <View style={styles.center}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        {subTitle && (
          <Text numberOfLines={subTitleNumLine} style={styles.subTitle}>
            {subTitle}
          </Text>
        )}
        {third && (
          <Text numberOfLines={1} style={styles.third}>
            {thirdIcon && thirdIcon}
            &nbsp;
            {third}
          </Text>
        )}
      </View>
      <View
        style={{
          position: "absolute",
          right: 16,
        }}
      >
        {rightIcon && rightIcon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    alignSelf: "center",
    marginLeft: 12,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 16,
  },
  image: {
    height: 64,
    width: 64,
    borderRadius: 64,
  },
  subTitle: {
    lineHeight: 15,
    color: colors.mediumGray,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  third: {
    top: 5,
    color: colors.secondary,
    fontWeight: "600",
  },
});

export default ListItem;
