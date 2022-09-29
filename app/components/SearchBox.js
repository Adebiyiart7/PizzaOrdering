import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import AppTextInput from "./AppTextInput";
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
