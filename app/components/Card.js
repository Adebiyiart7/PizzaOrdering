import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";

import colors from "../config/colors";

const Card = ({ image, title, subTitle, leftInfo, rightInfo, onPress }) => {
  return (
    <TouchableHighlight underlayColor={colors.white} onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={2} style={styles.subTitle}>
            {subTitle}
          </Text>
          <View style={styles.footer}>
            <Text style={styles.leftInfo}>{leftInfo}</Text>
            <Text style={styles.rightInfo}>{rightInfo}</Text>
          </View>
        </View>
        <Image style={styles.image} source={image} />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 110,
    flexDirection: "row",
    borderRadius: 20,
    justifyContent: "space-between",
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  details: {
    flex: 7,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  footer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 12,
    left: 16,
  },
  image: {
    height: 110,
    width: 110,
    paddingVertical: 1,
  },
  subTitle: {
    color: colors.lightGray,
    lineHeight: 13,
    paddingTop: 5,
    fontSize: 13,
  },
  leftInfo: {
    fontSize: 12,
    paddingRight: 20,
  },
  rightInfo: {
    fontSize: 12,
    paddingRight: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.darkGray,
  },
});

export default Card;
