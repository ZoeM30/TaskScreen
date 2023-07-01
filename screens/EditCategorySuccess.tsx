import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const EditCategorySuccess = () => {
  return (
    <View style={styles.editCategorySuccess}>
      <View style={[styles.navigationBar, styles.barPosition]}>
        <Text style={[styles.pageTitle, styles.signUpTypo1]}>Edit Task</Text>
        <Image
          style={[styles.statusBarIcon, styles.barPosition]}
          contentFit="cover"
          source={require("../assets/status-bar1.png")}
        />
      </View>
      <Image
        style={styles.coolicon}
        contentFit="cover"
        source={require("../assets/coolicon.png")}
      />
      <View style={styles.editCategorySuccessChild} />
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.startTime, styles.timeTypo]}>Start Time</Text>
      <Text style={[styles.description, styles.timeTypo]}>Description</Text>
      <Text style={[styles.category, styles.timeTypo]}>Category</Text>
      <Text style={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet, er adipiscing elit, sed dianummy nibh
        euismod
      </Text>
      <Text style={[styles.dueTime, styles.timeTypo]}>Due Time</Text>
      <Image
        style={[styles.editCategorySuccessItem, styles.editLayout]}
        contentFit="cover"
        source={require("../assets/vector-13.png")}
      />
      <Image
        style={[styles.editCategorySuccessInner, styles.editLayout]}
        contentFit="cover"
        source={require("../assets/vector-13.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.editLayout]}
        contentFit="cover"
        source={require("../assets/vector-13.png")}
      />
      <Text style={[styles.houseCleaning, styles.jun292023Typo]}>
        House Cleaning
      </Text>
      <Text style={[styles.date, styles.nameTypo]}>Date</Text>
      <Image
        style={[styles.editCategorySuccessChild1, styles.editLayout]}
        contentFit="cover"
        source={require("../assets/vector-13.png")}
      />
      <Text style={[styles.jun292023, styles.jun292023Typo]}>Jun 29, 2023</Text>
      <Text style={[styles.text, styles.textTypo]}>13:22</Text>
      <Text style={[styles.text1, styles.textTypo]}>14:22</Text>
      <Text style={[styles.notification, styles.timeTypo]}>Notification</Text>
      <View style={styles.mainButton}>
        <View style={styles.button}>
          <Text style={[styles.signUp, styles.signUpTypo]}>Save</Text>
        </View>
      </View>
      <View style={styles.taskTag}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupShadowBox]} />
          <Text style={[styles.work, styles.workTypo]}>Work</Text>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={[styles.groupItem, styles.groupShadowBox]} />
          <Text style={[styles.work, styles.workTypo]}>Home</Text>
        </View>
      </View>
      <View style={styles.rectangleContainer}>
        <View style={[styles.groupInner, styles.groupShadowBox]} />
        <Text style={[styles.meditation, styles.signUpTypo]}>Meditation</Text>
      </View>
      <Text style={[styles.home1, styles.workTypo]}>Home</Text>
      <Image
        style={[styles.notificationIcon, styles.groupViewLayout]}
        contentFit="cover"
        source={require("../assets/notification.png")}
      />
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={styles.rectangleView} />
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
  signUpTypo1: {
    textAlign: "center",
    fontFamily: FontFamily.bodyBoldBody2Bold,
    fontWeight: "500",
  },
  nameTypo: {
    width: 66,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 40,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    left: 26,
    color: Color.whitesmoke_100,
    letterSpacing: -1,
    position: "absolute",
  },
  timeTypo: {
    width: 99,
    color: Color.placeholder,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 40,
    letterSpacing: -1,
    fontSize: FontSize.headingHeading4_size,
    position: "absolute",
  },
  editLayout: {
    height: 1,
    width: 332,
    left: 29,
    position: "absolute",
  },
  jun292023Typo: {
    fontSize: FontSize.headingHeading2_size,
    width: 327,
    textAlign: "left",
    lineHeight: 40,
    left: 26,
    color: Color.whitesmoke_100,
    fontFamily: FontFamily.bodyBoldBody2Bold,
    fontWeight: "500",
    letterSpacing: -1,
    position: "absolute",
  },
  textTypo: {
    width: 71,
    color: Color.mainText,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    top: 360,
    textAlign: "left",
    lineHeight: 40,
    letterSpacing: -1,
    position: "absolute",
  },
  signUpTypo: {
    fontSize: FontSize.bodyBoldBody2Bold_size,
    color: Color.whitesmoke_100,
  },
  groupShadowBox: {
    elevation: 25,
    shadowRadius: 25,
    shadowColor: "rgba(226, 226, 226, 0.25)",
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -7,
    },
    borderRadius: Border.br_5xs,
    position: "absolute",
    width: "100%",
  },
  workTypo: {
    fontFamily: FontFamily.bodyRegularBody3Regular,
    fontSize: FontSize.bodyBoldBody2Bold_size,
    color: Color.buttonBg,
    textAlign: "left",
    position: "absolute",
  },
  groupViewLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  pageTitle: {
    marginLeft: -122,
    top: 52,
    lineHeight: 28,
    width: 244,
    color: Color.whitesmoke_100,
    letterSpacing: -1,
    fontSize: FontSize.headingHeading4_size,
    textAlign: "center",
    fontFamily: FontFamily.bodyBoldBody2Bold,
    fontWeight: "500",
    left: "50%",
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
    backgroundColor: Color.buttonBg,
  },
  coolicon: {
    top: 59,
    width: 7,
    height: 12,
    left: 26,
    position: "absolute",
  },
  editCategorySuccessChild: {
    top: 316,
    backgroundColor: Color.white100,
    shadowColor: "rgba(0, 0, 0, 0.02)",
    shadowRadius: 23,
    elevation: 23,
    width: 390,
    height: 617,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -7,
    },
    borderRadius: Border.br_5xs,
    left: 0,
    position: "absolute",
  },
  name: {
    top: 97,
  },
  startTime: {
    left: 43,
    color: Color.placeholder,
    top: 325,
  },
  description: {
    top: 413,
    left: 43,
    color: Color.placeholder,
  },
  category: {
    top: 598,
    left: 43,
    color: Color.placeholder,
  },
  loremIpsumDolor: {
    top: 478,
    fontFamily: FontFamily.poppinsRegular,
    width: 301,
    height: 160,
    color: Color.buttonBg,
    left: 43,
    textAlign: "left",
    fontSize: FontSize.headingHeading4_size,
    position: "absolute",
  },
  dueTime: {
    left: 166,
    top: 325,
  },
  editCategorySuccessItem: {
    top: 187,
  },
  editCategorySuccessInner: {
    top: 413,
  },
  vectorIcon: {
    top: 586,
  },
  houseCleaning: {
    top: 142,
    width: 327,
  },
  date: {
    top: 202,
  },
  editCategorySuccessChild1: {
    top: 292,
  },
  jun292023: {
    top: 247,
    width: 327,
  },
  text: {
    left: 57,
  },
  text1: {
    left: 175,
  },
  notification: {
    left: 274,
    top: 325,
  },
  signUp: {
    letterSpacing: 0,
    lineHeight: 24,
    textAlign: "center",
    fontFamily: FontFamily.bodyBoldBody2Bold,
    fontWeight: "500",
    fontSize: FontSize.bodyBoldBody2Bold_size,
  },
  button: {
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    width: 327,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.buttonBg,
  },
  mainButton: {
    marginLeft: -161,
    top: 727,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.buttonTextUnselected,
    shadowRadius: 25,
    shadowColor: "rgba(226, 226, 226, 0.25)",
  },
  work: {
    height: "33.43%",
    width: "47%",
    left: "27%",
    top: "31.2%",
  },
  rectangleParent: {
    right: "53.05%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    width: "46.95%",
    height: "100%",
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.buttonTextUnselected,
    shadowRadius: 25,
    shadowColor: "rgba(226, 226, 226, 0.25)",
  },
  rectangleGroup: {
    left: "53.05%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    width: "46.95%",
    height: "100%",
    position: "absolute",
  },
  taskTag: {
    top: 652,
    width: 213,
    height: 45,
    left: 29,
    position: "absolute",
  },
  groupInner: {
    backgroundColor: Color.buttonBg,
  },
  meditation: {
    left: "10%",
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    top: "31.2%",
    textAlign: "left",
    fontSize: FontSize.bodyBoldBody2Bold_size,
    position: "absolute",
  },
  rectangleContainer: {
    height: "5.32%",
    width: "25.64%",
    top: "77.25%",
    right: "9.49%",
    bottom: "17.43%",
    left: "64.87%",
    position: "absolute",
  },
  home1: {
    height: "1.78%",
    width: "12.05%",
    top: "1.66%",
    left: "6.92%",
  },
  notificationIcon: {
    top: 366,
    left: 303,
  },
  rectangleView: {
    top: -1,
    left: -1,
    borderRadius: Border.br_10xs,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 26,
    height: 26,
    position: "absolute",
  },
  groupView: {
    top: 380,
    left: 415,
  },
  editCategorySuccess: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.buttonBg,
  },
});

export default EditCategorySuccess;
