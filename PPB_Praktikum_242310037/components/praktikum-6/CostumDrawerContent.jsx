import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Text, View } from "react-native";
import { color_list } from "../../components/styles/StyleApps";

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          padding: 20,
          backgroundColor: color_list.green,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Ionicons name="book" size={30} color={color_list.green} />
        </View>
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          E-Catalog Buku
        </Text>
        <Text style={{ color: "#e2e8f0", fontSize: 12 }}>
          Baca. Jelajahi. Temukan.
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}