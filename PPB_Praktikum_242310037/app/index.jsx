import { Redirect } from "expo-router";

export default function index() {
  return <Redirect href="/module-praktikum-7/main-apps" />;
}

// import { Link } from "expo-router";
// import { Button, Text, View } from "react-native";

// const Index = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Landing Page</Text>
//       <Link href={"/main-apps"} push asChild>
//         <Button title="Get Started" />
//       </Link>
//     </View>
//   );
// };

// export default Index;
