import AntDesign from "@expo/vector-icons/AntDesign";
import { Text, View } from "react-native";
import { style_explore } from "../../styles/StyleApps";

const ListStores = ({ stores = [] }) => {
  return (
    <View>
      {stores.map((store, index) => (
        <View key={store?.id ?? index} style={style_explore.storeRow}>
          <AntDesign name="shopping" size={24} color="green" />
          <View style={style_explore.storeInfo}>
            <Text style={style_explore.storeTitle}>{store?.title}</Text>
            <View style={style_explore.storeRatingRow}>
              <AntDesign name="star" size={16} color="orange" />
              <Text style={{ marginLeft: 4 }}>{store?.rating ?? "-"}</Text>
            </View>
            <Text style={style_explore.storeMeta}>
              Open &middot; Closes {store?.closeHour ?? "-"} pm &middot; {store?.phone ?? "-"}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ListStores;