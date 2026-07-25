// import { Stack } from "expo-router";

// const RootLayout = () => {
//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="userList" options={{ title: "User List Page" }} />
//       <Stack.Screen
//         name="userProfile"
//         options={{ title: "User Profile Page" }}
//       />
//     </Stack>
//   );
// };

// export default RootLayout;

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" hidden />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
