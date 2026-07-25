import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
    Alert,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { color_list, styles } from "../../styles/StyleApps";

export default function ProfileScreen() {
  const [avatar, setAvatar] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Frederico Steven Kwok",
    email: "frederico.steven@example.com",
    bio: "Pecinta buku fiksi dan non-fiksi. Selalu mencari cerita baru.",
  });

  const [tempProfile, setTempProfile] = useState(profile);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Izin ditolak",
        "Aplikasi membutuhkan akses galeri untuk mengubah foto profil."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    if (!tempProfile.name.trim()) {
      Alert.alert("Nama tidak boleh kosong", "Silakan isi nama Anda.");
      return;
    }
    setProfile(tempProfile);
    setIsEditing(false);
    Alert.alert("Berhasil", "Profil Anda telah diperbarui.");
  };

  const handleCancel = () => {
    setTempProfile(profile);
    setIsEditing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <TouchableOpacity onPress={isEditing ? pickImage : undefined}>
            <View style={{ position: "relative" }}>
              {avatar ? (
                <Image
                  source={{ uri: avatar }}
                  style={{ width: 110, height: 110, borderRadius: 55 }}
                />
              ) : (
                <View
                  style={{
                    width: 110,
                    height: 110,
                    borderRadius: 55,
                    backgroundColor: color_list.green_light,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="person"
                    size={50}
                    color={color_list.green}
                  />
                </View>
              )}
              {isEditing && (
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    backgroundColor: color_list.green,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 2,
                    borderColor: "#fff",
                  }}
                >
                  <Ionicons name="camera" size={16} color="#fff" />
                </View>
              )}
            </View>
          </TouchableOpacity>

          {!isEditing && (
            <>
              <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 12 }}>
                {profile.name}
              </Text>
              <Text style={{ color: "gray", marginTop: 4 }}>{profile.email}</Text>
            </>
          )}
        </View>

        <View style={{ marginTop: 30 }}>
          <FieldRow
            label="Nama Lengkap"
            value={isEditing ? tempProfile.name : profile.name}
            editable={isEditing}
            onChangeText={(text) =>
              setTempProfile((prev) => ({ ...prev, name: text }))
            }
          />
          <FieldRow
            label="Email"
            value={isEditing ? tempProfile.email : profile.email}
            editable={isEditing}
            keyboardType="email-address"
            onChangeText={(text) =>
              setTempProfile((prev) => ({ ...prev, email: text }))
            }
          />
          <FieldRow
            label="Bio"
            value={isEditing ? tempProfile.bio : profile.bio}
            editable={isEditing}
            multiline
            onChangeText={(text) =>
              setTempProfile((prev) => ({ ...prev, bio: text }))
            }
          />
        </View>

        <View style={{ marginTop: 30, gap: 10 }}>
          {isEditing ? (
            <>
              <TouchableOpacity
                style={{
                  backgroundColor: color_list.green,
                  paddingVertical: 14,
                  borderRadius: 12,
                  alignItems: "center",
                }}
                onPress={handleSave}
              >
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
                  Simpan Perubahan
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingVertical: 14,
                  borderRadius: 12,
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "gray",
                }}
                onPress={handleCancel}
              >
                <Text style={{ color: "gray", fontWeight: "600" }}>Batal</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: color_list.green,
                paddingVertical: 14,
                borderRadius: 12,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                gap: 8,
              }}
              onPress={() => setIsEditing(true)}
            >
              <Ionicons name="create-outline" size={20} color="#fff" />
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
                Edit Profil
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const FieldRow = ({ label, value, editable, onChangeText, multiline, keyboardType }) => (
  <View style={{ marginBottom: 18 }}>
    <Text style={{ fontSize: 13, color: "gray", marginBottom: 6 }}>{label}</Text>
    {editable ? (
      <TextInput
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        keyboardType={keyboardType}
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 10,
          padding: 12,
          fontSize: 15,
          minHeight: multiline ? 80 : undefined,
          textAlignVertical: multiline ? "top" : "center",
        }}
      />
    ) : (
      <Text style={{ fontSize: 15, color: "#1e293b" }}>{value}</Text>
    )}
  </View>
);