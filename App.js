import { useState } from "react";
import { StyleSheet, Button, Text, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";
import Chip from "./app/components/Chip";
import colors from "./app/config/colors";
import AppTitle from "./app/components/AppTitle";
import OrderCard from "./app/components/card/OrderCard";
import AppModal from "./app/components/AppModal";
import AppFormField from "./app/components/forms/AppFormField";
import RegisterScreen from "./app/screens/RegisterScreen";
import Card from "./app/components/card/Card";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Screen style={{ paddingHorizontal: 16, flex: 1 }}>
      <OrderCard
        onPress={() => console.log("Hello")}
        image={require("./trash/images/img-01.jpg")}
        title="Australian Pizza"
        subTitle="Our famous meat pizza is topped"
        price={"2,000"}
      />
      <View style={{ margin: 10 }}></View>
      <OrderCard
        onPress={() => console.log("Hello")}
        image={require("./trash/images/img-01.jpg")}
        title="Australian Pizza"
        subTitle="Our famous meat pizza is topped"
        price={"2,000"}
      />
      <View style={{ margin: 10 }}></View>
      <Card
        onPress={() => console.log("Hello")}
        image={require("./trash/images/img-01.jpg")}
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
    </Screen>
  );
}

const styles = StyleSheet.create({});

/**
 * 
 * 
 * 
      <Button title="Open" onPress={() => setShowModal(true)} />
      <AppModal showModal={showModal} setShowModal={setShowModal} />
 * 
 * 
 * 
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
        image={require("./trash/images/img-01.jpg")}
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
