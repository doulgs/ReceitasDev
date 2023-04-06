import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StackRoutes } from "./stackRoutes";
import { Favorites } from "../pages/Favorites";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true, //Colocar o teclado sobre a TabBar
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000",
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name={focused ? "home" : "bank"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name={focused ? "heart" : "hearto"}
              size={size}
              color={focused ? "#ff4141" : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
