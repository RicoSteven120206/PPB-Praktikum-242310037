import { Text, TouchableOpacity, View } from "react-native";
import { color_list } from "../styles/StyleApps.js";

const MAX_VISIBLE_PAGES = 5;

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) {
    return (
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 16 }}>
        <PageButton label="1" active onPress={() => {}} />
      </View>
    );
  }

  let start = Math.max(1, currentPage - Math.floor(MAX_VISIBLE_PAGES / 2));
  let end = start + MAX_VISIBLE_PAGES - 1;

  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - MAX_VISIBLE_PAGES + 1);
  }

  const pageNumbers = [];
  for (let i = start; i <= end; i++) pageNumbers.push(i);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
        gap: 6,
      }}
    >
      {!isFirstPage && (
        <>
          <PageButton label="<<" onPress={() => onPageChange(1)} />
          <PageButton label="<" onPress={() => onPageChange(currentPage - 1)} />
        </>
      )}

      {pageNumbers.map((page) => (
        <PageButton
          key={page}
          label={String(page)}
          active={page === currentPage}
          onPress={() => onPageChange(page)}
        />
      ))}

      {!isLastPage && (
        <>
          <PageButton label=">" onPress={() => onPageChange(currentPage + 1)} />
          <PageButton label=">>" onPress={() => onPageChange(totalPages)} />
        </>
      )}
    </View>
  );
}

const PageButton = ({ label, active = false, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.7}
    style={{
      minWidth: 32,
      height: 32,
      paddingHorizontal: 8,
      borderRadius: 6,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: active ? color_list.green : "#fff",
      borderWidth: 1,
      borderColor: active ? color_list.green : "#ddd",
    }}
  >
    <Text
      style={{
        color: active ? "#fff" : "#333",
        fontWeight: active ? "700" : "400",
        fontSize: 13,
      }}
    >
      {label}
    </Text>
  </TouchableOpacity>
);