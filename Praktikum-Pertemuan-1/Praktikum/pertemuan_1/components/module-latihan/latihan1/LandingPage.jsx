// export {default} from "@/components/module-latihan/latihan1/LandingPage";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LandingPage() {
  return (
    <View style={styles.container}>
        <Text>Welcome</Text>
        <Text>Praktikum Pemrograman Perangkat Bergerak</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundCOlor: "red",
        alignItems: "center",
        justifyContent: "center",
        font: 900,
    },
});