import { StyleSheet, Text, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";
import Chip from "./app/components/Chip";
import appStyles from "./app/config/styles";
import colors from "./app/config/colors";
import AppTitle from "./app/components/AppTitle";
import OrderCard from "./app/components/OrderCard";

export default function App() {
  return (
    <Screen style={{ paddingHorizontal: 16, flex: 1 }}>
      <TextInput
        keyboardType="numeric"
        placeholder="First Name"
        style={{
          paddingTop: 10,
          borderBottomColor: "#CCC",
          borderBottomWidth: 1,
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

/**
 *       <OrderCard
        onPress={() => console.log("Hello")}
        image={require("./trash/images/img-01.jpg")}
        title="Australian Pizza"
        subTitle="Our famous meat pizza is topped"
        price={"2,000"}
      />
 */

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
