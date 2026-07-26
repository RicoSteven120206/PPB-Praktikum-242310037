import { useRouter } from "expo-router";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { color_list } from "../styles/StyleApps";

const LoginRequiredModal = ({ visible, onCancel }) => {
  const router = useRouter();

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.6)",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 40,
        }}
      >
        <View
          style={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: 16,
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#1a2228" }}>
            Login Required
          </Text>
          <Text style={{ color: "gray", marginTop: 4, marginBottom: 18 }}>
            Please sign in to read this book
          </Text>

          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 20 }}>
            <TouchableOpacity onPress={onCancel}>
              <Text style={{ color: "gray", fontWeight: "600" }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.replace("/auth/signin")}>
              <Text style={{ color: color_list.green, fontWeight: "bold" }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LoginRequiredModal;