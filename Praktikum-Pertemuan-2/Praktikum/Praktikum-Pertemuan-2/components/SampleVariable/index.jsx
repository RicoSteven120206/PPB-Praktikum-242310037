import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SampleVariable = () => {
    const title = "Contoh penggunaan variable pada JSX";
    const personalData = {
        name: "Anton Sukamto",
        jurusan: "Teknologi Informasi",
        aktif: true,
    };

    const extracurricular = ["Backetball", "Robotics", "Mentoring"];
    const a = 10, b = 20;
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <Text>Jawaban Penjumlahan: {a + b}</Text>
            <Text>Memanggil data array pada JSX</Text>
            <Text>Extracurricular</Text>
            {extracurricular.map((item, index) => (
                <Text key={index}>- {item}</Text>
            ))}

            <Text>Memanggil data Object pada JSX</Text>
            <Text>Fullname: {personalData.name}</Text>
            <Text>Departement: {personalData.jurusan}</Text>
            <Text>Status: {personalData.aktif ? "Active" : "Not Active"}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default SampleVariable;