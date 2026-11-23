import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

import COLOR from "../styles/colors";

function GameCard(props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.gambar }} style={styles.gameImage} />

      <View style={styles.cardContent}>
        <Text style={styles.gameName}>{props.nama}</Text>

        <Text style={styles.gameCategory}>{props.kategori}</Text>

        <Text style={styles.playerOnline}>{props.online}</Text>

        <Pressable style={styles.playButton} onPress={props.onPlay}>
          <Text style={styles.playText}>PLAY</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: COLOR.background,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 15,
  },

  gameImage: {
    width: "100%",
    height: 150,
  },

  cardContent: {
    padding: 10,
  },

  gameName: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLOR.text,
  },

  gameCategory: {
    fontSize: 12,
    color: COLOR.secondary,
    marginTop: 5,
    marginBottom: 2,
  },

  playButton: {
    backgroundColor: COLOR.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  playText: {
    color: "white",
    fontWeight: COLOR.text2,
  },

  playerOnline: {
    fontSize: 10,
    color: COLOR.success,
    marginBottom: 2,
  },
});

export default GameCard;
