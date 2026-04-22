import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Home Page" }} />
      <Stack.Screen name="search" options={{ title: "Search Page" }} />
    </Stack>
  );
};

export default RootLayout;
