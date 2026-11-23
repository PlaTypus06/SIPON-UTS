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
import GameCard from "../components/gameCard";

function GoOnline() {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={["top", "left", "right", "bottom"]}>
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
            contentContainerStyle={{ alignItems: "center", gap: 1 }}
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

          {/* games card section */}
          <ScrollView
            style={styles.gamesContainer}
            contentContainerStyle={{ paddingBottom: 300 }}
            showsVerticalScrollIndicator={false}>
            <View style={styles.gameRow}>
              <GameCard
                nama="Valorant"
                kategori="FPS · Tactical"
                online="Player Online: 10.763"
                gambar="https://sm.ign.com/ign_nordic/cover/v/valorant/valorant_w15j.jpg"
                onPlay={() => console.log("Play Valorant")}
              />

              <GameCard
                nama="Counter-Strike 2"
                kategori="FPS · Competitive"
                online="Player Online: 8.908"
                gambar="https://assets-prd.ignimgs.com/2023/03/22/keyart-wide-1-1679503853654-1679505306655.jpeg"
                onPlay={() => console.log("Play CS2")}
              />

              <GameCard
                nama="Dota 2"
                kategori="MOBA · RPG"
                online="4.802"
                gambar="https://asset.kompas.com/crops/1fToumhimmezgixQSRZppPKwDDk=/0x0:1000x667/1200x800/data/photo/2017/08/12/3514773262.jpg"
                onPlay={() => console.log("Play Dota 2")}
              />

              <GameCard
                nama="Rainbow 6 Siege"
                kategori="FPS · CQB"
                online="6.038"
                gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZlaW7Xi7z-cKmGxlRQ8JU_NmeJw703-n3yHRAQ2qq8FtHC_7LyUHTLtb&s=10"
                onPlay={() => console.log("Play R6S")}
              />

              <GameCard
                nama="Apex Legends"
                kategori="FPS · Battle Royale"
                online="9.120"
                gambar="https://store-images.s-microsoft.com/image/apps.17255.71371076658790719.4cfe814e-e6c9-411d-9572-4cef7851d6d4.298c6f14-8b6b-4173-92f3-0b826a24a74f"
                onPlay={() => console.log("Play Apex Legends")}
              />

              <GameCard
                nama="PlayerUnkwon's Battleground"
                kategori="Battle Royale · Adventure"
                online="7.309"
                gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBWsonbM0ydRreTK36rQ5k4G7Pj0lY1iJJmxOC2kRHRQ&s=10"
                onPlay={() => console.log("Play PUBG")}
              />

              <GameCard
                nama="Dead By Daylight"
                kategori="Horror · Action"
                online="10.379"
                gambar="https://i.guim.co.uk/img/media/abbd059006d8c8af031eda8ba5d1fb539965c0f7/82_0_1218_731/master/1218.png?width=1200&height=900&quality=85&auto=format&fit=crop&s=b7614c01ad2e475cc846c403894461be"
                onPlay={() => console.log("Play DBD")}
              />

              <GameCard
                nama="ROBLOX"
                kategori="Adventure · Action · Horror · Sandbox"
                online="20.419"
                gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRecghjtnj_R2oloxQ6h6ZDrGEZPdIO36V1fj4NY9_t7q300HLC2nS6VVYK&s=10"
                onPlay={() => console.log("Play ROBLOX")}
              />
            </View>
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
    flex: 1,
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
    flexGrow: 0,
    height: 50,
  },

  category: {
    backgroundColor: COLOR.secondary,
    color: COLOR.text2,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 7,
    marginBottom: 5,
    marginTop: 5,
  },

  gamesContainer: {
    flex: 1,
    marginTop: 5,
  },

  gameRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default GoOnline;
