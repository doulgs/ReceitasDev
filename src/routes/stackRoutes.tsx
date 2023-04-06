import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { Search } from "../pages/Search";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: "Detalhes da Receita",
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: "Veja o que encontramos",
        }}
      />
    </Stack.Navigator>
  );
}
