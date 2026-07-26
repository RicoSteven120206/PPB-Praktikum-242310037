import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ListBook from "../../constants/list_book";
import { checkLoginStatus } from "../../utils/session";
import LoginRequiredModal from "./LoginRequiredModal";
import SubscribeCard from "./SubcribeCard";

export default function BookDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [authChecked, setAuthChecked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSubscribeCard, setShowSubscribeCard] = useState(false);

  const book = ListBook.find((b) => b.id.toString() === id?.toString());

  useEffect(() => {
    (async () => {
      const userData = await checkLoginStatus();

      if (!userData || !userData.token) {
        setIsLoggedIn(false);
        setShowLoginModal(true);
      } else {
        setIsLoggedIn(true);
      }

      setAuthChecked(true);
    })();
  }, []);

  const handleActionPress = () => {
    if (book.is_free) {
      router.push(`/books/read/${book.id}`);
    } else {
      setShowSubscribeCard(true);
    }
  };

  if (!authChecked) {
    return (
      <SafeAreaView style={[styles.container, styles.centerAll]}>
        <ActivityIndicator size="large" color="#fff" />
      </SafeAreaView>
    );
  }

  if (!book) {
    return (
      <SafeAreaView style={[styles.container, styles.centerAll]}>
        <Text style={styles.errorText}>Buku tidak ditemukan</Text>
        <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 20 }}>
          <Text style={{ color: "white" }}>Kembali</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

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
        contentContainerStyle={styles.scrollContent}
      >
        <Image source={book.img} style={styles.coverImage} />

        <Text style={styles.title}>{book.title.toUpperCase()}</Text>
        <Text style={styles.author}>{book.author}</Text>

        <View style={styles.ratingRow}>
          <Ionicons name="star" size={16} color="#EAB308" />
          <Text style={styles.ratingText}>{book.rating} / 5.0</Text>
        </View>

        <View style={styles.synopsisBox}>
          <Text style={styles.synopsisLabel}>SINOPSIS</Text>
          <Text style={styles.synopsisText}>{book.sinopsis}</Text>

          {book.story && (
            <>
              <Text style={[styles.synopsisLabel, { marginTop: 20 }]}>STORY</Text>
              <Text style={styles.synopsisText}>{book.story}</Text>
            </>
          )}
        </View>
      </ScrollView>

      {!showSubscribeCard && (
        <View style={styles.footer}>
          {book.is_free ? (
            <TouchableOpacity
              style={[styles.btnAction, styles.btnFree]}
              onPress={handleActionPress}
            >
              <Ionicons name="book-outline" size={20} color="#1E293B" />
              <Text style={styles.txtFree}>Read Book</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.btnAction, styles.btnPremium]}
              onPress={handleActionPress}
            >
              <Ionicons name="card-outline" size={20} color="#FFF" />
              <Text style={styles.txtPremium}>Subscribe</Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      <SubscribeCard
        book={book}
        visible={showSubscribeCard}
        onClose={() => setShowSubscribeCard(false)}
      />

      <LoginRequiredModal
        visible={showLoginModal}
        onCancel={() => {
          setShowLoginModal(false);
          router.back();
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1a2228" },
  centerAll: { justifyContent: "center", alignItems: "center" },
  errorText: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
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
  scrollContent: { alignItems: "center", paddingHorizontal: 20, paddingBottom: 40 },
  coverImage: { width: 200, height: 200, borderRadius: 16, marginBottom: 25, resizeMode: "cover" },
  title: { color: "#FFF", fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 8 },
  author: { color: "#E2E8F0", fontSize: 16, fontWeight: "500", marginBottom: 10 },
  ratingRow: { flexDirection: "row", alignItems: "center", marginBottom: 30 },
  ratingText: { color: "#EAB308", fontSize: 14, fontWeight: "bold", marginLeft: 6 },
  synopsisBox: { width: "100%" },
  synopsisLabel: { color: "#FFF", fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  synopsisText: { color: "#CBD5E1", fontSize: 15, lineHeight: 24, textAlign: "justify" },
  footer: { padding: 20, paddingBottom: 30, backgroundColor: "transparent" },
  btnAction: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  btnPremium: { backgroundColor: "#EAB308" },
  txtPremium: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
  btnFree: { backgroundColor: "#FFF" },
  txtFree: { color: "#1E293B", fontSize: 18, fontWeight: "bold" },
});