import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const ChangePassword2 = () => {
  return (
    <View style={styles.changePassword2}>
      <Image
        style={styles.changePassword2Child}
        contentFit="cover"
        source={require("../assets/ellipse-61.png")}
      />
      <Image
        style={styles.changePassword2Child}
        contentFit="cover"
        source={require("../assets/ellipse-61.png")}
      />
      <View style={[styles.navigationBar, styles.barPosition]}>
        <Text style={[styles.pageTitle, styles.signUpTypo]}>
          Change Password
        </Text>
        <Image
          style={[styles.statusBarIcon, styles.barPosition]}
          contentFit="cover"
          source={require("../assets/status-bar1.png")}
        />
      </View>
      <View style={[styles.listSearchResultParent, styles.mainButtonPosition]}>
        <View style={styles.listSearchResult}>
          <Text style={[styles.searchResult, styles.signUpLayout]}>
            •••••••••••••
          </Text>
        </View>
        <View style={styles.listSearchResult}>
          <Text style={[styles.searchResult, styles.signUpLayout]}>
            ••••••••••••••
          </Text>
        </View>
      </View>
      <Image
        style={styles.coolicon}
        contentFit="cover"
        source={require("../assets/coolicon.png")}
      />
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
  signUpTypo: {
    textAlign: "center",
    fontFamily: "Inter_medium",
    fontWeight: "500",
  },
  mainButtonPosition: {
    marginLeft: -175,
    left: "50%",
    position: "absolute",
  },
  signUpLayout: {
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: 16,
  },
  changePassword2Child: {
    marginTop: -312,
    top: "50%",
    left: 24,
    width: 72,
    height: 72,
    position: "absolute",
  },
  pageTitle: {
    marginLeft: -122,
    top: 52,
    fontSize: 20,
    letterSpacing: -1,
    lineHeight: 28,
    color: "#1d232e",
    width: 244,
    left: "50%",
    fontFamily: "Inter_medium",
    fontWeight: "500",
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
  },
  searchResult: {
    fontFamily: "Inter_regular",
    color: "#212529",
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
  signUp: {
    color: "#f8f9fa",
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
    top: 356,
  },
  changePassword2: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ChangePassword2;
