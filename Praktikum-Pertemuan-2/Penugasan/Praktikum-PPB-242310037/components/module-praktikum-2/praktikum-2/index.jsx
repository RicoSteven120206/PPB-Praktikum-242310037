import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Index = () => {
    const dataDiri = {
        id: 1,
        nama: "Frederico Steven Kwok",
        beratBadan: 71.2,
        tinggiBadan: 165.5,
    };

    const dataPorsi = [
        {id: 1, waktuMakan: "Sarapan", jumlahKalori: 450},
        {id: 2, waktuMakan: "Cemilan Pagi", jumlahKalori: 250},
        {id: 3, waktuMakan: "Makan Siang", jumlahKalori: 800},
        {id: 4, waktuMakan: "Cemilan Sore", jumlahKalori: 250},
        {id: 5, waktuMakan: "Makan Malam", jumlahKalori: 600},
    ];

    let kaloriHarian = 0;
    for (let i = 0; i < dataPorsi.length; i++) {
        kaloriHarian += dataPorsi[i].jumlahKalori;
    } 

    const tbMeter = dataDiri.tinggiBadan / 100;

    const nilaiBMI = dataDiri.beratBadan / (tbMeter * tbMeter);

    let statusBMI = "";
    if (nilaiBMI < 0) {
        alert('Nilai tidak boleh negatif');
    } else if (nilaiBMI < 18.5) {
        statusBMI = "kurus";
    } else if (nilaiBMI >= 18.5 && nilaiBMI < 24.9) {
        statusBMI = "ideal";
    } else {
        statusBMI = "berlebih";
    }

    let statusKalori = "";
    if (kaloriHarian < 2000) {
        statusKalori = "kurang";
    } else if (kaloriHarian >= 2000 && kaloriHarian <= 2500) {
        statusKalori = "cukup";
    } else {
        statusKalori = "berlebih";
    }

    let kesimpulan = "";
    if (statusBMI === "kurus" && statusKalori === "kurang") {
        kesimpulan = "Kamu kekurangan kalori. Perbanyak makan makanan bergizi agar mencapai BMI ideal.";
    } else if (statusBMI === "kurus" && (statusKalori === "cukup" || statusKalori === "Berlebih")) {
        kesimpulan = "Asupan kalorimu sudah baik atau lebih, jika berat badan tidak naik, coba periksa metabolisme atau rutinkan olahraga otot.";
    } else if (statusBMI === "berlebih" && statusKalori === "berlebih") {
        kesimpulan = "Kamu surplus kalori. Kurangi porsi makan atau perbanyak aktivitas fisik untuk menurunkan berat badan.";
    } else if (statusBMI === "berlebih" && statusKalori === "kurang") {
        kesimpulan = "Kamu defisit kalori. Pertahankan defisit ini secara sehat hingga mencapai BMI ideal.";
    } else if (statusBMI === "ideal" && statusKalori === "cukup") {
        kesimpulan = "Luar biasa! Pertahankan pola makan dan gaya hidup sehatmu ini.";
    } else {
        kesimpulan = "Perhatikan kembali pola makanmu agar tetap seimbang dengan kondisi tubuhmu.";
    }

    return (
        <View>
            <Text>=== Laporan ===</Text>
            <Text>{dataDiri.nama}</Text>
        </View>
    );
}

export default Index;