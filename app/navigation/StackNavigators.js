import { screenOptions } from "../navigation";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

// screen
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";

export const StackNavigators = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={screenOptions}
        name="Feed"
        component={HomeScreen}
      />
      <Stack.Screen
        options={screenOptions}
        name="Register"
        component={RegisterScreen}
      />
      <Stack.Screen
        options={screenOptions}
        name="Login"
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};
