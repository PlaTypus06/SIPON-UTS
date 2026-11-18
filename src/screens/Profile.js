import React from "react";
import COLOR from "../styles/colors";
import { View, Text, StyleSheet, Image } from "react-native";

const Profile = () => {
  return (
    <View style={styles.mainContainer}>
      {/* header */}
      <View style={styles.headerContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://images.pexels.com/photos/6159682/pexels-photo-6159682.jpeg",
          }}></Image>

        <Text style={styles.profileText}>PlaTypus</Text>
        <Text style={styles.profileText2}>@PlaTypus_67</Text>
      </View>

      {/* container */}
      <View style={styles.containerBody}>
        <View style={styles.favGame}>
          <View style={styles.gameIconContainer}>
            <Image
              style={styles.gameIcon}
              source={{
                uri: "https://preview.redd.it/i-made-a-clean-valorant-desktop-icon-v0-buzyn25jzr761.png?width=1000&format=png&auto=webp&s=1bb0aa92646f5f4c06dc3235c47314a8b25095c7",
              }}></Image>
          </View>
          <View style={styles.favGameContainer}>
            <Text style={styles.favGameText}>Valorant</Text>
            <Text style={styles.favGameHour}>Play time: 1,293 Hours</Text>
          </View>
        </View>
        {/* account info */}
        <View style={styles.accountInfoContainer}>
          <View style={styles.accountInfo}>
            <View style={styles.followers}>
              <Text style={styles.followersCount}>67</Text>
              <Text style={styles.followersInfo}>Followers</Text>
            </View>
            <View style={styles.followings}>
              <Text style={styles.followingsCount}>67</Text>
              <Text style={styles.followingsInfo}>Followings</Text>
            </View>
            <View style={styles.post}>
              <Text style={styles.postCount}>2</Text>
              <Text style={styles.postInfo}>Post</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR.surface,
  },

  //header

  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "25%",
    backgroundColor: COLOR.primary,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: COLOR.primary,
    marginTop: 280,
  },

  profileText: {
    marginTop: 5,
    color: COLOR.text,
    fontSize: 20,
    fontWeight: "bold",
  },

  profileText2: {
    color: COLOR.textSecondary,
    fontSize: 12,
  },
  //containerBody
  containerBody: {
    marginTop: 130,
    paddingHorizontal: 10,
    backgroundColor: COLOR.surface,
  },

  //fav game
  favGame: {
    width: "100%",
    borderWidth: 2,
    borderColor: COLOR.border,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  gameIcon: {
    width: 40,
    height: 40,
    margin: 10,
  },

  favGameContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  favGameText: {
    fontSize: 14,
  },

  favGameHour: {
    color: COLOR.textSecondary,
    fontSize: 8,
  },

  //account info
  accountInfoContainer: {
    alignSelf: "stretch",
    margin: 8,
  },

  accountInfo: {
    flexDirection: "row",
    gap: 10,
  },

  followers: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLOR.border,
    borderRadius: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  post: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLOR.border,
    borderRadius: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  followings: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLOR.border,
    borderRadius: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  followersCount: {
    fontWeight: "bold",
    fontSize: 14,
  },

  postCount: {
    fontWeight: "bold",
    fontSize: 14,
  },

  followingsCount: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default Profile;
