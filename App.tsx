import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";
import { StackRoutes } from "./src/routes/stackRoutes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <StackRoutes />
    </NavigationContainer>
  );
}
