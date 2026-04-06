import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Latihan1() {
    return (
        <View style={styles.container}>
            <Text>Selamat Datang di Praktikum Pemrograman Perangkat Bergerak</Text>
            <Text>Nama: Frederico Steven Kwok</Text>
            <Text>NPM: 242310037</Text>
            <Text>Prodi: Teknologi Informasi</Text>
            <Text>Angkatan: 2024</Text>
            <Text>Kelas: TI-24-PA</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});