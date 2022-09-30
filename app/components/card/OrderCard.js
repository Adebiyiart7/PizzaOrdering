import { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";

const Card = ({ image, title, subTitle, price }) => {
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

export default Card;
