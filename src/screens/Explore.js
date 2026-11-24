import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import COLOR from "../styles/colors";
import MomentsCard from "../components/MomentsCard";

function Explore() {
  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={["top", "left", "right", "bottom"]}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Epic Moments</Text>
        </View>

        <ScrollView
          style={styles.postCard}
          contentContainerStyle={{ paddingBottom: 80 }}
          showsVerticalScrollIndicator={false}>
          <MomentsCard
            username="NightGuy_67"
            avatar="https://images.pexels.com/photos/7823/selfie.jpg"
            gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3L_VIny3WKS92lf7qDxrLaq5IqTDaXigSueFmMWYI2USeRLL7ZZXTow&s=10"
            caption="Beautiful city lezoooo"
            likeCount={923}
          />

          <MomentsCard
            username="HashsinginSlasher6767"
            avatar="https://images.pexels.com/photos/17158732/pexels-photo-17158732.jpeg"
            gambar="https://substackcdn.com/image/fetch/$s_!qr0b!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd703de5d-4497-4fad-bf62-fa03821a2e75_1920x1080.jpeg"
            caption="Testing new Items !!!"
            likeCount={2789}
          />

          <MomentsCard
            username="NightNinja007"
            avatar="https://images.pexels.com/photos/5971305/pexels-photo-5971305.jpeg"
            gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPT9lfhXfsd2WY6Y8RdJCSMHN53lMKgSfnri8R0stp3DsPQtiMlNLC0t-Q&s=10"
            caption="With the boys from SIPON"
            likeCount={973}
          />

          <MomentsCard
            username="Shooter_Master"
            avatar="https://images.pexels.com/photos/36845322/pexels-photo-36845322.jpeg"
            gambar="https://sfx.thelazy.net/media/medthumb/2020/09/27/PLAYERUNKNOWNS_BATTLEGROUNDS_Screenshot_2018.01.16_-_11.39.31.74.png"
            caption="Good morning from MIRAMAR"
            likeCount={67}
          />

          <MomentsCard
            username="Xx_Killua_xX"
            avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxvUnB5Lya27BOAdkkjoLTyYvenXqfqKSej9jtoPuhpA&s"
            gambar="https://cdn.idcgames.com/storage/image/1099/apex-legends-screen-2/default.jpg"
            caption="Watching from above..."
            likeCount={829}
          />

          <MomentsCard
            username="Jason_Voorhees_6969"
            avatar="https://static.wikia.nocookie.net/moviedatabase/images/3/33/Jason_Voorhees_002.jpg/revision/latest?cb=20140509185149"
            gambar="https://i.imgur.com/EI3YmAFh.jpg"
            caption="I AM HERE"
            likeCount={928}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLOR.background,
  },

  mainContainer: {
    flex: 1,
  },

  header: {
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    backgroundColor: COLOR.primary,
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "ScienceGothic",
    color: COLOR.text2,
    fontSize: 18,
    height: 50,
  },
});
export default Explore;
