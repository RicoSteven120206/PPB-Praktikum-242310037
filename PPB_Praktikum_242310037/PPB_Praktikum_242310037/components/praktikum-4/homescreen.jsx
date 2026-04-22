import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListBook from "../../constants/list_book";
import { color_list, styles } from "../styles/StyleApps";
import BookCollection from "./components/BookCollections";
import CTABook from "./components/CTABooks";
import Category from "./components/Categories";
import Header from "./components/Headers";

const Homescreen = () => {
  const lastBook = ListBook[ListBook.length - 1];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ flex: 1 }}>
          <CTABook book={lastBook} />
          <Category />
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

export default Homescreen;
