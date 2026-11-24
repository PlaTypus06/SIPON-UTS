import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import COLOR from "../styles/colors";
import { Ionicons } from "@expo/vector-icons";

function MomentsCard(props) {
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(props.likeCount ?? 0);
  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setIsLiked(true);
    }
  };

  return (
    <View style={styles.card}>
      {/* Header Post */}
      <View style={styles.headerPost}>
        <Image source={{ uri: props.avatar }} style={styles.avatar} />

        <Text style={styles.nickname}>{props.username}</Text>
      </View>

      {/* Post Image */}
      <Image source={{ uri: props.gambar }} style={styles.gameImage} />

      {/* like komen share */}
      <View style={styles.postBtn}>
        <Pressable
          flexDirection={"row"}
          style={styles.likeBtn}
          onPress={handleLike}>
          <Ionicons
            name={isLiked ? "heart" : "heart-outline"}
            size={22}
            color={isLiked ? COLOR.primary : COLOR.text}
          />
          <Text style={styles.likeCount}>{likeCount}</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Comments")}>
          <Ionicons name="chatbubble-outline" size={22} color={COLOR.text} />
        </Pressable>

        <Pressable>
          <Ionicons name="paper-plane-outline" size={22} color={COLOR.text} />
        </Pressable>
      </View>

      {/* Card Content */}
      <View style={styles.cardContent}>
        <Text style={styles.nicknameCaption}>{props.username}</Text>
        <Text style={styles.caption}>{props.caption}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
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

  postBtn: {
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },

  cardContent: {
    flexDirection: "row",
    gap: 4,
  },

  nicknameCaption: {
    fontWeight: "bold",
  },

  caption: {
    color: COLOR.text,
  },
});

export default MomentsCard;
