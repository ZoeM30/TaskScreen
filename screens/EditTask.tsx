import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const EditTask = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editTask}>
      <View style={[styles.navigationBar, styles.barPosition]}>
        <Text style={[styles.pageTitle, styles.saveTypo]}>Edit Task</Text>
        <Image
          style={[styles.statusBarIcon, styles.barPosition]}
          contentFit="cover"
          source={require("../assets/status-bar.png")}
        />
      </View>
      <Image
        style={styles.coolicon}
        contentFit="cover"
        source={require("../assets/coolicon.png")}
      />
      <View style={styles.editTaskChild} />
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.startTime, styles.timeTypo]}>Start Time</Text>
      <Text style={[styles.description, styles.timeTypo]}>Description</Text>
      <Text style={[styles.category, styles.timeTypo]}>Category</Text>
      <Text style={[styles.loremIpsumDolor, styles.workClr]}>
        Lorem ipsum dolor sit amet, er adipiscing elit, sed dianummy nibh
        euismod
      </Text>
      <Text style={[styles.dueTime, styles.timeTypo]}>Due Time</Text>
      <Image
        style={[styles.editTaskItem, styles.editLayout]}
        contentFit="cover"
        source={require("../assets/vector-13.png")}
      />
      <Image
        style={[styles.editTaskInner, styles.editLayout]}
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
        style={[styles.editTaskChild1, styles.editLayout]}
        contentFit="cover"
        source={require("../assets/vector-13.png")}
      />
      <Text style={[styles.jun292023, styles.jun292023Typo]}>Jun 29, 2023</Text>
      <Text style={[styles.text, styles.textTypo]}>13:22</Text>
      <Text style={[styles.text1, styles.textTypo]}>14:22</Text>
      <Text style={[styles.notification, styles.timeTypo]}>Notification</Text>
      <View style={styles.mainButton}>
        <View style={styles.button}>
          <Text style={[styles.signUp, styles.saveTypo]}>Save</Text>
        </View>
      </View>
      <Pressable
        style={[styles.addCategory, styles.taskTagPosition]}
        onPress={() => navigation.navigate("AddCategory")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/add-category.png")}
        />
      </Pressable>
      <View style={[styles.taskTag, styles.taskTagPosition]}>
        <View style={styles.rectangleParent}>
          <View style={styles.groupShadowBox} />
          <Text style={[styles.work, styles.workClr]}>Work</Text>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={styles.groupShadowBox} />
          <Text style={[styles.work, styles.workClr]}>Home</Text>
        </View>
      </View>
      <Image
        style={[styles.notificationIcon, styles.groupViewLayout]}
        contentFit="cover"
        source={require("../assets/notification.png")}
      />
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={styles.groupInner} />
      </View>
      <Text style={[styles.save, styles.saveTypo]}>Save</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  barPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  saveTypo: {
    textAlign: "center",
    color: Color.whitesmoke_100,
    fontFamily: FontFamily.bodyBoldBody2Bold,
    fontWeight: "500",
  },
  nameTypo: {
    width: 66,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 40,
    fontSize: FontSize.size_3xl,
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
  workClr: {
    color: Color.buttonBg,
    textAlign: "left",
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
  taskTagPosition: {
    top: 652,
    position: "absolute",
  },
  groupViewLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  pageTitle: {
    marginLeft: -122,
    width: 244,
    lineHeight: 28,
    letterSpacing: -1,
    top: 52,
    color: Color.whitesmoke_100,
    fontFamily: FontFamily.bodyBoldBody2Bold,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
    fontSize: FontSize.headingHeading4_size,
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
    left: 0,
    top: 0,
  },
  coolicon: {
    top: 59,
    width: 7,
    height: 12,
    left: 26,
    position: "absolute",
  },
  editTaskChild: {
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
    top: 325,
    color: Color.placeholder,
  },
  description: {
    top: 413,
    left: 43,
  },
  category: {
    top: 598,
    left: 43,
  },
  loremIpsumDolor: {
    top: 478,
    fontFamily: FontFamily.poppinsRegular,
    width: 301,
    height: 160,
    left: 43,
    fontSize: FontSize.headingHeading4_size,
  },
  dueTime: {
    left: 166,
    top: 325,
    color: Color.placeholder,
  },
  editTaskItem: {
    top: 187,
  },
  editTaskInner: {
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
  editTaskChild1: {
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
    color: Color.placeholder,
  },
  signUp: {
    letterSpacing: 0,
    lineHeight: 24,
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
  icon: {
    height: "100%",
    width: "100%",
  },
  addCategory: {
    left: 251,
    width: 139,
    height: 96,
  },
  groupShadowBox: {
    elevation: 25,
    shadowRadius: 25,
    shadowColor: "rgba(226, 226, 226, 0.25)",
    backgroundColor: Color.buttonTextUnselected,
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
  work: {
    height: "33.43%",
    width: "47%",
    top: "31.2%",
    left: "27%",
    fontFamily: FontFamily.bodyRegularBody3Regular,
    fontSize: FontSize.bodyBoldBody2Bold_size,
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
    left: 33,
    width: 213,
    height: 45,
  },
  notificationIcon: {
    top: 366,
    left: 303,
  },
  groupInner: {
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
  save: {
    marginLeft: 124,
    width: 56,
    fontSize: FontSize.bodyBoldBody2Bold_size,
    lineHeight: 28,
    letterSpacing: -1,
    top: 52,
    color: Color.whitesmoke_100,
    fontFamily: FontFamily.bodyBoldBody2Bold,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  editTask: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.buttonBg,
  },
});

export default EditTask;
