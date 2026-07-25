import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import * as Location from "expo-location";
import { useEffect, useMemo, useRef, useState } from "react";
import { Alert, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ListStoreData from "../../../constants/list_stores";
import { style_explore } from "../../styles/StyleApps";
import HeaderExplore from "../Explore/Header";
import ListStores from "../Explore/ListStores";
import MapViewExplore from "../Explore/MapView";

export default function Explore() {
  const bottomSheetRef = useRef(null);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);

  const snapPoints = useMemo(() => ["35%", "50%", "90%"], []);

  const handleSheetChange = (index) => {
    if (index === -1) {
      bottomSheetRef.current?.snapToIndex(0);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          Alert.alert("Izin ditolak", "Aplikasi membutuhkan akses lokasi");
          return;
        }

        const userLocation = await Location.getCurrentPositionAsync({});
        setLocation(userLocation.coords);

        const addressData = await Location.reverseGeocodeAsync({
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
        });

        if (addressData.length > 0) {
          setAddress(addressData[0]);
        }
      } catch (error) {
        console.error("Gagal mengambil lokasi:", error);
        Alert.alert(
          "Terjadi kesalahan",
          "Tidak dapat mengambil lokasi Anda saat ini."
        );
      }
    })();
  }, []);

  return (
    <GestureHandlerRootView style={style_explore.container}>
      <MapViewExplore current_location={location} />
      <HeaderExplore />

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        enablePanDownToClose
        onChange={handleSheetChange}
        snapPoints={snapPoints}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            opacity={0.5}
            appearsOnIndex={1}
            disappearsOnIndex={0}
          />
        )}
        backgroundStyle={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "white",
        }}
      >
        <BottomSheetScrollView contentContainerStyle={{ padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Explore Store
          </Text>

          {address && (
            <Text style={style_explore.subtitle}>
              Location:{" "}
              {(address?.city || address?.name || "-") +
                ", " +
                (address?.subregion || address?.region || "-")}
            </Text>
          )}

          <ListStores stores={ListStoreData} />
        </BottomSheetScrollView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}