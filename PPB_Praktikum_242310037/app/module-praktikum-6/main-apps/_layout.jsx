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

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// ==========================================
// 1. Buat Komponen Kustom untuk Isi Sidebar
// ==========================================
function CustomDrawerContent(props) {
  const router = useRouter(); // Hooks untuk menjalankan routing (pindah halaman)

  return (
    <DrawerContentScrollView {...props}>
      {/* DrawerItemList: Ini wajib ada jika Anda ingin menu bawaan 
        dari <Drawer.Screen> di bawah tetap muncul (misal: "Beranda Utama")
      */}
      <DrawerItemList {...props} />

      {/* Garis Pemisah Visual */}
      <View
        style={{
          borderTopWidth: 1,
          borderColor: "#e0e0e0",
          marginVertical: 10,
          paddingTop: 10,
        }}
      >
        {/* ========================================== */}
        {/* 2. Menambahkan Tombol-Tombol Kustom (DrawerItem) */}
        {/* ========================================== */}

        <DrawerItem
          label="Profil Pengguna"
          // Routing: Pindah ke file profile.jsx
          onPress={() => router.push("/profile")}
        />

        <DrawerItem
          label="Koleksi Buku (Book)"
          // Routing: Pindah ke file folder books
          onPress={() => router.push("/books")}
        />

        {/* Contoh tombol dengan warna khusus (misal: Logout) */}
        <DrawerItem
          label="Keluar Aplikasi"
          labelStyle={{ color: "red", fontWeight: "bold" }}
          onPress={() => {
            // Gunakan 'replace' agar user tidak bisa 'back' setelah logout
            router.replace("/");
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
}

// ==========================================
// 3. Pasang Custom Component ke Drawer Utama
// ==========================================
export default function MainAppsDrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Masukkan komponen kustom ke dalam prop 'drawerContent' */}
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        {/* Ini menu otomatis yang akan dirender oleh <DrawerItemList /> di atas */}
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Beranda & Explore",
            title: "Aplikasi Utama",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
