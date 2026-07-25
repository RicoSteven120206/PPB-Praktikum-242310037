import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

const Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Landing Page</Text>
      <Link href={"/module-praktikum-6/main-apps"} push asChild>
        <Button title="Get Started" />
      </Link>
    </View>
  );
};

export default Index;
