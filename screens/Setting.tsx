import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Setting = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.setting, styles.settingLayout]}>
      <View style={styles.logo2}>
        <Image
          style={[styles.ringIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ring.png")}
        />
      </View>
      <Image
        style={styles.greyCoverIcon}
        contentFit="cover"
        source={require("../assets/grey-cover.png")}
      />
      <View style={[styles.profilemenu, styles.profilemenuPosition]}>
        <View style={[styles.nameBio, styles.nameBioLayout]}>
          <View
            style={[
              styles.wantToSetYourNameWrapper,
              styles.profilemenuPosition,
            ]}
          >
            <Text style={[styles.wantToSet, styles.wantToSetFlexBox]}>
              Want to set your name?
            </Text>
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
              source={require("../assets/arrow--chevron-right.png")}
            />
          </Pressable>
          <View style={styles.listActionItem}>
            <Pressable onPress={() => navigation.navigate("ChangePassword1")}>
              <Text style={styles.profileTypo}>Change password</Text>
            </Pressable>
            <Image
              style={[styles.arrowChevronRight, styles.userLayout]}
              contentFit="cover"
              source={require("../assets/arrow--chevron-right.png")}
            />
          </View>
          <View style={styles.listActionItem}>
            <Text style={styles.profileTypo}>Notification preferences</Text>
            <Image
              style={[styles.arrowChevronRight, styles.userLayout]}
              contentFit="cover"
              source={require("../assets/arrow--chevron-right.png")}
            />
          </View>
          <View style={styles.listActionItem}>
            <Text style={styles.profileTypo}>Log out</Text>
            <Image
              style={[styles.arrowChevronRight, styles.userLayout]}
              contentFit="cover"
              source={require("../assets/arrow--chevron-right.png")}
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
            style={styles.iconLayout1}
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
          source={require("../assets/basic--settings.png")}
        />
        <Image
          style={[styles.iconLockClosed, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-lock-closed.png")}
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
        source={require("../assets/status-bar.png")}
      />
      <View style={styles.message}>
        <View style={styles.message1}>
          <View style={styles.loremIpsumDolorSitAmetCoWrapper}>
            <Text style={[styles.loremIpsumDolor, styles.wantToSetFlexBox]}>
              Hi victoria, got a plan for today?
            </Text>
          </View>
          <Image
            style={styles.tipIcon}
            contentFit="cover"
            source={require("../assets/tip.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuLayout:{
    paddingTop:20,
  },
  settingLayout: {
    height: 844,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  profilemenuPosition: {
    left: 0,
    top: 0,
  },
  nameBioLayout: {
    height: 40,
    position: "absolute",
  },
  wantToSetFlexBox: {
    textAlign: "left",
    color: "#212529",
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
    height: "100%",
    width: "100%",
  },
  logo2: {
    top: 119,
    left: 313,
    width: 50,
    height: 50,
    position: "absolute",
  },
  greyCoverIcon: {
    left: 2,
    width: 390,
    opacity: 0.5,
    top: 0,
    position: "absolute",
    height: 844,
  },
  wantToSet: {
    fontSize: 22,
    letterSpacing: -1,
    lineHeight: 40,
    fontFamily: "Inter_medium",
    fontWeight: "500",
    textAlign: "left",
    color: "#212529",
    alignSelf: "stretch",
  },
  wantToSetYourNameWrapper: {
    width: 327,
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
    paddingHorizontal: 0,
    paddingVertical: 12,
    flexDirection: "row",
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
  iconLayout1: {
    height: "100%",
    width: "100%",
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
  iconLockClosed: {
    height: "2.52%",
    width: "6.21%",
    top: "45.62%",
    right: "84.48%",
    bottom: "51.86%",
    left: "9.31%",
  },
  basicLogOut: {
    top: 479,
    left: 24,
    position: "absolute",
  },
  profilemenu: {
    width: 290,
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
  loremIpsumDolor: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Inter_regular",
    textAlign: "left",
    color: "#212529",
    flex: 1,
  },
  loremIpsumDolorSitAmetCoWrapper: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  tipIcon: {
    width: 10,
    height: 8,
  },
  message1: {
    width: 243,
  },
  message: {
    top: 124,
    left: 358,
    width: 31,
    paddingRight: 107,
    position: "absolute",
  },
  setting: {
    overflow: "hidden",
    width: "100%",
    height: 844,
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Setting;
