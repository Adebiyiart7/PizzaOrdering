import React from "react";
import { StyleSheet, View } from "react-native";

import AppTextInput from "./AppTextInput";
import { AntDesign } from "@expo/vector-icons";
import appStyles from "../config/styles";

const SearchBox = ({ placeholder, onChangeText }) => {
  return (
    <View>
      <AppTextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        icon={<AntDesign name="search1" {...appStyles.icon} />}
      />
    </View>
  );
};

export default SearchBox;
