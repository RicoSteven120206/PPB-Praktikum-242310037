import { Ionicons } from "@expo/vector-icons";
import { useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { checkLoginStatus, logoutUser } from "../../../utils/session";
import SignInForm from "../../praktikum-8/SignInForm";
import { color_list, styles } from "../../styles/StyleApps";

export default function ProfileScreen() {
  const router = useRouter();
  const segments = useSegments();

  const [checkingAuth, setCheckingAuth] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await checkLoginStatus();
      setUserData(data);
      setCheckingAuth(false);
    })();
  }, [segments]);

  const handleSignOut = () => {
    Alert.alert("Sign Out", "Apakah Anda yakin ingin keluar?", [
      { text: "Batal", style: "cancel" },
      {
        text: "Sign Out",
        style: "destructive",
        onPress: async () => {
          await logoutUser();
          setUserData(null);
          router.replace("/auth/signin");
        },
      },
    ]);
  };

  if (checkingAuth) {
    return (
      <SafeAreaView
        style={[styles.container, { justifyContent: "center", alignItems: "center" }]}
      >
        <ActivityIndicator size="large" color={color_list.green} />
      </SafeAreaView>
    );
  }

  if (!userData) {
    return (
      <SafeAreaView style={[styles.container, { justifyContent: "center" }]}>
        <SignInForm onSuccess={(data) => setUserData(data)} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        {/* Profile header */}
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
          <View
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: color_list.green_light,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="person" size={28} color={color_list.green} />
          </View>
          <View style={{ marginLeft: 12, flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{userData.username}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 2 }}>
              <Ionicons name="ribbon-outline" size={13} color={color_list.green} />
              <Text style={{ color: color_list.green, fontSize: 12, marginLeft: 4 }}>
                Basic Member
              </Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 10, marginTop: 16 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 6,
              paddingVertical: 12,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#ddd",
            }}
          >
            <Ionicons name="person-outline" size={16} color="#333" />
            <Text style={{ fontSize: 13, fontWeight: "600" }}>View Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 6,
              paddingVertical: 12,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#ddd",
            }}
            onPress={() => router.push("/main-apps/qr-scanner")}
          >
            <Ionicons name="qr-code-outline" size={16} color="#333" />
            <Text style={{ fontSize: 13, fontWeight: "600" }}>Scan QR</Text>
          </TouchableOpacity>
        </View>

        {/* Rewards section */}
        <Text style={{ marginTop: 26, marginBottom: 10, fontWeight: "bold", fontSize: 15 }}>
          My Rewards
        </Text>
        <View
          style={{
            backgroundColor: color_list.green,
            borderRadius: 16,
            padding: 18,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="star" size={16} color="#FBBF24" />
            <Text style={{ color: "#fff", marginLeft: 6, fontWeight: "600" }}>
              Reward Points
            </Text>
          </View>
          <Text style={{ color: "#fff", fontSize: 12, marginTop: 10, opacity: 0.8 }}>
            Available Points
          </Text>
          <Text style={{ color: "#fff", fontSize: 26, fontWeight: "bold" }}>1,250 pts</Text>

          <View style={{ flexDirection: "row", gap: 8, marginTop: 14 }}>
            <RewardMiniBtn icon="gift-outline" label="Redeem" />
            <RewardMiniBtn icon="time-outline" label="History" />
            <RewardMiniBtn icon="add-circle-outline" label="Earn More" />
          </View>
        </View>

        {/* Preferences */}
        <Text style={{ marginTop: 26, marginBottom: 6, fontWeight: "bold", fontSize: 15 }}>
          Preferences
        </Text>
        <PrefRow icon="shield-checkmark-outline" label="Account Safety" />
        <PrefRow icon="card-outline" label="Payment Methods" />
        <PrefRow icon="wallet-outline" label="My Coints" />
        <PrefRow icon="lock-closed-outline" label="Privacy Policy" />
        <PrefRow icon="help-circle-outline" label="Help & Support" />
        <PrefRow icon="document-text-outline" label="Terms of Service" />
        <PrefRow icon="language-outline" label="Language" last />

        {/* Sign Out */}
        <TouchableOpacity
          style={{
            marginTop: 26,
            backgroundColor: "#EF4444",
            paddingVertical: 14,
            borderRadius: 30,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            gap: 8,
          }}
          onPress={handleSignOut}
        >
          <Ionicons name="log-out-outline" size={18} color="#fff" />
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Sign Out</Text>
        </TouchableOpacity>

        <Text style={{ textAlign: "center", color: "gray", fontSize: 11, marginTop: 14 }}>
          Version 1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const RewardMiniBtn = ({ icon, label }) => (
  <TouchableOpacity
    style={{
      flex: 1,
      backgroundColor: "rgba(255,255,255,0.15)",
      borderRadius: 10,
      paddingVertical: 8,
      alignItems: "center",
    }}
  >
    <Ionicons name={icon} size={16} color="#fff" />
    <Text style={{ color: "#fff", fontSize: 11, marginTop: 4 }}>{label}</Text>
  </TouchableOpacity>
);

const PrefRow = ({ icon, label, last }) => (
  <TouchableOpacity
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 14,
      borderBottomWidth: last ? 0 : 1,
      borderBottomColor: "#eee",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
      <Ionicons name={icon} size={18} color="#555" />
      <Text style={{ fontSize: 14 }}>{label}</Text>
    </View>
    <Ionicons name="chevron-forward" size={16} color="#ccc" />
  </TouchableOpacity>
);