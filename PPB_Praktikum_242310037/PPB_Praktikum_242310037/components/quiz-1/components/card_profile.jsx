import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CardProfile = ({ user, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={user.image}
          style={{ width: "100%", height: 180, borderRadius: 15 }}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.text_card}>{user.title}</Text>
        <Text style={styles.text_card}>{user.departement}</Text>
        <Text style={styles.text_card}>{user.email}</Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity style={styles.btn_porto} onPress={onPress}>
          <Text style={styles.btn_text}>Portofolio </Text>
          <Ionicons
            name="briefcase"
            size={10}
            color="gray"
            style={{ marginLeft: 4 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    width: "48%",
    borderRadius: 15,
    paddingBottom: 3,
    marginTop: 15,
  },
  image: {
    margin: 4,
  },
  content: {
    margin: 4,
    gap: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: "800",
  },
  text_card: {
    fontSize: 10,
    color: "#777777",
  },
  btn: {
    alignItems: "flex-end",
    margin: 5,
  },
  btn_porto: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    flexDirection: "row",
    height: 32,
    borderRadius: 20,
    backgroundColor: "#ebebeb",
  },
  btn_text: {
    fontSize: 12,
  },
});

export default CardProfile;
