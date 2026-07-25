import { Image, StyleSheet, Text, View } from "react-native";

const CardPortofolio = ({ porto }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_wrap}>
        <Image
          source={porto.imagePorto}
          style={{ width: "100%", height: 160, borderRadius: 15 }}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
          gap: 2,
          borderTopWidth: 4,
          borderRadius: 4,
          borderTopColor: "#3e7bff",
        }}
      >
        <Text
          numberOfLines={2}
          style={{ fontWeight: 700, textAlign: "center" }}
        >
          {porto.namePorto}
        </Text>
        <Text>Code: {porto.code}</Text>
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
  image_wrap: {
    margin: 12,
    height: 180,
  },
});

export default CardPortofolio;
