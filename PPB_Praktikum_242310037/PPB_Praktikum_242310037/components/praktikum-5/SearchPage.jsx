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
    let computedData = [...book];
    if (search) {
      computedData = computedData.filter((ListBook) => {
        return Object.keys(ListBook).some((key) => {
          try {
            const value = ListBook[key];
            return (
              value != null &&
              String(value).toLowerCase().includes(search.toLowerCase())
            );
          } catch (error) {
            console.error(`Error processing key "${key}":`, error);
            return false;
          }
        });
      });
    }
    return computedData;
  }, [search, book]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <SearchBar value={search} setValue={setSearch} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ flex: 1 }}>
          <BookCollection books={BookDataMemori} isSearching={search.length} />
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
