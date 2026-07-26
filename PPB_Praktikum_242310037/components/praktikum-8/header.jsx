import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { checkLoginStatus } from "../../utils/session";
import { styles } from "../styles/StyleApps";

const Header = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  // useFocusEffect memastikan data ter-refresh setiap kali Homescreen kembali fokus
  // (misal setelah user baru saja login lalu kembali ke halaman ini)
  useFocusEffect(
    useCallback(() => {
      (async () => {
        const data = await checkLoginStatus();
        setUserData(data);
      })();
    }, [])
  );

  return (
    <View style={styles.h_container}>
      <View>
        <Text style={styles.sub_title}>Good Morning👋</Text>
        <Text style={styles.title}>{userData?.username || "Discover Books"}</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity
          style={[styles.btn_icon, styles.shadow]}
          onPress={() => router.push("/module-praktikum-4/search")}
          activeOpacity={0.7}
        >
          <Ionicons name="search-outline" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn_icon, styles.shadow]}
          onPress={() => router.push("/main-apps/qr-scanner")}
          activeOpacity={0.7}
        >
          <Ionicons name="qr-code-outline" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn_icon}>
          <Ionicons name="notifications-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;