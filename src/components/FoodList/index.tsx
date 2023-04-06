import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FoodsProps } from "../../interfaces/IntFoods";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

type Props = {
  data: FoodsProps;
};

export function FoodList({ data }: Props) {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate("Detail", { data: data });
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={handleNavigate}
    >
      <Image style={styles.cover} source={{ uri: data.cover }} />
      <View style={styles.info}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description}>
          {data.total_ingredients} ingredientes | {data.time} min
        </Text>
      </View>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.70)", "rgba(0,0,0,0.95)"]}
        style={styles.gradient}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  cover: {
    width: "100%",
    height: 200,
    borderRadius: 16,
  },
  info: { position: "absolute", bottom: 16, left: 16, zIndex: 99 },
  name: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  description: {
    color: "#FFF",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "70%",
    borderRadius: 16,
    zIndex: 1,
  },
});
