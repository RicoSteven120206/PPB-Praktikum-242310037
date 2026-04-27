import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="userList" options={{ title: "User List Page" }} />
      <Stack.Screen
        name="userProfile"
        options={{ title: "User Profile Page" }}
      />
    </Stack>
  );
};

export default RootLayout;
