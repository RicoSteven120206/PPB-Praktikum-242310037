import { useMemo, useState } from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListBook from "../../constants/list_book";
import BookCollection from "../praktikum-4/components/BookCollections";
import SearchBar from "../praktikum-4/components/SearchBar";
import { color_list, styles } from "../styles/StyleApps";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [book, setBook] = useState(ListBook);

  const BookDataMemori = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return book;

    return book.filter((item) => {
      return Object.keys(item).some((key) => {
        try {
          const value = item[key];
          return (
            value != null &&
            String(value).toLowerCase().includes(query)
          );
        } catch (error) {
          console.error(`Error processing key "${key}":`, error);
          return false;
        }
      })
    })
  }, [search, book]);

  const isSearching = search.trim().length > 0;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <SearchBar value={search} setValue={setSearch} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ flex: 1 }}>
          <BookCollection books={BookDataMemori} isSearching={isSearching} />
        </View>
        <View style={{ justifyContent: "flex-end" }}>
          <Text style={{ color: color_list.green, textAlign: "center" }}>
            &copy; 2026 Frederico Steven Kwok
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchPage;
