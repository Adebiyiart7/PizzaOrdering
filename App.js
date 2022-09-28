import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Screen from "./app/components/Screen";
import SearchBox from "./app/components/SearchBox";

export default function App() {
  const [text, setText] = useState("");
  console.log(text);
  return (
    <Screen style={{ paddingHorizontal: 16, flex: 1 }}>
      <SearchBox
        placeholder={"Search dish..."}
        onChangeText={(newText) => setText(newText)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
