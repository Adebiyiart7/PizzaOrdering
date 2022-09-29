import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const Card = ({ image, title, subTitle, price, weight }) => {
  let [numberOfItems, setNumberOfItems] = useState(1);

  const handleIncrement = () => {
    if (numberOfItems <= 99) {
      setNumberOfItems(numberOfItems + 1);
    }
  };

  const handleDecrement = () => {
    if (numberOfItems >= 1) {
      setNumberOfItems(numberOfItems - 1);
    }
  };

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.details}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={2} style={styles.subTitle}>
          {subTitle}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.leftInfo}>
            <Text style={styles.price}>${price}</Text>
          </Text>
          <Text style={styles.rightInfo}>
            <TouchableOpacity
              style={styles.updateCounterContainer}
              onPress={() => handleIncrement()}
            >
              <MaterialCommunityIcons
                name="plus"
                style={styles.updateCounter}
              />
            </TouchableOpacity>
            <View style={styles.numberOfItemsContainer}>
              <Text style={styles.numberOfItems}>{numberOfItems}</Text>
            </View>
            <TouchableOpacity
              style={styles.updateCounterContainer}
              onPress={() => handleDecrement()}
            >
              <MaterialCommunityIcons
                name="minus"
                style={styles.updateCounter}
              />
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
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
    alignItems: "center",
    top: 10,
  },
  image: {
    height: 110,
    width: 110,
    paddingVertical: 1,
  },
  leftInfo: {
    fontSize: 16,
    paddingRight: 20,
  },
  numberOfItems: {
    fontSize: 16,
    color: colors.darkGray,
  },
  numberOfItemsContainer: {
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
  },
  rightInfo: {
    right: 0,
    position: "absolute",
  },
  subTitle: {
    color: colors.lightGray,
    lineHeight: 13,
    paddingTop: 5,
    fontSize: 13,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.darkGray,
  },
  updateCounter: {
    fontSize: 18,
    paddingTop: 5,
    textAlign: "center",
    color: colors.lightGray,
  },
  updateCounterContainer: {
    backgroundColor: colors.appBackground,
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: colors.lightBorder,
    borderRadius: 4,
  },
});

export default Card;
