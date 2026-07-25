// import { Redirect } from "expo-router";

// export default function index() {
//   return <Redirect href="/module-praktikum-7/main-apps" />;
// }

import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
      }}>Landing Page</Text>
      <Link href={"/main-apps"} push asChild>
        <Button 
          title="Get Started" 
          style={{
            borderWidth: 1,
            borderRadius: 8,
            padding: 10,
          }}
        />
      </Link>
    </View>
  )
}

