import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import OrderCard from "../components/card/OrderCard";
import { Link } from "@react-navigation/native";
import ScreenContainer from "../components/screenContainer";
import Categories from "../components/Categories";
import AppTitle from "../components/AppTitle";
import { dishes } from "../../App";

const Home = () => {
  return (
    <ScreenContainer>
      <View style={styles.screen}>
        <Categories />
        <AppTitle style={styles.title} text={"Recommended"} />
        <FlatList data={dishes} keyExtractor={dish => dish.id}
          renderItem={({ item }) => (
            <Card
          ) }/>
        <AppTitle style={styles.title} text={"All Items"} />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 12,
  },
  title: {
    marginTop: 10,
  },
});

export default Home;
