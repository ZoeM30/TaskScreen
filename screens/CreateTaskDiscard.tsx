import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const CreateTaskDiscard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.createTaskDiscard}>
      <View style={[styles.navigationBar, styles.groupPosition1]}>
        <Text style={styles.pageTitle}>Create a Task</Text>
        <Image
          style={[styles.statusBarIcon, styles.groupPosition1]}
          contentFit="cover"
          source={require("../assets/status-bar.png")}
        />
      </View>
      <Image
        style={styles.coolicon}
        contentFit="cover"
        source={require("../assets/coolicon.png")}
      />
      <View style={styles.createTaskDiscardChild} />
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
        style={[styles.createTaskDiscardItem, styles.createLayout]}
        contentFit="cover"
        source={require("../assets/vector-13.png")}
      />
      <Image
        style={[styles.createTaskDiscardInner, styles.createLayout]}
        contentFit="cover"
        source={require("../assets/vector-13.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.createLayout]}
        contentFit="cover"
        source={require("../assets/vector-13.png")}
      />
      <Text style={[styles.designChanges, styles.oct242022Typo]}>
        Design Changes
      </Text>
      <Text style={[styles.date, styles.nameTypo]}>Date</Text>
      <Image
        style={[styles.createTaskDiscardChild1, styles.createLayout]}
        contentFit="cover"
        source={require("../assets/vector-13.png")}
      />
      <Text style={[styles.oct242022, styles.oct242022Typo]}>Oct 24, 2022</Text>
      <Text style={[styles.text, styles.textTypo]}>13:22</Text>
      <Text style={[styles.text1, styles.textTypo]}>14:22</Text>
      <Text style={[styles.notification, styles.timeTypo]}>Notification</Text>
      <View style={styles.mainButton}>
        <View style={styles.button}>
          <Text style={styles.signUp}>Create Task</Text>
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
          <Text style={styles.work}>Work</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.rectangleView, styles.groupPosition]} />
          <Text style={styles.work}>Home</Text>
        </View>
      </View>
      <Image
        style={[styles.notificationIcon, styles.calendarLayout]}
        contentFit="cover"
        source={require("../assets/notification.png")}
      />
      <View style={[styles.groupView, styles.calendarLayout]}>
        <View style={[styles.groupChild1, styles.dropdownBgBorder]} />
      </View>
      <View style={[styles.dropDown, styles.dropDownLayout]}>
        <View style={[styles.dropdownBg, styles.dropDownLayout]} />
        <Pressable
          style={styles.dropDownItem}
          onPress={() => navigation.navigate("EditTask")}
        >
          <Text style={[styles.edit, styles.editTypo]}>Discard?</Text>
        </Pressable>
        <Pressable
          style={[styles.dropDownItem1, styles.dropItemFlexBox]}
          onPress={() => navigation.navigate("ConfirmDeletecompleteTask")}
        >
          <Text style={[styles.edit1, styles.editTypo]}>Discard</Text>
        </Pressable>
        <Pressable
          style={[styles.dropDownItem2, styles.dropItemFlexBox]}
          onPress={() => navigation.navigate("CreateCurrentTask")}
        >
          <Text style={[styles.edit1, styles.editTypo]}>Stay</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.calendarCalendar, styles.calendarLayout]}
        onPress={() => navigation.navigate("ViewTasksSelectDate")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/calendar--calendar.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition1: {
    top: 0,
    left: 0,
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
  createLayout: {
    height: 1,
    width: 332,
    left: 29,
    position: "absolute",
  },
  oct242022Typo: {
    width: 327,
    fontSize: FontSize.headingHeading2_size,
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
  dropdownBgBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  dropDownLayout: {
    height: 136,
    width: 198,
    top: "50%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -7,
    },
    position: "absolute",
  },
  editTypo: {
    color: Color.primary,
    lineHeight: 24,
    fontSize: FontSize.bodyBoldBody2Bold_size,
    textAlign: "left",
  },
  dropItemFlexBox: {
    justifyContent: "center",
    backgroundColor: Color.labelHover,
    top: 88,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    borderRadius: Border.br_4xs,
    alignItems: "center",
    position: "absolute",
  },
  pageTitle: {
    marginLeft: -122,
    top: 52,
    lineHeight: 28,
    width: 244,
    textAlign: "center",
    color: Color.whitesmoke_100,
    letterSpacing: -1,
    fontSize: FontSize.headingHeading4_size,
    fontFamily: FontFamily.bodyBoldBody2Bold,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  statusBarIcon: {
    width: 375,
    height: 44,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  navigationBar: {
    right: 0,
    height: 88,
    left: 0,
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
  createTaskDiscardChild: {
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
  createTaskDiscardItem: {
    top: 187,
  },
  createTaskDiscardInner: {
    top: 413,
  },
  vectorIcon: {
    top: 586,
  },
  designChanges: {
    top: 142,
  },
  date: {
    top: 202,
  },
  createTaskDiscardChild1: {
    top: 292,
  },
  oct242022: {
    top: 247,
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
    fontSize: FontSize.bodyBoldBody2Bold_size,
    textAlign: "center",
    color: Color.whitesmoke_100,
    fontFamily: FontFamily.bodyBoldBody2Bold,
    fontWeight: "500",
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
    color: Color.buttonBg,
    textAlign: "left",
    position: "absolute",
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
    borderColor: "#000",
    width: 26,
    height: 26,
    position: "absolute",
  },
  groupView: {
    top: 380,
    left: 415,
  },
  dropdownBg: {
    marginTop: -68,
    borderRadius: Border.br_xs,
    backgroundColor: "rgba(255, 255, 255, 0.97)",
    shadowColor: "rgba(67, 73, 97, 0.08)",
    shadowRadius: 6,
    elevation: 6,
    borderColor: "rgba(67, 73, 97, 0.1)",
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
  },
  edit: {
    fontFamily: FontFamily.bodyBoldBody2Bold,
    fontWeight: "500",
    color: Color.primary,
  },
  dropDownItem: {
    marginLeft: -43,
    top: 32,
    width: 87,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    borderRadius: Border.br_4xs,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  edit1: {
    fontFamily: FontFamily.bodyRegularBody3Regular,
  },
  dropDownItem1: {
    left: 9,
    width: 78,
  },
  dropDownItem2: {
    left: 112,
    width: 72,
  },
  dropDown: {
    marginTop: -62,
    left: 96,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  calendarCalendar: {
    left: 81,
    top: 210,
  },
  createTaskDiscard: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.buttonBg,
  },
});

export default CreateTaskDiscard;
