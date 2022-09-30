import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "./app/config/colors";

// tab screens
import HomeScreen from "./app/screens/HomeScreen";
import PromotionsScreen from "./app/screens/PromotionsScreen";
import OrderScreen from "./app/screens/OrderScreen";
import SettingsScreen from "./app/screens/SettingsScreen";
import ProfileScreen from "./app/screens/ProfileScreen";

// screen
import RegisterScreen from "./app/screens/RegisterScreen";

// screen names
const homeName = "Home";
const promotionsName = "Promotions";
const orderName = "My Order";
const settingsName = "Settings";
const profileName = "Profile";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.mediumGray,
  tabBarIconStyle: {
    marginTop: 5,
  },
  tabBarLabelStyle: {
    fontSize: 11,
    paddingBottom: 5,
  },
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
                iconName = focused ? "home" : "home-outline";
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
          component={HomeScreen}
          options={screenOptions}
        />
        {/* <Tab.Screen name={promotionsName} component={PromotionsScreen} /> */}
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
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Tab.Navigator>
      {/* <Stack.Navigator>
      </Stack.Navigator> */}
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
