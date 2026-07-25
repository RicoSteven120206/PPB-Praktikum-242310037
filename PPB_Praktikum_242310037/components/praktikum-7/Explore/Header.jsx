import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { style_explore } from "../../styles/StyleApps";

const HeaderExplore = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={style_explore.headerContainer} edges={["top"]}>
      <View style={style_explore.headerContent}>
        <TouchableOpacity
          onPress={() => router.push("/main-apps")}
          style={style_explore.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HeaderExplore;