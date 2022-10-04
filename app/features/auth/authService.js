import axois from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URI = process.env.REACT_APP_API_URL + "/api/user";

const register = async (userData) => {
  const response = await axois.post(
    "http://192.168.43.231:5000" + "/register",
    userData
  );
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
