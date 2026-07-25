// import { Drawer } from "expo-router/drawer";
// import "react-native-reanimated";

// export default function RootLayout() {
//   return (
//     <>
//       <Drawer
//         screenOptions={{
//           headerShown: true,
//           drawerActiveTintColor: "#49745e",
//           drawerInactiveTintColor: "gray",
//           drawerStyle: {
//             backgroundColor: "#f8f6f1",
//             width: 250,
//           },
//           drawerLabelStyle: {
//             fontSize: 16,
//             fontWeight: "600",
//           },
//           headerStyle: {
//             backgroundColor: "#49745e",
//           },
//           headerTintColor: "white",
//           headerTitleStyle: {
//             fontWeight: "bold",
//           },
//         }}
//       >
//         <Drawer.Screen
//           name="(tabs)"
//           options={{
//             drawerLabel: "Menu Utama",
//             title: "Beranda",
//           }}
//         />
//       </Drawer>
//     </>
//   );
// }

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
