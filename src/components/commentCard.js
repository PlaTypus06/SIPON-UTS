import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import COLOR from "../styles/colors";

function CommentCard({ avatar, username, comment, time }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />

      <View style={styles.commentContent}>
        <View style={styles.commentHeader}>
          <Text style={styles.username}>{username}</Text>
        </View>

        <Text style={styles.comment}>{comment}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 12,
    gap: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  commentContent: {
    flex: 1,
  },
  commentHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },
  username: {
    color: COLOR.text,
    fontWeight: "bold",
    fontSize: 14,
  },
  time: {
    color: COLOR.text2,
    fontSize: 11,
  },
  comment: {
    color: COLOR.text,
    fontSize: 13,
    lineHeight: 19,
  },
});

export default CommentCard;
