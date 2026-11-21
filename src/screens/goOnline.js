import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import COLOR from "../styles/colors";

export default function GoOnline() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color={COLOR.text2} />
          </Pressable>

          <Text style={styles.headerText}>GO ONLINE</Text>
        </View>

        {/* CONTENT */}
        <View style={styles.mainContentContainer}>
          {/* searching section */}
          <View style={styles.searchSection}>
            <View style={styles.searchInputContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search games..."
              />
            </View>

            <Pressable style={styles.searchBtn}>
              <Ionicons name="search" size={24} />
            </Pressable>
          </View>

          {/* category section */}
          <ScrollView
            style={styles.categoryContainer}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <Text style={styles.category}>Action</Text>
            <Text style={styles.category}>Adventure</Text>
            <Text style={styles.category}>Battle Royale</Text>
            <Text style={styles.category}>Fighting</Text>
            <Text style={styles.category}>Horror</Text>
            <Text style={styles.category}>MMORPG</Text>
            <Text style={styles.category}>Moba</Text>
            <Text style={styles.category}>Racing</Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLOR.background,
  },

  container: {
    flex: 1,
    backgroundColor: COLOR.background,
  },

  mainContentContainer: {
    margin: 10,
  },

  searchSection: {
    flexDirection: "row",
  },

  searchInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 2,
    padding: 8,
  },

  searchBtn: {
    backgroundColor: COLOR.secondary,
    padding: 10,
    borderRadius: 5,
    color: COLOR.accent,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLOR.primary,
  },

  backBtn: {
    padding: 5,
  },

  headerText: {
    fontFamily: "ScienceGothic",
    fontSize: 20,
    color: COLOR.text2,
    marginLeft: 15,
  },

  categoryContainer: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
  },

  category: {
    backgroundColor: COLOR.secondary,
    color: "white",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 7,
    marginBottom: 5,
  },
});
