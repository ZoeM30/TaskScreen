import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const EditProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editProfile}>
      <View style={[styles.navigationBar, styles.barPosition]}>
        <Text style={[styles.pageTitle, styles.pageTitlePosition]}>
          Edit Profile
        </Text>
        <Image
          style={[styles.statusBarIcon, styles.barPosition]}
          contentFit="cover"
          source={require("../assets/status-bar1.png")}
        />
      </View>
      <View style={[styles.listSearchResultParent, styles.pageTitlePosition]}>
        <View style={styles.listSearchResult}>
          <Text style={[styles.searchResult, styles.searchTypo]}>Name</Text>
        </View>
        <View style={styles.listSearchResult}>
          <Text style={[styles.searchResult1, styles.searchTypo]}>
            VictoriaRobertson@gmail.com
          </Text>
        </View>
      </View>
      <Image
        style={styles.coolicon}
        contentFit="cover"
        source={require("../assets/coolicon.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("AddPhoto")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
      </Pressable>
      <Image
        style={styles.editPlusCircleOutline}
        contentFit="cover"
        source={require("../assets/edit--plus-circle-outline.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  pageTitlePosition: {
    left: "50%",
    position: "absolute",
  },
  searchTypo: {
    textAlign: "left",
    fontFamily: "Inter_regular",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: 16,
    flex: 1,
  },
  pageTitle: {
    marginLeft: -122,
    top: 52,
    fontSize: 20,
    letterSpacing: -1,
    lineHeight: 28,
    fontWeight: "500",
    fontFamily: "Inter_medium",
    color: "#1d232e",
    textAlign: "center",
    width: 244,
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
    color: "#adb5bd",
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
  searchResult1: {
    color: "#212529",
  },
  listSearchResultParent: {
    marginLeft: -175,
    top: 221,
    width: 327,
  },
  coolicon: {
    top: 59,
    left: 26,
    width: 7,
    height: 12,
    position: "absolute",
  },
  icon: {
    marginTop: -313,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 23,
    top: "50%",
    width: 74,
    height: 74,
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
  editProfile: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default EditProfile;
