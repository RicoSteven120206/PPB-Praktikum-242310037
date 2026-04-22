import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListBook from "../../constants/list_book";
import SearchBar from "../praktikum-4/components/SearchBar";
import { color_list, styles } from "../styles/StyleApps";
import BookCollection from "./components/BookCollections";

const SearchPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <SearchBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ flex: 1 }}>
          <BookCollection books={ListBook} />
        </View>
        <View>
          <Text style={{ color: color_list.green, textAlign: "center" }}>
            &copy; 2026 Frederico Steven Kwok
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchPage;
