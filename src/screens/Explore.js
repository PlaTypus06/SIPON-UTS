import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import COLOR from "../styles/colors";
import MomentsCard from "../components/MomentsCard";

function Explore() {
  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={["top", "left", "right", "bottom"]}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Epic Moments</Text>
        </View>

        <ScrollView
          style={styles.postCard}
          contentContainerStyle={{ paddingBottom: 80 }}
          showsVerticalScrollIndicator={false}>
          <MomentsCard
            username="NightGuy_67"
            avatar="https://images.pexels.com/photos/7823/selfie.jpg"
            gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3L_VIny3WKS92lf7qDxrLaq5IqTDaXigSueFmMWYI2USeRLL7ZZXTow&s=10"
            caption="Beautiful city lezoooo"
          />

          <MomentsCard
            username="NightGuy_67"
            avatar="https://images.pexels.com/photos/7823/selfie.jpg"
            gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3L_VIny3WKS92lf7qDxrLaq5IqTDaXigSueFmMWYI2USeRLL7ZZXTow&s=10"
            caption="Beautiful city lezoooo"
          />

          <MomentsCard
            username="NightGuy_67"
            avatar="https://images.pexels.com/photos/7823/selfie.jpg"
            gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3L_VIny3WKS92lf7qDxrLaq5IqTDaXigSueFmMWYI2USeRLL7ZZXTow&s=10"
            caption="Beautiful city lezoooo"
          />

          <MomentsCard
            username="NightGuy_67"
            avatar="https://images.pexels.com/photos/7823/selfie.jpg"
            gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3L_VIny3WKS92lf7qDxrLaq5IqTDaXigSueFmMWYI2USeRLL7ZZXTow&s=10"
            caption="Beautiful city lezoooo"
          />

          <MomentsCard
            username="NightGuy_67"
            avatar="https://images.pexels.com/photos/7823/selfie.jpg"
            gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3L_VIny3WKS92lf7qDxrLaq5IqTDaXigSueFmMWYI2USeRLL7ZZXTow&s=10"
            caption="Beautiful city lezoooo"
          />

          <MomentsCard
            username="NightGuy_67"
            avatar="https://images.pexels.com/photos/7823/selfie.jpg"
            gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3L_VIny3WKS92lf7qDxrLaq5IqTDaXigSueFmMWYI2USeRLL7ZZXTow&s=10"
            caption="Beautiful city lezoooo"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLOR.background,
  },

  mainContainer: {
    flex: 1,
  },

  header: {
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    backgroundColor: COLOR.primary,
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "ScienceGothic",
    color: COLOR.text2,
    fontSize: 18,
    height: 50,
  },
});
export default Explore;
