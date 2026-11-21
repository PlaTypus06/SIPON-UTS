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
          <Text style={styles.textCon}>You're currenly offline.</Text>

          <Text style={styles.textCon}>Click 'ONLINE' to game ON!</Text>
        </View>
        <View style={styles.onBtnContainer}>
          <Pressable
            onPress={() => navigation.navigate("goOnline")}
            style={styles.onBtn}>
            <Ionicons name="power-outline" color={COLOR.text2} size={18} />
            <Text style={styles.btnText}>ONLINE</Text>
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

  onBtnContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },

  onBtn: {
    flexDirection: "row",
    backgroundColor: COLOR.primary,
    paddingHorizontal: 50,
    paddingVertical: 10,
    gap: 10,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: COLOR.border,
  },

  btnText: {
    color: COLOR.text2,
  },
});

export default Home;
