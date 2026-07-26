import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { color_list } from "../styles/StyleApps";

const SubscribeCard = ({ book, visible, onClose }) => {
  const router = useRouter();

  if (!visible) return null;

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#1e2830",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
        paddingBottom: 34,
      }}
    >
      <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
        Subscribe to Read
      </Text>
      <Text style={{ color: "#94A3B8", marginTop: 4 }}>{book.title}</Text>

      <Text style={{ color: "#CBD5E1", marginTop: 14, fontSize: 13, lineHeight: 20 }}>
        Subscribe to unlock this premium book and access thousands of other
        titles.
      </Text>

      <View style={{ marginTop: 18 }}>
        <Text style={{ color: color_list.orange, fontSize: 22, fontWeight: "bold" }}>
          IDR 35.000
          <Text style={{ fontSize: 13, fontWeight: "normal", color: "#94A3B8" }}>
            /month
          </Text>
        </Text>
        <Text style={{ color: "#64748B", fontSize: 12, marginTop: 2 }}>
          Cancel anytime
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: color_list.orange,
          paddingVertical: 15,
          borderRadius: 30,
          alignItems: "center",
          marginTop: 20,
        }}
        onPress={() => router.push("/main-apps/premium")}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
          Subscribe Now
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          paddingVertical: 15,
          borderRadius: 30,
          alignItems: "center",
          marginTop: 8,
          backgroundColor: "#2A3540",
        }}
        onPress={onClose}
      >
        <Text style={{ color: "#CBD5E1", fontWeight: "600" }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubscribeCard;