import { Ionicons } from "@expo/vector-icons";
import { Platform, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { color_list, style_explore } from "../../styles/StyleApps";

const MapViewExplore = ({ current_location }) => {
  // Web tidak didukung oleh react-native-maps, tampilkan fallback
  if (Platform.OS === "web") {
    return (
      <View style={[style_explore.map, style_explore.mapFallback]}>
        <Ionicons name="map-outline" size={80} color={color_list.green} />
        <Text style={style_explore.mapFallbackText}>Map View Unavailable</Text>
        <Text style={style_explore.mapFallbackSubtext}>
          Maps are only available on Android and iOS devices
        </Text>
        <Text style={style_explore.mapFallbackHint}>
          Please run this app on a mobile device or emulator
        </Text>
      </View>
    );
  }

  // Selama lokasi belum didapat, tampilkan loading placeholder
  if (!current_location) {
    return (
      <View style={[style_explore.map, style_explore.mapFallback]}>
        <Ionicons name="location-outline" size={60} color={color_list.green} />
        <Text style={style_explore.mapFallbackText}>Mengambil lokasi...</Text>
      </View>
    );
  }

  const initialRegion = {
    latitude: current_location.latitude,
    longitude: current_location.longitude,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  return (
    <MapView
      style={style_explore.map}
      provider={Platform.OS === "android" ? PROVIDER_GOOGLE : undefined}
      initialRegion={initialRegion}
      showsUserLocation={true}
      showsMyLocationButton={true}
      showsCompass={true}
    >
      <Marker
        coordinate={{
          latitude: current_location.latitude,
          longitude: current_location.longitude,
        }}
        title="Lokasi Anda"
        description="Posisi Anda saat ini"
      >
        <View style={style_explore.customMarker}>
          <Ionicons name="location" size={28} color={color_list.orange} />
        </View>
      </Marker>
    </MapView>
  );
};

export default MapViewExplore;