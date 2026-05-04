import { useState } from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./components/_ui/styles";
import { Form, FormOutput } from "./components/form";

const Profile = () => {
  const [nama, setNama] = useState("");
  const [nip, setNip] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [institusi, setInstitusi] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.image}>
          <Image
            source={require("../../assets/books/mikrotik.png")}
            style={styles.imageBorder}
          />
        </View>
        <Form
          label={"Nama"}
          value={nama}
          placeholder={"Masukkan Nama..."}
          onChangeText={(text) => setNama(text)}
          style={{ marginRight: 25 }}
        />
        <Form
          label={"NIP"}
          value={nip}
          placeholder={"Masukkan NIP..."}
          onChangeText={(text) => setNip(text)}
          style={{ marginRight: 43 }}
        />
        <Form
          label={"Jabatan"}
          value={jabatan}
          placeholder={"Masukkan Jabatan..."}
          onChangeText={(text) => setJabatan(text)}
        />
        <Form
          label={"Institusi"}
          value={institusi}
          placeholder={"Masukkan Institusi..."}
          onChangeText={(text) => setInstitusi(text)}
        />
      </View>
      <View style={[styles.form, { marginTop: 30 }]}>
        <FormOutput
          value={nama}
          label={"Nama"}
          style={{ marginRight: 27 }}
          styleout={{ fontSize: 18 }}
        />
        <FormOutput
          value={nip}
          label={"NIP"}
          style={{ marginRight: 47 }}
          styleout={{ fontSize: 18 }}
        />
        <FormOutput
          value={jabatan}
          label={"Jabatan"}
          style={{ marginRight: 15 }}
          styleout={{ fontSize: 18 }}
        />
        <FormOutput
          value={institusi}
          label={"Institusi"}
          style={{ marginRight: 15 }}
          styleout={{ fontSize: 18 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
