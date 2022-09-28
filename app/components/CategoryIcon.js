import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import colors from "../config/colors";

const CategoryIcon = ({ image, label }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageContainer}>
        <Image resizeMode="cover" style={styles.image} source={image} />
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "33%",
    textAlign: "center",
    padding: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    maxWidth: 80,
    maxHeight: 80,
    padding: 10,
    borderRadius: 20,
    backgroundColor: colors.white,
  },
  label: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 16,
    fontWeight: "600",
    color: colors.mediumGray,
  },
});

export default CategoryIcon;
