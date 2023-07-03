import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Setting1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.setting, styles.settingLayout]}>
      <View style={[styles.profilemenu, styles.profilemenuPosition]}>
        <View style={[styles.nameBio, styles.nameBioLayout]}>
          <View
            style={[
              styles.wantToSetYourNameWrapper,
              styles.profilemenuPosition,
            ]}
          >
            <Text style={styles.wantToSet}>Want to set your name?</Text>
          </View>
        </View>
        <View style={styles.listActionItemParent}>
          <Pressable
            style={styles.listActionItem}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={styles.profileTypo}>Profile</Text>
            <Image
              style={[styles.arrowChevronRight, styles.userLayout]}
              contentFit="cover"
              source={require("../assets/arrow--chevron-right1.png")}
            />
          </Pressable>
          <View style={styles.listActionItem}>
            <Pressable onPress={() => navigation.navigate("ChangePassword1")}>
              <Text style={styles.profileTypo}>Change password</Text>
            </Pressable>
            <Image
              style={[styles.arrowChevronRight, styles.userLayout]}
              contentFit="cover"
              source={require("../assets/arrow--chevron-right1.png")}
            />
          </View>
          <View style={styles.listActionItem}>
            <Text style={styles.profileTypo}>Notification preferences</Text>
            <Image
              style={[styles.arrowChevronRight, styles.userLayout]}
              contentFit="cover"
              source={require("../assets/arrow--chevron-right1.png")}
            />
          </View>
          <View style={styles.listActionItem}>
            <Text style={styles.profileTypo}>Log out</Text>
            <Image
              style={[styles.arrowChevronRight, styles.userLayout]}
              contentFit="cover"
              source={require("../assets/arrow--chevron-right1.png")}
            />
          </View>
        </View>
        <Image
          style={[styles.userUser, styles.userLayout]}
          contentFit="cover"
          source={require("../assets/user--user.png")}
        />
        <Pressable
          style={styles.coolicon}
          onPress={() => navigation.navigate("Homepage")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/coolicon.png")}
          />
        </Pressable>
        <Image
          style={styles.profilemenuChild}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.basicSettings, styles.userLayout]}
          contentFit="cover"
          source={require("../assets/basic--settings1.png")}
        />
        <Image
          style={[styles.basicLogOut, styles.userLayout]}
          contentFit="cover"
          source={require("../assets/basic--log-out.png")}
        />
      </View>
      <Image
        style={[styles.statusBarIcon, styles.nameBioLayout]}
        contentFit="cover"
        source={require("../assets/status-bar2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  settingLayout: {
    height: 844,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  profilemenuPosition: {
    left: 0,
    top: 0,
  },
  nameBioLayout: {
    height: 40,
    position: "absolute",
  },
  userLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  ringIcon: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  logo2: {
    top: 119,
    left: 315,
    width: 50,
    height: 50,
    position: "absolute",
  },
  greyCoverIcon: {
    left: 22,
    width: 390,
    opacity: 0.5,
    top: 0,
    position: "absolute",
    height: 844,
  },
  wantToSet: {
    alignSelf: "stretch",
    fontSize: 22,
    letterSpacing: -1,
    lineHeight: 40,
    textAlign: "left",
    color: "#212529",
    fontFamily: "Inter_medium",
    fontWeight: "500",
  },
  wantToSetYourNameWrapper: {
    width: 400,
    position: "absolute",
  },
  nameBio: {
    top: 186,
    width: 327,
    left: 24,
  },
  profileTypo: {
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: 16,
    textAlign: "left",
    color: "#212529",
    fontFamily: "Inter_medium",
    fontWeight: "500",
    flex: 1,
  },
  arrowChevronRight: {
    marginLeft: 16,
  },
  listActionItem: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 12,
    width: 327,
  },
  listActionItemParent: {
    top: 323,
    left: 66,
    width: 205,
    position: "absolute",
  },
  userUser: {
    top: 336,
    left: 24,
    position: "absolute",
  },
  coolicon: {
    left: 26,
    top: 59,
    width: 7,
    height: 12,
    position: "absolute",
  },
  profilemenuChild: {
    marginTop: -313,
    top: "50%",
    left: 23,
    width: 74,
    height: 74,
    position: "absolute",
  },
  basicSettings: {
    top: 431,
    left: 24,
    position: "absolute",
  },
  basicLogOut: {
    top: 479,
    left: 24,
    position: "absolute",
  },
  profilemenu: {
    width: 393,
    position: "absolute",
    overflow: "hidden",
    height: 844,
    backgroundColor: "#fff",
    left: 0,
  },
  statusBarIcon: {
    width: 385,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  setting: {
    overflow: "hidden",
    width: "100%",
    flex: 1,
    height: 844,
    backgroundColor: "#fff",
  },
});

export default Setting1;
