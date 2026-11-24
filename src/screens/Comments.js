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
import CommentCard from "../components/commentCard";

function Comments() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={COLOR.text2} />
        </Pressable>

        <Text style={styles.title}>Comments</Text>
      </View>

      {/* Comment List */}
      <ScrollView style={styles.commentCardContainer}>
        <CommentCard
          avatar="https://images.pexels.com/photos/38247284/pexels-photo-38247284.jpeg"
          username="JinX_Rawr"
          comment="Nice Pict bro, Call me next time u play"
        />

        <CommentCard
          avatar="https://images.pexels.com/photos/16300514/pexels-photo-16300514.jpeg"
          username="BrutalSlasher6969"
          comment="Mine is better, get good kid"
        />

        <CommentCard
          avatar="https://images.pexels.com/photos/7915259/pexels-photo-7915259.jpeg"
          username="Apple_Candy"
          comment="Can i join?"
        />
      </ScrollView>

      {/* comment input */}
      <View style={styles.inputComment}>
        <View style={styles.inputCommentContainer}>
          <TextInput style={styles.searchInput} placeholder="Comments..." />
          <Pressable style={styles.commentBtn}>
            <Ionicons
              name="paper-plane-outline"
              size={24}
              color={COLOR.primary}
            />
          </Pressable>
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

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 20,
    backgroundColor: COLOR.primary,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLOR.text2,
    fontFamily: "ScienceGothic",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    color: COLOR.accent,
  },

  commentCardContainer: {
    flex: 1,
  },

  inputComment: {},

  inputCommentContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLOR.accent,
    borderRadius: 30,
    margin: 8,
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: "flex-end",
  },

  commentBtn: {
    padding: 10,
  },

  searchInput: {
    flex: 1,
    color: COLOR.text,
  },
});

export default Comments;
