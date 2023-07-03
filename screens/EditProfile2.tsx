import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const EditProfile2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editProfile2}>
      <View style={[styles.navigationBar, styles.barPosition]}>
        <Text style={styles.pageTitle}>Edit Profile</Text>
        <Image
          style={[styles.statusBarIcon, styles.barPosition]}
          contentFit="cover"
          source={require("../assets/status-bar1.png")}
        />
      </View>
      <View style={[styles.listSearchResultParent, styles.mainButtonPosition]}>
        <View style={styles.listSearchResult}>
          <Text style={[styles.searchResult, styles.saveFlexBox]}>
            Victoria Robertson
          </Text>
        </View>
        <Pressable
          style={styles.listSearchResult}
          onPress={() => navigation.navigate("EditProfile3")}
        >
          <Text style={[styles.searchResult, styles.saveFlexBox]}>
            VictoriaRobertson@gmail.com
          </Text>
        </Pressable>
      </View>
      <Image
        style={[styles.coolicon, styles.cooliconLayout]}
        contentFit="cover"
        source={require("../assets/coolicon1.png")}
      />
      <Image
        style={[styles.coolicon1, styles.cooliconLayout]}
        contentFit="cover"
        source={require("../assets/coolicon.png")}
      />
      <Image
        style={styles.editProfile2Child}
        contentFit="cover"
        source={require("../assets/ellipse-61.png")}
      />
      <Image
        style={styles.editPlusCircleOutline}
        contentFit="cover"
        source={require("../assets/edit--plus-circle-outline.png")}
      />
      <Text style={[styles.save, styles.saveFlexBox]}>Save</Text>
      <View style={[styles.mainButton, styles.mainButtonPosition]}>
        <View style={styles.button}>
          <Text style={[styles.signUp, styles.signUpLayout]}>Save</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  mainButtonPosition: {
    left: "50%",
    position: "absolute",
  },
  saveFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  cooliconLayout: {
    height: 12,
    width: 7,
    position: "absolute",
  },
  signUpLayout: {
    lineHeight: 24,
    fontSize: 16,
  },
  pageTitle: {
    marginLeft: -122,
    fontSize: 20,
    letterSpacing: -1,
    width: 244,
    textAlign: "center",
    color: "#1d232e",
    fontFamily: "Inter_medium",
    fontWeight: "500",
    lineHeight: 28,
    left: "50%",
    top: 52,
    position: "absolute",
  },
  statusBarIcon: {
    width: 375,
    height: 44,
    overflow: "hidden",
  },
  navigationBar: {
    right: 0,
    height: 88,
    backgroundColor: "#fff",
    left: 0,
    top: 0,
  },
  searchResult: {
    fontFamily: "Inter_regular",
    color: "#212529",
    lineHeight: 24,
    fontSize: 16,
    textAlign: "left",
    flex: 1,
  },
  listSearchResult: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#ced4da",
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 12,
  },
  listSearchResultParent: {
    marginLeft: -175,
    top: 221,
    width: 327,
  },
  coolicon: {
    top: 293,
    left: 356,
  },
  coolicon1: {
    top: 59,
    left: 26,
  },
  editProfile2Child: {
    marginTop: -312,
    top: "50%",
    left: 24,
    width: 72,
    height: 72,
    position: "absolute",
  },
  editPlusCircleOutline: {
    height: "2.84%",
    width: "6.15%",
    top: "19.55%",
    right: "75.38%",
    bottom: "77.61%",
    left: "18.46%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  save: {
    marginLeft: 132,
    fontSize: 18,
    width: 50,
    textAlign: "left",
    color: "#1d232e",
    fontFamily: "Inter_medium",
    fontWeight: "500",
    lineHeight: 28,
    top: 52,
    left: "50%",
    position: "absolute",
  },
  signUp: {
    color: "#ced4da",
    letterSpacing: 0,
    lineHeight: 24,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Inter_medium",
    fontWeight: "500",
  },
  button: {
    borderRadius: 8,
    backgroundColor: "#000",
    paddingHorizontal: 32,
    paddingVertical: 16,
    alignItems: "center",
    width: 327,
  },
  mainButton: {
    marginLeft: -169,
    top: 356,
  },
  editProfile2: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default EditProfile2;
