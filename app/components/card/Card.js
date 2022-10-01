import React from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";

import styles from "./styles";
import colors from "../../config/colors";

const Card = ({
  image,
  title,
  subTitle,
  leftInfo,
  rightInfo,
  onPress,
  style,
  imageStyle,
}) => {
  return (
    <TouchableHighlight underlayColor={colors.white} onPress={onPress}>
      <View style={[styles.card, style]}>
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={2} style={styles.subTitle}>
            {subTitle}
          </Text>
          <View style={styles.footer}>
            <Text style={[styles.leftInfo, { fontSize: 12, paddingRight: 20 }]}>
              {leftInfo}
            </Text>
            <Text style={styles.rightInfo}>{rightInfo}</Text>
          </View>
        </View>
        <Image style={[styles.image, imageStyle]} source={image} />
      </View>
    </TouchableHighlight>
  );
};

export default Card;
