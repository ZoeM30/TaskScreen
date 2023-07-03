import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddPhoto = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addPhoto}>
      <Image
        style={styles.navigationBarIcon}
        contentFit="cover"
        source={require("../assets/navigation-bar.png")}
      />
      <Image
        style={styles.addPhotoChild}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Pressable
        style={styles.savePosition}
        onPress={() => navigation.navigate("EditProfile2")}
      >
        <Text style={[styles.save1, styles.save1Typo]}>Save</Text>
      </Pressable>
      <Text style={[styles.cancel, styles.save1Typo]}>Cancel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  save1Typo: {
    textAlign: "left",
    color: "#1d232e",
    fontFamily: "Inter_medium",
    fontWeight: "500",
    lineHeight: 28,
    letterSpacing: 0,
    fontSize: 18,
  },
  navigationBarIcon: {
    top: 0,
    right: 0,
    left: 0,
    maxWidth: "100%",
    height: 88,
    position: "absolute",
    overflow: "hidden",
  },
  addPhotoChild: {
    marginTop: -126,
    top: "50%",
    left: 48,
    width: 294,
    height: 294,
    position: "absolute",
  },
  save1: {
    marginLeft: 122,
    width: 50,
  },
  savePosition: {
    top: 763,
    left: "50%",
    position: "absolute",
  },
  cancel: {
    marginLeft: -155,
    width: 67,
    top: 763,
    left: "50%",
    position: "absolute",
  },
  addPhoto: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AddPhoto;
