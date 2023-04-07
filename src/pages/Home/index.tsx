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
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { FoodsProps } from "../../interfaces/IntFoods";
import { FoodList } from "../../components/FoodList";

import { Text as MotiText } from "moti";

const statusBarHeight = StatusBar.currentHeight;

export function Home() {
  const navigation = useNavigation();
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
    if (!inputValue) return;

    let input = inputValue;
    setInputValue("");
    navigation.navigate("Search", { name: input });
  }
  return (
    <SafeAreaView style={styles.container}>
      <Logo />

      <MotiText
        style={styles.title}
        from={{
          opacity: 0,
          translateY: 16,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{
          delay: 100,
          type: "timing",
          duration: 650,
        }}
      >
        Encontre a receita {`\n`}que combina com voce
      </MotiText>

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
