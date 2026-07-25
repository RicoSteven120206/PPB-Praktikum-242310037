import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListUser from "../../constants/list_users";
import CardPortofolio from "./components/card_portofolio";

const UserProfile = () => {
  const { id } = useLocalSearchParams();
  const selectedUser = ListUser.find((user) => user.id == id);
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  if (!selectedUser) {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={handleBack} style={styles.btn_back}>
          <Text>Back</Text>
        </TouchableOpacity>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text>User Not Found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.btn_back}>
        <Ionicons
          name="arrow-back"
          size={17}
          color="white"
          style={{ marginRight: 6 }}
        />
        <Text style={{ fontWeight: 600, color: "white" }}>Back</Text>
      </TouchableOpacity>
      <View style={styles.profile}>
        <View style={styles.data_profile}>
          <Text style={{ fontSize: 18, fontWeight: 800 }}>
            {selectedUser.name}
          </Text>
          <Text>Title: {selectedUser.title}</Text>
          <Text>Departement: {selectedUser.departement}</Text>
          <Text>Email: {selectedUser.email}</Text>
        </View>
        <View>
          <Image
            source={selectedUser.image}
            style={{ width: 100, height: 100, borderRadius: 15 }}
          />
        </View>
      </View>
      <View style={{ flexDirection: "column", flex: 1 }}>
        <Text
          style={{ marginLeft: 10, fontSize: 18, fontWeight: 600, margin: 10 }}
        >
          Portofolio List
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          <View style={styles.layout_card}>
            {selectedUser.portofolio.map((porto, index) => (
              <CardPortofolio key={index} porto={porto} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn_back: {
    backgroundColor: "#a5a5a5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 100,
    height: 35,
    borderRadius: 8,
    margin: 10,
  },
  profile: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 12,
    justifyContent: "space-between",
  },
  data_profile: {
    flexDirection: "column",
    gap: 3,
  },
  layout_card: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
});

export default UserProfile;
