import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import api from "../../services/api";
import { FoodsProps } from "../../interfaces/IntFoods";
import { FoodList } from "../../components/FoodList";

export function Search() {
  const route = useRoute();
  const { name } = route.params as FoodsProps;

  const [receives, setReceives] = useState<FoodsProps[]>([]);

  useEffect(() => {
    async function fetchReceipes() {
      const response = await api.get(`/foods?name_like=${name}`);
      setReceives(response.data);
    }

    fetchReceipes();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={receives}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
        ListEmptyComponent={() => (
          <Text style={styles.text}>Nada encontrado</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f9ff",
    paddingStart: 16,
    paddingEnd: 16,
    paddingTop: 16,
  },
  text: { fontSize: 20 },
});
