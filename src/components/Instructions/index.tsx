import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { InstructionsProps } from "../../interfaces/IntFoods";

type Props = {
  data: InstructionsProps;
  index: number;
};

export function Instructions({ data, index }: Props) {
  return (
    <View style={styles.constainer}>
      <Text style={styles.name}>{`${index + 1} - `}</Text>
      <Text style={styles.text}>{data.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flexDirection: "row",
    padding: 8,
    marginBottom: 16,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    lineHeight: 20,
  },
});
