import axois from "@axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URI = "api/user";

const register = async (userData) => {
  const response = await axois.get(API_URI, userData);
  try {
    if (response.data) {
      AsyncStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const authService = {
  register,
};

export default authService;
