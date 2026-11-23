import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import COLOR from "../styles/colors";

function Explore() {
  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={["top", "left", "right", "bottom"]}>
      <View style={styles.mainContainer}>
        <View styles={styles.headerContainer}>
          <Text style={styles.headerText}>SIPON</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: "center",
  },

  headerText: {
    flex: 1,
    alignSelf: "center",
    backgroundColors: COLOR.error,
    borderWidth: 1,
  },
});
export default Explore;
