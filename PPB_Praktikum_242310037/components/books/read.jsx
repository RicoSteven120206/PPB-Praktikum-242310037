import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as Speech from "expo-speech";
import { useEffect, useState } from "react";
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListBook from "../../constants/list_book";
import { color_list } from "../styles/StyleApps";

export default function ReadBookScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState("idle"); 

  const book = ListBook.find((b) => b.id.toString() === id?.toString());
  const fullText = book ? `${book.sinopsis} ${book.story || ""}` : "";

  useEffect(() => {
    return () => {
      Speech.stop();
    };
  }, []);

  const togglePlay = () => {
    if (status === "playing") {
      Speech.pause();
      setStatus("paused");
      return;
    }

    if (status === "paused") {
      Speech.resume();
      setStatus("playing");
      return;
    }

    setStatus("playing");
    Speech.speak(fullText, {
      language: "id-ID",
      rate: 0.95,
      onDone: () => setStatus("idle"),
      onStopped: () => setStatus("idle"),
      onError: () => setStatus("idle"),
    });
  };

  if (!book) return null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a2228" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.circleBtn}>
          <Ionicons name="arrow-back" size={24} color="#2D3748" />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.circleBtn}>
            <Ionicons name="heart" size={24} color="#E2E8F0" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circleBtn}>
            <Ionicons name="share-social" size={22} color="#2D3748" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
      >
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>by {book.author}</Text>

        <Text style={styles.storyText}>{book.sinopsis}</Text>
        {book.story && <Text style={styles.storyText}>{book.story}</Text>}
      </ScrollView>

      <View style={styles.playerFooter}>
        <TouchableOpacity onPress={togglePlay} style={styles.playButton}>
          <Ionicons
            name={status === "playing" ? "pause" : "play"}
            size={30}
            color="#1a2228"
          />
        </TouchableOpacity>
        <Text style={styles.playerHint}>
          {status === "playing"
            ? "Sedang membaca..."
            : status === "paused"
            ? "Dijeda"
            : "Ready to listen"}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1a2228" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  headerRight: { flexDirection: "row", gap: 15 },
  circleBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  title: { color: "#fff", fontSize: 20, fontWeight: "bold", marginTop: 10 },
  author: { color: "#94A3B8", fontSize: 14, marginTop: 4, marginBottom: 20 },
  storyText: {
    color: "#CBD5E1",
    fontSize: 15,
    lineHeight: 24,
    textAlign: "justify",
    marginBottom: 16,
  },
  playerFooter: {
    alignItems: "center",
    paddingBottom: 40,
    paddingTop: 10,
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: color_list.green,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  playerHint: { color: "#94A3B8", fontSize: 13 },
});