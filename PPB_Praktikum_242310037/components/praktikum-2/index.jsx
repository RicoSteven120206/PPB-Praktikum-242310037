import { StyleSheet, Text, View } from "react-native";

export default function index() {
  const dataPasien = {
    nama: "Frederico Steven Kwok",
    tinggiBadan: 165,
    beratBadan: 71,
  };

  const dataPorsi = [
    { waktu: "sarapan", kalori: 450 },
    { waktu: "cemilan pagi", kalori: 350 },
    { waktu: "makan siang", kalori: 800 },
    { waktu: "cemilan sore", kalori: 350 },
    { waktu: "makan malam", kalori: 800 },
  ];

  let totalKalori = 0;
  for (let i = 0; i < dataPorsi.length; i++) {
    totalKalori += dataPorsi[i].kalori;
  }

  // berat_badan kg / tinggi_badan m2
  let convBeratBadan = dataPasien.tinggiBadan / 100;
  let bmi = dataPasien.beratBadan / (convBeratBadan * convBeratBadan);

  let statusBMI = "";
  if (bmi < 18) {
    statusBMI = "Kurang Ideal";
  } else if (bmi >= 18 && bmi < 25) {
    statusBMI = "ideal";
  } else {
    statusBMI = "Berlebih";
  }

  let statusKalori = "";
  if (totalKalori < 1800) {
    statusKalori = "Asupan Kalori Kurang";
  } else if (totalKalori >= 1800 && totalKalori < 2500) {
    statusKalori = "Asupan Kalori Cukup";
  } else {
    statusKalori = "Asupan Kalori Berlebih";
  }

  // Tata Letak Jelek Karena Prettier -_-
  let evaluasi = "";
  if (statusBMI === "Kurang Ideal" && statusKalori === "Asupan Kalori Kurang") {
    evaluasi = "Berat Badan Kurang Ideal dan Asupan Kalori Kurang.";
  } else if (
    statusBMI === "Kurang Ideal" &&
    statusKalori === "Asupan Kalori Cukup"
  ) {
    evaluasi = "Berat Badan Kurang Ideal dan Asupan Kalori Sesuai.";
  } else if (
    statusBMI === "Kurang Ideal" &&
    statusKalori === "Asupan Kalori Berlebih"
  ) {
    evaluasi = "Berat Badan Kurang Ideal dan Asupan Kalori Berlebih.";
  } else if (statusBMI === "Ideal" && statusKalori === "Asupan Kalori Kurang") {
    evaluasi = "Berat Badan Ideal dan Asupan Kalori Kurang.";
  } else if (statusBMI === "Ideal" && statusKalori === "Asupan Kalori Cukup") {
    evaluasi = "Berat Badan Ideal dan Asupan Kalori Sesuai.";
  } else if (
    statusBMI === "Ideal" &&
    statusKalori === "Asupan Kalori Berlebih"
  ) {
    evaluasi = "Berat Badan Ideal dan Asupan Kalori Berlebih.";
  } else if (
    statusBMI === "Berlebih" &&
    statusKalori === "Asupan Kalori Kurang"
  ) {
    evaluasi = "Berat Badan Berlebih dan Asupan Kalori Kurang.";
  } else if (
    statusBMI === "Berlebih" &&
    statusKalori === "Asupan Kalori Cukup"
  ) {
    evaluasi = "Berat Badan Berlebih dan Asupan Kalori Sesuai.";
  } else if (
    statusBMI === "Berlebih" &&
    statusKalori === "Asupan Kalori Berlebih"
  ) {
    evaluasi = "Berat Badan Berlebih dan Asupan Kalori Berlebih.";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Evaluasi Berat Badan Ideal</Text>
      <Text style={styles.header}>Pasien</Text>
      <Text>Nama: {dataPasien.nama}</Text>
      <Text>Berat Badan: {dataPasien.beratBadan} kg</Text>
      <Text>Tinggi Badan: {dataPasien.tinggiBadan} cm</Text>
      <Text style={styles.header}>Porsi Makanan Harian</Text>
      {dataPorsi.map((waktu, index) => (
        <Text key={index} style={{ textTransform: "capitalize" }}>
          Waktu Makan: {waktu.waktu} - {waktu.kalori} kalori
        </Text>
      ))}
      <Text style={{ marginTop: 10, fontWeight: 800 }}>
        Total Kalori: {totalKalori}
      </Text>
      <Text style={styles.header}>Hasil Perhitungan</Text>
      <Text>BMI Pasien: {bmi}</Text>
      <Text>Status BMI: {statusBMI}</Text>
      <Text>Status Kalori: {statusKalori}</Text>
      <Text style={styles.footer}>{evaluasi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  header: {
    fontWeight: 900,
    fontSize: 24,
    marginTop: 18,
  },
  footer: {
    fontWeight: 800,
    fontSize: 18,
    marginTop: 12,
  },
});
