import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

import COLOR from "../styles/colors";

function MomentsCard(props) {
  return (
    <View style={styles.card}>
      {/* Header Post */}
      <View style={styles.headerPost}>
        <Image source={{ uri: props.avatar }} style={styles.avatar} />

        <Text style={styles.nickname}>{props.username}</Text>
      </View>

      {/* Post Image */}
      <Image source={{ uri: props.gambar }} style={styles.gameImage} />

      {/* Card Content */}
      <View style={styles.cardContent}>
        <Text style={styles.caption}>{props.caption}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 12,
    overflow: "hidden",
  },

  headerPost: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },

  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },

  nickname: {
    marginLeft: 10,
    color: COLOR.text,
    fontWeight: "bold",
  },

  gameImage: {
    width: "100%",
    height: 250,
  },

  cardContent: {
    padding: 12,
  },

  caption: {
    color: COLOR.text,
  },
});

export default MomentsCard;
