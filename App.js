import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Screen from "./app/components/Screen";
import CategoryIcon from "./app/components/CategoryIcon";

export default function App() {
  const [text, setText] = useState("");
  console.log(text);
  return (
    <Screen style={{ paddingHorizontal: 16, flex: 1, flexDirection: "row" }}>
      <CategoryIcon
        label="Pizza"
        image={require("./app/assets/dessert-04.png")}
      />
      <CategoryIcon
        label="Pizza"
        image={require("./app/assets/dessert-04.png")}
      />
      <CategoryIcon
        label="Pizza"
        image={require("./app/assets/dessert-04.png")}
      />
      <CategoryIcon
        label="Pizza"
        image={require("./app/assets/dessert-04.png")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
