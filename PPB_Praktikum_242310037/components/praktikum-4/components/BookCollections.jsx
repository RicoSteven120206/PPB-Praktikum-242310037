import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { color_list, styles } from "../../styles/StyleApps";
import Pagination from "../../praktikum-5/Pagination";

const LARGE_DATASET_THRESHOLD = 100;

export default function BookCollectioins({
  books = [],
  isSearching = false,
  itemsPerPage = 4, 
}) {
  const totalItems = books.length;
  const sortedBooks = [...books].sort((a, b) => (b.id || 0) - (a.id || 0));
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  const [currentPage, setCurrentPage] = useState(1);

  // Reset / atur ulang halaman setiap kali data buku berubah (mis. hasil search berubah)
  useEffect(() => {
    if (totalItems > LARGE_DATASET_THRESHOLD) {
      // 3. Jika data > 100 item, langsung tampilkan 5 nomor halaman terakhir
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(1);
    }
  }, [totalItems, totalPages]);

  const paginatedBooks = sortedBooks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <View style={styles.container_book_collections}>
      <View style={styles.h_container}>
        <Text style={styles.container_book_collections_title}>
          Book Collection
        </Text>
        <Text style={{ color: color_list.green }}>
          {isSearching
            ? `Total ${totalItems} item${totalItems > 1 ? "s" : ""}`
            : "See All"}
        </Text>
      </View>

      {totalItems === 0 ? (
        <View style={styles.not_found}>
          <Text>No Record Found</Text>
        </View>
      ) : (
        <>
          <BookList books={paginatedBooks} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </View>
  );
}

const BookList = ({ books }) => {
  const router = useRouter();

  return (
    <View style={styles.book_grid}>
      {books.map((book, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.book_card, styles.shadow]}
          activeOpacity={0.7}
          onPress={() => router.push(`/books/${book.id}`)}
        >
          <BookItemImg book={book} />
          <BookItemContent book={book} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const BookItemImg = ({ book }) => {
  return (
    <View style={{ position: "relative" }}>
      <Image source={book.img} style={styles.book_card_img} resizeMode="cover" />
      {!book.is_free && (
        <View style={[styles.circle_premium_small, styles.shadow]}>
          <AntDesign name="crown" size={18} color="black" />
        </View>
      )}
    </View>
  );
};

const BookItemContent = ({ book }) => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.book_card_title} numberOfLines={2} ellipsizeMode="tail">
        {book.title}
      </Text>
      <Text style={styles.book_card_author} numberOfLines={1}>
        {book.author}
      </Text>
      <View style={styles.book_card_footer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign name="star" size={14} color={color_list.orange} />
          <Text style={styles.book_card_rating}>{book.rating}</Text>
        </View>
        {book.views && (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="eye-outline" size={14} color="gray" />
            <Text style={styles.book_card_views}>{book.views}</Text>
          </View>
        )}
      </View>
    </View>
  );
};