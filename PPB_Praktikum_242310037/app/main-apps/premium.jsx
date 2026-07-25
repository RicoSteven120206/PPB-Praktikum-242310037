import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { color_list, styles } from "../../components/styles/StyleApps";
import ListBook from "../../constants/list_book";

export default function PremiumScreen() {
  const router = useRouter();
  const premiumBooks = ListBook.filter((book) => !book.is_free);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 15, backgroundColor: color_list.green, borderRadius: 12, marginTop: 10 }}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
          Nikmati Semua Buku Premium
        </Text>
        <Text style={{ color: "#e2e8f0", marginTop: 5 }}>
          Berlangganan untuk akses tak terbatas ke {premiumBooks.length} judul eksklusif.
        </Text>
      </View>

      <FlatList
        data={premiumBooks}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingVertical: 15 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 10,
              marginBottom: 10,
            }}
            onPress={() => router.push(`/books/${item.id}`)}
          >
            <Image source={item.img} style={{ width: 60, height: 80, borderRadius: 6 }} />
            <View style={{ marginLeft: 10, flex: 1, justifyContent: "center" }}>
              <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
              <Text style={{ color: "gray", fontSize: 12 }}>{item.author}</Text>
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
                <AntDesign name="crown" size={14} color={color_list.orange} />
                <Text style={{ marginLeft: 4, fontSize: 12 }}>Premium</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}