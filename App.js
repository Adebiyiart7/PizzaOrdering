import TabNavigation from "./app/navigation/TabNavigation";

export default function App() {
  return <TabNavigation />;
}

export const dishes = [
  {
    id: "1",
    price: 250,
    time: "25-30",
    stars: 4.8,
    title: "Australian Pizza",
    subTitle: "Our famous meat pizza is topped",
    image: require("./trash/images/img-01.jpg"),
  },
  {
    id: "2",
    price: 2000,
    time: "25-30",
    stars: 4.8,
    title: "Larb",
    subTitle:
      "It's usually served with raw vegetables and sticky rice. vegetables",
    image: require("./trash/images/img-02.jpg"),
  },
  {
    id: "3",
    price: 400,
    time: "25-30",
    stars: 4.8,
    title: "Cheese Burger",
    subTitle:
      "Easily the best burger in all of Germany, this enormous preparation",
    image: require("./trash/images/img-03.png"),
  },
  {
    id: "4",
    price: 2400,
    time: "25-30",
    stars: 4.8,
    title: "Taco Burger",
    subTitle: "Tacos are amazing, no doubt about it; need this amazing combo",
    image: require("./trash/images/img-04.jpg"),
  },
  {
    id: "5",
    price: 620,
    time: "25-30",
    stars: 4.8,
    title: "Le Pigeon Burger",
    subTitle: "Le Pigeon Burger has smoky flavor enhanced with each topping",
    image: require("./trash/images/img-05.jpg"),
  },
  {
    id: "6",
    price: 190,
    time: "25-30",
    stars: 4.8,
    title: "Luger Burger",
    subTitle:
      "Luger Burger features extra thick bacon and more half pound of beef.",
    image: require("./trash/images/img-06.jpg"),
  },
  {
    id: "7",
    price: 3500,
    time: "25-30",
    stars: 4.8,
    title: "Mac & Cheese",
    subTitle: "Pizza with Macaroni and Cheese",
    image: require("./trash/images/img-07.jpg"),
  },
  {
    id: "8",
    price: 6600,
    time: "25-30",
    stars: 4.8,
    title: "Tuscan Roma",
    subTitle: "Pizza with Roma Tomatoes, Spinach, Alfredo Sauce",
    image: require("./trash/images/img-08.jpg"),
  },
  {
    id: "9",
    price: 3800,
    time: "25-30",
    stars: 4.8,
    title: "Australian Pizza",
    subTitle: "Our famous meat pizza is topped",
    image: require("./trash/images/img-09.jpg"),
  },
  {
    id: "10",
    price: 1200,
    time: "25-30",
    stars: 4.8,
    title: "Buffalo Chicken",
    subTitle: "Pizza with Chicken, Hot Sauce, Ranch Dressing",
    image: require("./trash/images/img-10.jpg"),
  },
  {
    id: "11",
    price: 1500,
    time: "25-30",
    stars: 4.8,
    title: "Lunch Special Pizza",
    subTitle: "One-topping pizza and a16 ounce drink Specialties.",
    image: require("./trash/images/img-11.jpg"),
  },
  {
    id: "12",
    price: 1800,
    time: "25-30",
    stars: 4.8,
    title: "Barbecue Chicken",
    subTitle: "Tangy, rich, our homemade BBQ Chicken pizza",
    image: require("./trash/images/img-12.jpg"),
  },
  {
    id: "13",
    price: 900,
    time: "25-30",
    stars: 4.8,
    title: "Egg-ceptional",
    subTitle: "Enjoy breakfast anytime of the day! Our breakfast pizza",
    image: require("./trash/images/img-13.png"),
  },
  {
    id: "14",
    price: 600,
    time: "25-30",
    stars: 4.8,
    title: "Barbecue Chicken",
    subTitle: "Tangy, rich, our homemade BBQ Chicken pizza",
    image: require("./trash/images/img-14.jpg"),
  },
  {
    id: "15",
    price: 2550,
    time: "25-30",
    stars: 4.8,
    title: "All Meat",
    subTitle: "Veggie lovers rejoice! Pizza topped with mushrooms",
    image: require("./trash/images/img-15.jpg"),
  },
];

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
