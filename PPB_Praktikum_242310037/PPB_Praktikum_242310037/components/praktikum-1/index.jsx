import { StyleSheet, Text, View } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>
        Selamat Datang di Praktikum Pemrograman Perangkat Bergerak
      </Text>
      <Text>Nama: Frederico Steven Kwok</Text>
      <Text>NPM: 242310037</Text>
      <Text>Prodi: Teknologi Informasi</Text>
      <Text>Angkatan: 2024</Text>
      <Text>Kelas: TI-24-PA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 23,
  },
});

export default Index;
