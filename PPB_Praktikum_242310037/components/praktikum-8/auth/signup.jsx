import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { REGISTER_USER } from "../../../utils/api";
import { color_list, styles } from "../../styles/StyleApps";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignUp() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    // Validasi: field tidak boleh kosong
    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !retypePassword.trim()
    ) {
      Alert.alert("Error", "Semua field wajib diisi");
      return;
    }

    // Validasi: format email
    if (!EMAIL_REGEX.test(email.trim())) {
      Alert.alert("Error", "Format email tidak valid");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password minimal 6 karakter");
      return;
    }

    // Validasi: password harus sama dengan retype password
    if (password !== retypePassword) {
      Alert.alert("Error", "Password dan Re-Type Password tidak sama");
      return;
    }

    setIsLoading(true);

    const results = await REGISTER_USER({
      email: email.trim(),
      username: username.trim(),
      password,
    });

    setIsLoading(false);

    if (results.message) {
      Alert.alert("Gagal", "Gagal membuat akun");
      return;
    }

    if (results.data && (results.data.id || results.data.username)) {
      Alert.alert("Berhasil", "Akun berhasil dibuat, silakan Sign In", [
        {
          text: "OK",
          onPress: () => router.replace("/auth/signin"),
        },
      ]);
    } else {
      Alert.alert("Gagal", "Gagal membuat akun");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingVertical: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Text
            style={{ fontSize: 24, fontWeight: "bold", color: color_list.green }}
          >
            Readly+
          </Text>
          <Text style={{ color: "gray", marginTop: 4 }}>Sign up to continue</Text>
        </View>

        <FormInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <FormInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <FormInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <FormInput
          placeholder="Re-Type Password"
          value={retypePassword}
          onChangeText={setRetypePassword}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={{
            backgroundColor: color_list.green,
            paddingVertical: 15,
            borderRadius: 12,
            alignItems: "center",
            marginTop: 15,
            opacity: isLoading ? 0.7 : 1,
          }}
          onPress={handleRegister}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              Register
            </Text>
          )}
        </TouchableOpacity>

        <View
          style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}
        >
          <Text style={{ color: "gray" }}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/auth/signin")}>
            <Text style={{ color: color_list.green, fontWeight: "bold" }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const FormInput = (props) => (
  <View style={{ marginBottom: 15 }}>
    <TextInput
      {...props}
      style={{
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 15,
      }}
    />
  </View>
);