import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomDrawerContent from "../../components/praktikum-6/CostumDrawerContent";
import { color_list } from "../../components/styles/StyleApps";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: color_list.green },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "700" },
          drawerActiveTintColor: color_list.green,
          drawerInactiveTintColor: "gray",
          drawerActiveBackgroundColor: color_list.green_light,
          drawerLabelStyle: { fontSize: 14, fontWeight: "600" },
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Katalog Buku",
            title: "E-Catalog Buku",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="premium"
          options={{
            drawerLabel: "Premium Membership",
            title: "Premium Membership",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="map-search"
          options={{
            drawerLabel: "Pencarian Peta",
            title: "Pencarian Berbasis Peta",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="map-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}