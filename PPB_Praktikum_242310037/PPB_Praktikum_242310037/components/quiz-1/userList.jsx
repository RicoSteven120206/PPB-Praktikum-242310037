import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListUser from "../../constants/list_users";
import CardProfile from "./components/card_profile";

const UserList = () => {
  const dataUser = ListUser;
  const [user, setUser] = useState(ListUser);
  const countUser = user.length;
  const router = useRouter();
  const handleProfile = (userId) => {
    router.push({
      pathname: "/module-quiz-1/profile",
      params: { id: userId },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>List User ({countUser})</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View style={styles.layout_card}>
          {dataUser.map((user) => (
            <CardProfile
              key={user.id}
              user={user}
              onPress={() => handleProfile(user.id)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f6ff",
  },
  header: {
    marginBottom: 20,
    marginTop: 15,
    marginLeft: 15,
  },
  text_header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  layout_card: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
});

export default UserList;
