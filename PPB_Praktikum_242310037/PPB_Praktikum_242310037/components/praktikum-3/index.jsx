import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const personalData = {
    name: "Ade Antoni Sugiarto",
    npm: "242310010",
    age: 21,
    gender: true,
    status_nikah: false,
    address: "Jalan Merdeka, Kecamatan Ciomas",
    email: "Adeantony23@gmail.com",
    phone_number: "081234567890",
    experience: [
      {
        nameEx: "Lead Developer Project R3 Petshop",
      },
      {
        nameEx: "Anggota Himpunan Mahasiswa TI",
      },
      {
        nameEx: "Lab Assistant Algoritm and Database",
      },
    ],
    hobbies: ["Coding", "Gaming", "Reading"],
    social_media: {
      instagram: "@rocisvnn",
      github: "RicoSteven12",
    },
  };

  return (
    <ImageBackground
      source={{
        uri: "https://png.pngtree.com/background/20210711/original/pngtree-simple-flat-album-cover-picture-image_1118735.jpg",
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Image
              source={require("../../assets/images/anton jadi presiden.png")}
              style={styles.header.img_avatar}
            />
            <Text style={styles.header.title}>{personalData.name}</Text>
            <Text style={styles.header.subtitle}>{personalData.npm}</Text>
            <View style={styles.identify.container}>
              <View style={styles.identify.card_input}>
                <Text style={styles.identify.title}>Age</Text>
                <TextInput
                  value={personalData.age}
                  autoFocus
                  keyboardType="numeric"
                  style={styles.identify.input_text}
                />
              </View>
              <View style={styles.identify.card_input}>
                <Text style={styles.identify.title}>Gender</Text>
                <TextInput
                  value={personalData.gender ? "Laki-Laki" : "Perempuan"}
                  autoFocus
                  keyboardType="text"
                  style={styles.identify.input_text}
                />
              </View>
              <View style={styles.identify.card_input}>
                <Text style={styles.identify.title}>Status Gender</Text>
                <TextInput
                  value={
                    personalData.status_nikah
                      ? "Sudah Menikah"
                      : "Belum Menikah"
                  }
                  autoFocus
                  keyboardType="text"
                  style={styles.identify.input_text}
                />
              </View>
              <View style={styles.identify.card_input}>
                <Text style={styles.identify.title}>Email</Text>
                <TextInput
                  value={personalData.email}
                  autoFocus
                  keyboardType="text"
                  style={styles.identify.input_text}
                />
              </View>
              <View style={styles.identify.card_input}>
                <Text style={styles.identify.title}>Phone Number</Text>
                <TextInput
                  value={personalData.phone_number}
                  autoFocus
                  keyboardType="numeric"
                  style={styles.identify.input_text}
                />
              </View>
              <View style={styles.identify.card_input}>
                <Text style={styles.identify.title}>Address</Text>
                <TextInput
                  value={personalData.address}
                  autoFocus
                  keyboardType="text"
                  style={styles.identify.input_text}
                />
              </View>
              <View style={styles.identify.card_input}>
                <Text style={styles.identify.title}>Experience</Text>
                {personalData.experience.map((item, index) => (
                  <Text key={index}>- {item.nameEx}</Text>
                ))}
              </View>
              <View style={styles.identify.card_input}>
                <Text style={styles.identify.title}>Experience</Text>
                {personalData.hobbies.map((item, index) => (
                  <Text key={index}>- {item}</Text>
                ))}
              </View>
              <View style={styles.container}>
                <View style={styles.identify.card_input}>
                  <Text>Instagram: {personalData.social_media.instagram}</Text>
                </View>
                <View style={styles.identify.card_input}>
                  <Text>Github: {personalData.social_media.github}</Text>
                </View>
              </View>
              <View style={{ marginTop: 15 }}>
                <TouchableOpacity style={styles.identify.button}>
                  <Text style={styles.identify.button_text}>Save Changes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    title: {
      fontWeight: "bold",
      fontSize: 40,
      textAlign: "center",
    },
    subtitle: {
      fontWeight: "bold",
      fontSize: 20,
      color: "#9b9d9f",
    },
    img_avatar: {
      width: 150,
      height: 150,
      borderRadius: 100,
      borderColor: "#0996d67",
      borderWidth: 4,
      padding: 2,
      backgroundColor: "#f2f2f2",
    },
  },
  identify: {
    container: {
      alignSelf: "stretch",
      padding: 10,
      marginTop: 20,
    },
    card_input: {
      borderWidth: 1,
      borderColor: "#9b9d9f",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginBottom: 10,
    },
    title: {
      color: "#9b9d9f",
      fontSize: 16,
      marginBottom: 0,
    },
    input_text: {
      color: "#000",
      fontSize: 16,
      padding: 0,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#0ea6d0",
      padding: 15,
      borderRadius: 10,
    },
    button_text: {
      fontSize: 18,
      color: "white",
      fontWeight: "bold",
    },
  },
  socialCard: {
    backgroundColor: "rgba(14, 166, 208, 0.1)",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#0ea6d0",
  },
  socialText: {
    fontSize: 14,
    color: "#2f3640",
    fontWeight: "500",
  },
});

export default Index;
