import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { AUTH_USER } from "../../utils/api";
import { color_list } from "../styles/StyleApps";

const SignInForm = ({ onSuccess, showSignUpLink = true }) => {
  const router = useRouter();
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    if (!username.trim()) {
      Alert.alert("Error", "Username cannot be empty");
      return;
    }
    if (!password.trim()) {
      Alert.alert("Error", "Password cannot be empty");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);
    const results = await AUTH_USER({ username, password });

    if (results.message) {
      Alert.alert("Error", results.message);
      setIsLoading(false);
      return;
    } else if (results.data && results.data.token) {
      try {
        const userData = {
          username,
          token: results.data.token,
          loginTime: new Date().toISOString(),
        };

        await AsyncStorage.setItem("userData", JSON.stringify(userData));
        await AsyncStorage.setItem("authToken", results.data.token);
        setIsLoading(false);

        if (onSuccess) {
          onSuccess(userData);
        } else {
          router.replace("/main-apps");
        }
      } catch (error) {
        console.error("Error saving user data:", error);
        Alert.alert("Error", "Failed to save login data");
        setIsLoading(false);
      }
    } else {
      Alert.alert("Error", "Invalid response from server");
      setIsLoading(false);
    }
  };

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View style={{ alignItems: "center", marginBottom: 40 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: color_list.green }}>
          Readly+
        </Text>
        <Text style={{ color: "gray", marginTop: 4 }}>Sign in to continue</Text>
      </View>

      <View style={{ marginBottom: 15 }}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          style={inputStyle}
        />
      </View>

      <View style={{ marginBottom: 10 }}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCapitalize="none"
          style={inputStyle}
        />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: color_list.green,
          paddingVertical: 15,
          borderRadius: 12,
          alignItems: "center",
          marginTop: 20,
          opacity: isLoading ? 0.7 : 1,
        }}
        onPress={handleSignIn}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Sign In
          </Text>
        )}
      </TouchableOpacity>

      {showSignUpLink && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ color: "gray" }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/auth/signup")}>
            <Text style={{ color: color_list.green, fontWeight: "bold" }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const inputStyle = {
  borderWidth: 1,
  borderColor: "#ddd",
  borderRadius: 12,
  paddingHorizontal: 15,
  paddingVertical: 12,
  fontSize: 15,
};

export default SignInForm;