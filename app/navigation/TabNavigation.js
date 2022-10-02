import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { screenOptions } from "../navigation";

// Tab screens
// import PromotionsScreen from "../screens/PromotionsScreen";
import OrderScreen from "../screens/OrderScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { StackNavigators } from "../navigation/StackNavigators";

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

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={profileName}
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
        {/* <Tab.Screen
          name={settingsName}
          component={SettingsScreen}
          options={screenOptions}
        /> */}
        <Tab.Screen
          name={profileName}
          component={ProfileScreen}
          options={screenOptions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
