import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import AppTextInput from "./forms/AppTextInput";
import defaultStyles from "../config/defaultStyles";

const SearchBox = ({ placeholder, onChangeText }) => {
  return (
    <View>
      <AppTextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        icon={<AntDesign name="search1" {...defaultStyles.icon} />}
      />
    </View>
  );
};

export default SearchBox;
