import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/StyleApps";
import SignInForm from "../SignInForm";

export default function SignIn() {
  return (
    <SafeAreaView style={[styles.container, { justifyContent: "center" }]}>
      <SignInForm />
    </SafeAreaView>
  );
}