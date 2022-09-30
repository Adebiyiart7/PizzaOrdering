import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Screen from "../components/Screen";
import OrderCard from "../components/card/OrderCard";
import { Link } from "@react-navigation/native";
import ScreenContainer from "../components/screenContainer";

const Home = () => {
  return (
    <ScreenContainer>
      <View style={styles.screen}>
        <OrderCard
          onPress={() => console.log("Hello")}
          image={require("../../trash/images/img-09.jpg")}
          title="Australian Pizza"
          subTitle="Our famous meat pizza is topped"
          price={"2,000"}
        />
        <Link to={{ screen: "Register" }}>Register</Link>
        <Link to={{ screen: "Login" }}>Login</Link>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 12,
  },
});

export default Home;
