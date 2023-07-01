import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const CreateFutureTask = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.createFutureTask}>
      <View style={[styles.navigationBar, styles.groupPosition1]}>
        <Text style={[styles.pageTitle, styles.signUpTypo]}>Create a Task</Text>
        <Image
          style={[styles.statusBarIcon, styles.groupPosition1]}
          contentFit="cover"
          source={require("../assets/status-bar.png")}
        />
      </View>
      <Pressable
        style={styles.coolicon}
        onPress={() => navigation.navigate("CreateTaskDiscard")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/coolicon.png")}
        />
      </Pressable>
      <View style={styles.createFutureTaskChild} />
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.startTime, styles.timeTypo]}>Start Time</Text>
      <Text style={[styles.description, styles.timeTypo]}>Description</Text>
      <Text style={[styles.category, styles.timeTypo]}>Category</Text>
      <Text
        style={[styles.finishAssignment4, styles.workClr]}
      >{`finish assignment 4 for PROG1234.
Upload zip`}</Text>
      <Text style={[styles.dueTime, styles.timeTypo]}>Due Time</Text>
      <Image
        style={[styles.createFutureTaskItem, styles.createLayout]}
        contentFit="cover"
        source={require("../assets/vector-13.png")}
      />
      <Image
        style={[styles.createFutureTaskInner, styles.createLayout]}
        contentFit="cover"
        source={require("../assets/vector-13.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.createLayout]}
        contentFit="cover"
        source={require("../assets/vector-13.png")}
      />
      <Text style={[styles.assignment4, styles.oct242022Typo]}>
        Assignment 4
      </Text>
      <Text style={[styles.date, styles.nameTypo]}>Date</Text>
      <Image
        style={[styles.createFutureTaskChild1, styles.createLayout]}
        contentFit="cover"
        source={require("../assets/vector-13.png")}
      />
      <Text style={[styles.oct242022, styles.oct242022Typo]}>Oct 24, 2022</Text>
      <Text style={[styles.text, styles.textTypo]}>13:22</Text>
      <Text style={[styles.text1, styles.textTypo]}>14:22</Text>
      <Text style={[styles.notification, styles.timeTypo]}>Notification</Text>
      <View style={styles.mainButton}>
        <View style={styles.button}>
          <Text style={[styles.signUp, styles.signUpTypo]}>Create Task</Text>
        </View>
      </View>
      <View style={[styles.group, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupShadowBox]} />
        </View>
      </View>
      <Image
        style={styles.iconAdd}
        contentFit="cover"
        source={require("../assets/-icon-add.png")}
      />
      <View style={[styles.taskTag, styles.groupLayout]}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.work, styles.workClr]}>Work</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.rectangleView, styles.groupPosition]} />
          <Text style={[styles.work, styles.workClr]}>Home</Text>
        </View>
      </View>
      <Image
        style={[styles.notificationIcon, styles.calendarLayout]}
        contentFit="cover"
        source={require("../assets/notification.png")}
      />
      <View style={[styles.groupView, styles.calendarLayout]}>
        <View style={styles.groupChild1} />
      </View>
      <Pressable
        style={[styles.calendarCalendar, styles.calendarLayout]}
        onPress={() => navigation.navigate("ViewTasksSelectDate")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/calendar--calendar.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition1: {
    left: 0,
    top: 0,
  },
  signUpTypo: {
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
  createLayout: {
    height: 1,
    width: 332,
    left: 29,
    position: "absolute",
  },
  oct242022Typo: {
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
  groupLayout: {
    height: 45,
    position: "absolute",
  },
  groupShadowBox: {
    elevation: 25,
    shadowRadius: 25,
    shadowColor: "rgba(226, 226, 226, 0.25)",
    backgroundColor: Color.buttonTextUnselected,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -7,
    },
    borderRadius: Border.br_5xs,
  },
  groupPosition: {
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  calendarLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  pageTitle: {
    marginLeft: -122,
    top: 52,
    lineHeight: 28,
    width: 244,
    letterSpacing: -1,
    color: Color.whitesmoke_100,
    fontFamily: FontFamily.bodyBoldBody2Bold,
    fontWeight: "500",
    fontSize: FontSize.headingHeading4_size,
    left: "50%",
    position: "absolute",
  },
  statusBarIcon: {
    width: 375,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  navigationBar: {
    right: 0,
    height: 88,
    position: "absolute",
    backgroundColor: Color.buttonBg,
  },
  coolicon: {
    top: 59,
    width: 7,
    height: 12,
    left: 26,
    position: "absolute",
  },
  createFutureTaskChild: {
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
  finishAssignment4: {
    top: 478,
    fontFamily: FontFamily.poppinsRegular,
    width: 301,
    height: 160,
    left: 43,
    fontSize: FontSize.headingHeading4_size,
    color: Color.buttonBg,
  },
  dueTime: {
    left: 166,
    top: 325,
    color: Color.placeholder,
  },
  createFutureTaskItem: {
    top: 187,
  },
  createFutureTaskInner: {
    top: 413,
  },
  vectorIcon: {
    top: 586,
  },
  assignment4: {
    top: 142,
    width: 327,
  },
  date: {
    top: 202,
  },
  createFutureTaskChild1: {
    top: 292,
  },
  oct242022: {
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
  groupChild: {
    height: 45,
    position: "absolute",
    width: 100,
    left: 0,
    top: 0,
  },
  groupInner: {
    width: 100,
    height: 45,
    left: 0,
    top: 0,
  },
  group: {
    left: 259,
    width: 100,
    height: 45,
    top: 652,
  },
  iconAdd: {
    height: "1.9%",
    width: "4.1%",
    top: "78.91%",
    right: "19.23%",
    bottom: "19.19%",
    left: "76.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupItem: {
    left: "0%",
    elevation: 25,
    shadowRadius: 25,
    shadowColor: "rgba(226, 226, 226, 0.25)",
    backgroundColor: Color.buttonTextUnselected,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -7,
    },
    borderRadius: Border.br_5xs,
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
  rectangleView: {
    left: "0%",
    elevation: 25,
    shadowRadius: 25,
    shadowColor: "rgba(226, 226, 226, 0.25)",
    backgroundColor: Color.buttonTextUnselected,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -7,
    },
    borderRadius: Border.br_5xs,
    width: "100%",
  },
  rectangleGroup: {
    left: "53.05%",
    width: "46.95%",
    right: "0%",
  },
  taskTag: {
    left: 33,
    width: 213,
    top: 652,
  },
  notificationIcon: {
    top: 366,
    left: 303,
  },
  groupChild1: {
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
  icon1: {
    overflow: "hidden",
  },
  calendarCalendar: {
    left: 80,
    top: 210,
  },
  createFutureTask: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.buttonBg,
  },
});

export default CreateFutureTask;
