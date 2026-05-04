import { Text, TextInput, View } from "react-native";
import styles from "../components/_ui/styles";

const Form = ({ style, label, value, onChangeText, placeholder, ...props }) => {
  return (
    <View style={styles.input}>
      <Text style={[styles.label, style]}>{label}: </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        {...props}
      />
    </View>
  );
};

const FormOutput = ({ style, styleout, label, value }) => {
  return (
    <View style={styles.input}>
      <Text style={[styles.label, style]}>{label}: </Text>
      <Text style={[styles.textInput, styleout]}>{value}</Text>
    </View>
  );
};

export { Form, FormOutput };

