import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { styles } from "../../styles/StyleApps";

const SearchPage = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.s_container}>
      <Pressable style={styles.btn_search_section}>
        <Ionicons
          name="search-outline"
          size={20}
          color="gray"
          style={{ marginRight: 15 }}
        />
        <TextInput
          placeholder="Cari Judul Buku..."
          value={text}
          onChangeText={setText}
          style={styles.search_sm}
        />
      </Pressable>
    </View>
  );
};

export default SearchPage;
