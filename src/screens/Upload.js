import React from "react";
import COLOR from "../styles/colors";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.backgrounfGif}
        source={{
          uri: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXdybHdmd2tibjcxNHd3MTZobnJ4MGoyMGhqYThuamo4aHdsenJ4aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/0Qv8WySxVtKIqrAPbv/giphy.gif",
        }}></Image>

      <View style={styles.header}>
        <Text style={styles.headerText}>SIPON</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textCon}>Click here to upload your.</Text>
          <Text style={styles.textCon2}>EPIC MOMENTS.</Text>
        </View>
        <View style={styles.onBtnContainer}>
          <Pressable style={styles.onBtn}>
            <Ionicons name="add-circle-outline" color={COLOR.text2} size={80} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  backgrounfGif: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  header: {
    backgroundColor: COLOR.primary,
    width: 180,
    overflow: "visible",
    marginBottom: 20,
    padding: 6,
    borderRadius: 3,
  },

  headerText: {
    fontFamily: "ScienceGothic",
    fontSize: 18,
    color: COLOR.background,
    textAlign: "center",
    alignSelf: "center",
    includeFontPadding: true,
    width: "100%",
    paddingHorizontal: 20,
  },

  container: {
    backgroundColor: COLOR.background,
    padding: 40,
    paddingTop: 120,
    paddingBottom: 120,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: COLOR.primary,
  },

  textContainer: {
    textAlign: "center",
    alignItems: "center",
  },

  textCon: {
    fontSize: 18,
    color: COLOR.text,
  },

  textCon2: {
    fontSize: 20,
    color: COLOR.primary,
    fontWeight: "bold",
  },

  onBtnContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },

  onBtn: {
    backgroundColor: COLOR.primary,
    padding: 10,
    gap: 10,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: COLOR.border,
    borderRadius: 80,
  },

  btnText: {
    color: COLOR.text2,
  },
});

export default Home;
