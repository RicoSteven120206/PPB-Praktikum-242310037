import { Ionicons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListBook from "../../constants/list_book";
import { color_list } from "../styles/StyleApps";

export default function QRScannerScreen() {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  const handleBarcodeScanned = ({ data }) => {
    if (scanned) return;
    setScanned(true);

    const book = ListBook.find((b) => b.id.toString() === data.toString());

    if (book) {
      router.replace(`/books/${book.id}`);
    } else {
      Alert.alert(
        "QR Code Tidak Dikenali",
        "Buku dengan kode ini tidak ditemukan dalam katalog.",
        [{ text: "Coba Lagi", onPress: () => setScanned(false) }]
      );
    }
  };

  if (!permission) {
    return <View style={qrStyles.container} />;
  }

  if (!permission.granted) {
    return (
      <SafeAreaView style={[qrStyles.container, qrStyles.centerAll]}>
        <Ionicons name="camera-outline" size={64} color={color_list.green} />
        <Text style={qrStyles.permissionText}>
          Aplikasi membutuhkan akses kamera untuk memindai QR Code buku
        </Text>
        <TouchableOpacity
          style={qrStyles.permissionButton}
          onPress={requestPermission}
        >
          <Text style={qrStyles.permissionButtonText}>Izinkan Akses Kamera</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <View style={qrStyles.container}>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
      />

      <SafeAreaView style={qrStyles.overlay}>
        <TouchableOpacity
          style={qrStyles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={qrStyles.scanFrameContainer}>
          <View style={qrStyles.scanFrame} />
          <Text style={qrStyles.scanHint}>
            Arahkan kamera ke QR Code pada sampul buku
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const qrStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  centerAll: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  permissionText: {
    textAlign: "center",
    marginTop: 16,
    marginBottom: 20,
    fontSize: 15,
    color: "#333",
  },
  permissionButton: {
    backgroundColor: color_list.green,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
  },
  permissionButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
  },
  backButton: {
    margin: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  scanFrameContainer: {
    alignItems: "center",
    marginBottom: 80,
  },
  scanFrame: {
    width: 250,
    height: 250,
    borderWidth: 3,
    borderColor: color_list.orange,
    borderRadius: 20,
    backgroundColor: "transparent",
  },
  scanHint: {
    color: "#fff",
    marginTop: 20,
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 30,
  },
});