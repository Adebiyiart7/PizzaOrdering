import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Link } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ScreenContainer from "../components/screenContainer";
import Categories from "../components/Categories";
import AppTitle from "../components/AppTitle";
import { dishes } from "../../App";
import Card from "../components/card/Card";
import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";

const Home = () => {
  const [items, setItems] = useState(dishes);
  const [refreshing, setRefreshing] = useState(false);

  const horizontalCard = () => {
    return (
      <View>
        <AppTitle text={"It's Lunch Time!"} style={styles.title} />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Card
                style={styles.horizontalCard}
                imageStyle={styles.imageStyle}
                onPress={() => console.log("Hello")}
                image={item.image}
                title={item.title}
                subTitle={item.subTitle}
                leftInfo={
                  <>
                    <MaterialCommunityIcons
                      name="alarm"
                      size={16}
                      color={colors.mediumGray}
                    />
                    <Text>&nbsp;{item.time}min</Text>
                  </>
                }
              />
            </View>
          )}
        />
        <View style={styles.mainTitleContainer}>
          <AppTitle text={"All Items"} style={styles.title} />
          <TouchableOpacity style={styles.filter}>
            <MaterialCommunityIcons
              name="filter-outline"
              color={colors.primary}
              size={24}
            />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScreenContainer style={styles.container}>
      <View>
        <Categories />
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Card
              onPress={() => console.log("Hello")}
              image={item.image}
              title={item.title}
              subTitle={item.subTitle}
              leftInfo={
                <>
                  <MaterialCommunityIcons
                    name="alarm"
                    size={16}
                    color={colors.mediumGray}
                  />
                  <Text>&nbsp;{item.time}min</Text>
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
                  <Text>&nbsp;{item.stars}</Text>
                </>
              }
            />
          </View>
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setItems([
            {
              id: "5",
              price: 620,
              time: "25-30",
              stars: 4.8,
              title: "Le Pigeon Burger",
              subTitle:
                "Le Pigeon Burger has smoky flavor enhanced with each topping",
              image: require("../../trash/images/img-05.jpg"),
            },
            {
              id: "6",
              price: 190,
              time: "25-30",
              stars: 4.8,
              title: "Luger Burger",
              subTitle:
                "Luger Burger features extra thick bacon and more half pound of beef.",
              image: require("../../trash/images/img-06.jpg"),
            },
            {
              id: "7",
              price: 3500,
              time: "25-30",
              stars: 4.8,
              title: "Mac & Cheese",
              subTitle: "Pizza with Macaroni and Cheese",
              image: require("../../trash/images/img-07.jpg"),
            },
          ]);
        }}
        ListHeaderComponent={horizontalCard}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: defaultStyles.borderRadius,
    marginVertical: 5,
  },
  container: {
    paddingHorizontal: 12,
  },
  filter: {
    flexDirection: "row",
    marginTop: 10,
  },
  filterText: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: "600",
  },
  imageStyle: { width: 130, height: 100 },
  horizontalCard: {
    flexDirection: "column-reverse",
    height: 210,
    width: 130,
    marginRight: 10,
  },
  mainTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "space-between",
  },
  title: {
    marginTop: 10,
  },
});

export default Home;
