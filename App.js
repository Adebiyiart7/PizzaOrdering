import { StyleSheet, Text, View } from "react-native";

import Screen from "./app/components/Screen";
import Chip from "./app/components/Chip";

export default function App() {
  return (
    <Screen style={{ paddingHorizontal: 16, flex: 1 }}>
      <Chip text={"Pizza"} />
      {/* <Chip text={"Pizza"} />
      <Chip text={"Pizza"} />
      <Chip text={"Pizza"} />
      <Chip text={"Pizza"} /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({});

/**
 *           <Card
        onPress={() => console.log("Hello")}
        image={require("./app/assets/img-01.jpg")}
        title="Australian Pizza"
        subTitle="Our famous meat pizza is topped"
        leftInfo={
          <>
            <MaterialCommunityIcons
              name="alarm"
              size={16}
              color={colors.mediumGray}
            />
            <Text>&nbsp;25-30min</Text>
          </>
        }
        rightInfo={
          <>
            <MaterialCommunityIcons
              name="star-outline"
              size={16}
              color={colors.mediumGray}
              style={{ marginRight: 8 }}
            />
            <Text>&nbsp;4.8</Text>
          </>
        }
      />
 */
