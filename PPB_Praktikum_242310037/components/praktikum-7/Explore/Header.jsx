import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={style_explore.headerContainer} edges={["top"]}>
      <View style={style_explore.headerContainer}>
        <TouchableOpacity onPress={() => router.push("/main-apps")}>
          <Ionicons name="arraw-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
