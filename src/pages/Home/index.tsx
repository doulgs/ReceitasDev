import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Logo } from "../../components/Logo";

import api from "../../services/api";
import { FoodsProps } from "../../interfaces/IntFoods";
import { FoodList } from "../../components/FoodList";

const statusBarHeight = StatusBar.currentHeight;

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const [foods, setFoods] = useState<FoodsProps[]>([]);

  useEffect(() => {
    async function fetchApi() {
      const response = await api.get("/foods");
      setFoods(response.data);
    }

    fetchApi();
  }, []);

  function handleSearch() {
    console.log("handleSearch");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Logo />

      <Text style={styles.title}>
        Encontre a receita {`\n`}que combina com voce
      </Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Digite o nome da receita"
          style={styles.input}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <AntDesign name="search1" size={24} color="#4cbe6c" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={foods}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
    paddingStart: 14,
    paddingEnd: 14,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0e0e0e",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    marginVertical: 16,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#ECECEC",
    paddingHorizontal: 8,
  },
  input: {
    width: "90%",
    height: 54,
    maxWidth: "90%",
  },
});
