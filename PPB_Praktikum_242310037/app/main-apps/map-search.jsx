import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { color_list, styles } from "../../components/styles/StyleApps";

export default function MapSearchScreen() {
  return (
    <SafeAreaView style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
      <Ionicons name="map" size={64} color={color_list.green} />
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 15, textAlign: "center" }}>
        Pencarian Berbasis Peta
      </Text>
      <Text style={{ color: "gray", textAlign: "center", marginTop: 8, paddingHorizontal: 30 }}>
        Temukan perpustakaan atau toko buku terdekat berdasarkan lokasi Anda saat ini.
        Fitur ini akan menampilkan peta interaktif dengan marker lokasi rekomendasi.
      </Text>
    </SafeAreaView>
  );
}