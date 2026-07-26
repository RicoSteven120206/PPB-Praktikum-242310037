import AsyncStorage from "@react-native-async-storage/async-storage";

export const checkLoginStatus = async () => {
  try {
    const userDataString = await AsyncStorage.getItem("userData");

    if (userDataString === null) {
      return null;
    }

    return JSON.parse(userDataString);
  } catch (error) {
    console.warn("Error checking login status:", error);
    return null;
  }
};

export const logoutUser = async () => {
  try {
    await AsyncStorage.removeItem("userData");
    await AsyncStorage.removeItem("authToken");
    return true;
  } catch (error) {
    console.warn("Error logging out:", error);
    return false;
  }
};