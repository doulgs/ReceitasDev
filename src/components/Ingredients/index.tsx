import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IngredientsProps } from "../../interfaces/IntFoods";

type Props = {
  data: IngredientsProps;
};

export function Ingredients({ data }: Props) {
  return (
    <View style={styles.contsiner}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.name}>{data.amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contsiner: {
    backgroundColor: "#FFF",
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
