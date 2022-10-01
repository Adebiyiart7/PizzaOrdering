import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Chip from "./Chip";

const categories = [
  { name: "All", focused: true },
  { name: "Pizza", focused: false },
  { name: "Snacks", focused: false },
  { name: "Burger", focused: false },
  { name: "Lunch", focused: false },
  { name: "Salads", focused: false },
  { name: "Desserts", focused: false },
  { name: "Drinks", focused: false },
  { name: "More", focused: false },
];

const Categories = () => {
  return (
    <FlatList
      style={styles.categories}
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(category) => category.name}
      renderItem={({ item }) => (
        <Chip
          style={styles.category}
          text={item.name}
          focused={item.focused}
          onPress={() => console.log(category.name)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  categories: {
    paddingVertical: 5,
  },
  category: {
    marginHorizontal: 5,
  },
});

export default Categories;
