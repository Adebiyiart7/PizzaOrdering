import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { screenOptions } from "./app/navigation";

// tab screens
// import PromotionsScreen from "./app/screens/PromotionsScreen";
import OrderScreen from "./app/screens/OrderScreen";
import SettingsScreen from "./app/screens/SettingsScreen";
import ProfileScreen from "./app/screens/ProfileScreen";

import { StackNavigators } from "./app/navigation/StackNavigators";

// Tab screen names
const homeName = "Home";
const promotionsName = "Promotions";
const orderName = "My Order";
const settingsName = "Settings";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

const OtherScreensNavigators = () => {
  return <StackNavigators />;
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            let routeName = route.name;

            switch (routeName) {
              case homeName:
                iconName = focused ? "home" : "home-outline";
                break;

              case promotionsName:
                iconName = focused ? "star-box" : "star-box-outline";
                break;

              case orderName:
                iconName = focused ? "shopping" : "shopping-outline";
                break;

              case settingsName:
                iconName = focused ? "cog" : "cog-outline";
                break;

              case profileName:
                iconName = focused ? "account" : "account-outline";
                break;

              default:
                iconName = focused ? "home" : "home-outline";
                break;
            }

            return (
              <MaterialCommunityIcons name={iconName} size={24} color={color} />
            );
          },
        })}
      >
        <Tab.Screen
          name={homeName}
          component={OtherScreensNavigators}
          options={screenOptions}
        />
        {/* <Tab.Screen
          name={promotionsName}
          component={PromotionsScreen}
          options={screenOptions}
        /> */}
        <Tab.Screen
          name={orderName}
          component={OrderScreen}
          options={screenOptions}
        />
        <Tab.Screen
          name={settingsName}
          component={SettingsScreen}
          options={screenOptions}
        />
        <Tab.Screen
          name={profileName}
          component={ProfileScreen}
          options={screenOptions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

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
