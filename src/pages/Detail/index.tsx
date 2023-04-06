import { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { RouteFoods } from "../../interfaces/IntFoods";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export function Detail() {
  const route = useRoute();
  const { data } = route.params as RouteFoods;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: data.name ? data.name : "Detalhes da receita",
      headerRight: () => (
        <Pressable onPress={() => console.log("Testando")}>
          <AntDesign name="heart" size={22} color="#ff4141" />
        </Pressable>
      ),
    });
  }, [data, navigation]);

  return (
    <View style={styles.container}>
      <Text>Detail</Text>
      <Text>{data.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({ container: {} });
