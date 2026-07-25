import { StyleSheet, Text, View } from "react-native";
import Page from './app/module-latihan1/latihan1';
import React from "react";

export default function Latihan1() {
    return (
        <View style={styles.container}>
            <Page />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});