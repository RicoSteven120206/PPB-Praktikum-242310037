import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// Sesuaikan path import komponen Anda di bawah ini:
import { color_list, styles } from "../../components/styles/StyleApps";
import ListBook from "../../constants/list_book";
import BookCollection from "../praktikum-4/components/BookCollections";
import CTABook from "../praktikum-4/components/CTABooks";
import Category from "../praktikum-4/components/Categories";
import Header from "../praktikum-4/components/Headers";

const Homescreen = () => {
  // Mengambil buku pertama untuk Featured/CTA (Sesuai gambar "Spy x Family")
  const firstBook = ListBook[0];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ flex: 1 }}>
          <CTABook book={firstBook} />
          <Category />
          <BookCollection books={ListBook} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: color_list.green, textAlign: "center" }}>
            &copy; 2026 Frederico Steven Kwok
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;
