import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Screen from "../components/Screen";
import OrderCard from "../components/card/OrderCard";
import { Link } from "@react-navigation/native";

const Home = () => {
  return (
    <Screen style={styles.screen}>
      {/* <OrderCard
        onPress={() => console.log("Hello")}
        image={require("../../trash/images/img-09.jpg")}
        title="Australian Pizza"
        subTitle="Our famous meat pizza is topped"
        price={"2,000"}
      /> */}
      <Link to={{ screen: "Register" }}>Register</Link>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 12,
  },
});

export default Home;
