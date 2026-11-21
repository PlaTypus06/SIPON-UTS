import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomNavigations from "../components/BottomNavigations";
import GoOnline from "../screens/goOnline";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainTabs" component={BottomNavigations} />

      <Stack.Screen name="goOnline" component={GoOnline} />
    </Stack.Navigator>
  );
}
