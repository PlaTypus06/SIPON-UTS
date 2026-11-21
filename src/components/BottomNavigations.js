import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import COLOR from "../styles/colors";

import Home from "../screens/Home";
import Explore from "../screens/Explore";
import Upload from "../screens/Upload";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function BottomNavigations() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: COLOR.primary,
        tabBarInactiveTintColor: COLOR.secondary,

        tabBarStyle: {
          backgroundColor: COLOR.background,
          borderTopColor: COLOR.accent,
          height: 90,
          paddingBottom: 8,
          paddingTop: 6,
        },

        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          switch (route.name) {
            case "Game ON!":
              iconName = focused
                ? "game-controller"
                : "game-controller-outline";
              break;

            case "Epic Moments":
              iconName = focused ? "albums" : "albums-outline";
              break;

            case "Upload":
              iconName = focused ? "add-circle" : "add-outline";
              break;

            case "Profile":
              iconName = focused ? "person" : "person-outline";
              break;

            default:
              iconName = "help-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Game ON!" component={Home} />
      <Tab.Screen name="Epic Moments" component={Explore} />
      <Tab.Screen name="Upload" component={Upload} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
