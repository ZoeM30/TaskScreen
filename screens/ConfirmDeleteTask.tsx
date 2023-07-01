import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const ConfirmDeleteTask = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.confirmDeleteTask}>
      <Image
        style={styles.navigationBarIcon}
        contentFit="cover"
        source={require("../assets/navigation-bar.png")}
      />
      <Text style={styles.june29}>June 29</Text>
      <View style={styles.confirmDeleteTaskChild} />
      <View style={[styles.cardMedium, styles.cardLayout1]}>
        <View style={[styles.cardMediumChild, styles.cardShadowBox]} />
        <View style={styles.group}>
          <View style={[styles.group1, styles.groupPosition1]}>
            <View style={[styles.group2, styles.groupPosition1]}>
              <Text style={styles.designChanges}>Family dinner</Text>
            </View>
            <Text style={[styles.daysAgo, styles.daysTypo]}>{` `}</Text>
          </View>
        </View>
        <Image
          style={[styles.cardMediumItem, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-40.png")}
        />
      </View>
      <View
        style={[
          styles.confirmDeleteTaskInner,
          styles.confirmDeleteTaskInnerLayout,
        ]}
      >
        <View
          style={[
            styles.todaysRemindersWrapper,
            styles.confirmDeleteTaskInnerLayout,
          ]}
        >
          <Text style={styles.todaysReminders}>Today’s Reminders</Text>
        </View>
      </View>
      <View style={[styles.cardMedium1, styles.cardLayout1]}>
        <View style={[styles.cardMediumInner, styles.cardShadowBox]} />
        <View style={[styles.group3, styles.groupPosition]}>
          <View style={[styles.group1, styles.groupPosition1]}>
            <View style={[styles.group5, styles.groupPosition1]}>
              <Text style={styles.designChanges1}>Assignment 4</Text>
            </View>
            <Text style={[styles.daysAgo1, styles.daysTypo]} />
          </View>
        </View>
        <Image
          style={[styles.cardMediumItem, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-40.png")}
        />
      </View>
      <Image
        style={[styles.toDoList1Traced, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/todolist-1-traced.png")}
      />
      <Image
        style={[styles.confirmDeleteTaskItem, styles.confirmLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-69.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.confirmLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-70.png")}
      />
      <Text style={[styles.pm, styles.pmTypo]}>{`6:00 pm `}</Text>
      <Text style={[styles.hours, styles.pm1Typo]}>2 hours</Text>
      <Text style={[styles.pm1, styles.pm1Typo]}>8:20 pm</Text>
      <Text style={[styles.text, styles.pmTypo]}>{` `}</Text>
      <Pressable
        style={[styles.calendarCalendar, styles.calendarLayout]}
        onPress={() => navigation.navigate("ViewTasksSelectDate")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/calendar--calendar1.png")}
        />
      </Pressable>
      <View style={[styles.cardMedium2, styles.cardLayout1]}>
        <View style={[styles.rectangleView, styles.cardShadowBox]} />
        <View style={[styles.group6, styles.groupPosition]}>
          <View style={[styles.group1, styles.groupPosition1]}>
            <View style={[styles.group5, styles.groupPosition1]}>
              <Text style={styles.designChanges1}>Group meeting</Text>
            </View>
            <Text style={[styles.daysAgo1, styles.daysTypo]} />
          </View>
        </View>
        <Image
          style={[styles.cardMediumItem, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-40.png")}
        />
      </View>
      <Image
        style={[styles.confirmDeleteTaskChild1, styles.confirmLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-70.png")}
      />
      <View style={[styles.dropDown, styles.dropDownPosition]}>
        <View style={[styles.dropdownBg, styles.dropDownPosition]} />
        <Pressable
          style={[styles.dropDownItem, styles.dropItemSpaceBlock]}
          onPress={() => navigation.navigate("EditTask")}
        >
          <View style={styles.calendarLayout}>
            <View style={[styles.group1, styles.groupPosition1]} />
            <Image
              style={[styles.editIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/edit.png")}
            />
          </View>
          <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
        </Pressable>
        <View style={[styles.dropDownItem1, styles.dropItemSpaceBlock]}>
          <Text style={styles.editTypo}>Complete</Text>
        </View>
        <Pressable
          style={[styles.dropDownItem2, styles.dropItemSpaceBlock]}
          onPress={() => navigation.navigate("DeleteTask")}
        >
          <View style={styles.calendarLayout}>
            <View style={[styles.group1, styles.groupPosition1]} />
            <Image
              style={[styles.deleteIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/delete.png")}
            />
          </View>
          <Text style={[styles.edit, styles.editTypo]}>Delete</Text>
        </Pressable>
        <Image
          style={[styles.basicDownloadDone, styles.calendarLayout]}
          contentFit="cover"
          source={require("../assets/basic--download-done.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout1: {
    height: 75,
    width: 352,
    left: 17,
    position: "absolute",
  },
  cardShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -7,
    },
  },
  groupPosition1: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  daysTypo: {
    color: Color.darkgray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.bodyRegularBody3Regular_size,
    left: "0%",
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  confirmDeleteTaskInnerLayout: {
    height: 66,
    width: 373,
    position: "absolute",
  },
  groupPosition: {
    bottom: "20.37%",
    height: "55.04%",
    left: "22.78%",
    top: "24.59%",
    position: "absolute",
  },
  confirmLayout: {
    height: 10,
    width: 10,
    position: "absolute",
  },
  pmTypo: {
    fontSize: FontSize.bodyRegularBody3Regular_size,
    left: 97,
    color: Color.mainText,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegularBody3Regular,
    position: "absolute",
  },
  pm1Typo: {
    top: 388,
    fontSize: FontSize.bodyRegularBody3Regular_size,
    color: Color.mainText,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegularBody3Regular,
    position: "absolute",
  },
  calendarLayout: {
    height: 24,
    width: 24,
  },
  dropDownPosition: {
    height: 136,
    top: "50%",
    position: "absolute",
  },
  dropItemSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    width: 182,
    borderRadius: Border.br_4xs,
    alignItems: "center",
    position: "absolute",
  },
  editTypo: {
    color: Color.primary,
    lineHeight: 24,
    fontSize: FontSize.bodyBoldBody2Bold_size,
    height: 24,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegularBody3Regular,
    flex: 1,
  },
  navigationBarIcon: {
    right: 0,
    height: 88,
    maxWidth: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  june29: {
    top: 124,
    left: 38,
    color: Color.buttonBg,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegularBody3Regular,
    fontSize: FontSize.headingHeading4_size,
    position: "absolute",
  },
  confirmDeleteTaskChild: {
    marginLeft: -165.5,
    top: 168,
    left: "50%",
    borderColor: "#adb5bd",
    borderTopWidth: 1,
    width: 331,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  cardMediumChild: {
    elevation: 23,
    shadowRadius: 23,
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.unselectedFieldFill,
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -7,
    },
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  designChanges: {
    color: Color.mainText,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    left: "0%",
    top: "0%",
    textAlign: "left",
    fontSize: FontSize.headingHeading4_size,
    position: "absolute",
  },
  group2: {
    height: "67.4%",
    bottom: "32.6%",
    left: "0%",
    right: "0%",
    top: "0%",
  },
  daysAgo: {
    height: "43.04%",
    width: "72.26%",
    top: "56.96%",
  },
  group1: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  group: {
    height: "47.48%",
    width: "36.93%",
    right: "40.29%",
    bottom: "27.93%",
    left: "22.78%",
    top: "24.59%",
    position: "absolute",
  },
  cardMediumItem: {
    height: "23.59%",
    width: "1.35%",
    top: "38.52%",
    right: "6.37%",
    bottom: "37.89%",
    left: "92.28%",
  },
  cardMedium: {
    top: 254,
  },
  todaysReminders: {
    fontSize: FontSize.size_5xl,
    color: Color.placeholder,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 66,
    width: 373,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    left: 0,
    top: 0,
    position: "absolute",
  },
  todaysRemindersWrapper: {
    left: 0,
    top: 0,
    height: 66,
    width: 373,
  },
  confirmDeleteTaskInner: {
    top: 188,
    left: -38,
  },
  cardMediumInner: {
    elevation: 23,
    shadowRadius: 23,
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.unselectedFieldFill,
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -7,
    },
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  designChanges1: {
    color: Color.gray_200,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    left: "0%",
    top: "0%",
    textAlign: "left",
    fontSize: FontSize.headingHeading4_size,
    position: "absolute",
  },
  group5: {
    height: "58.13%",
    bottom: "41.87%",
    left: "0%",
    right: "0%",
    top: "0%",
  },
  daysAgo1: {
    top: "49.13%",
  },
  group3: {
    width: "38.35%",
    right: "38.87%",
  },
  cardMedium1: {
    top: 339,
  },
  toDoList1Traced: {
    height: "2.73%",
    width: "4.62%",
    top: "6.16%",
    right: "10%",
    bottom: "91.11%",
    left: "85.38%",
  },
  confirmDeleteTaskItem: {
    top: 279,
    left: 61,
    width: 10,
  },
  ellipseIcon: {
    top: 364,
    left: 61,
    width: 10,
  },
  pm: {
    top: 303,
    left: 97,
  },
  hours: {
    left: 163,
  },
  pm1: {
    left: 97,
  },
  text: {
    top: 387,
    left: 97,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  calendarCalendar: {
    left: 335,
    top: 44,
    position: "absolute",
    width: 24,
  },
  rectangleView: {
    elevation: 23,
    shadowRadius: 23,
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.unselectedFieldFill,
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -7,
    },
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  group6: {
    width: "40.91%",
    right: "36.31%",
  },
  cardMedium2: {
    top: 428,
  },
  confirmDeleteTaskChild1: {
    top: 451,
    left: 65,
  },
  dropdownBg: {
    marginTop: -68,
    borderRadius: Border.br_xs,
    backgroundColor: Color.gray_300,
    shadowColor: "rgba(67, 73, 97, 0.08)",
    shadowRadius: 6,
    elevation: 6,
    borderColor: "rgba(67, 73, 97, 0.1)",
    borderWidth: 1,
    width: 198,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -7,
    },
    height: 136,
    top: "50%",
    borderStyle: "solid",
    left: 0,
  },
  editIcon: {
    height: "54.61%",
    width: "54.61%",
    top: "20.98%",
    right: "19.97%",
    bottom: "24.41%",
    left: "25.42%",
  },
  edit: {
    marginLeft: 16,
  },
  dropDownItem: {
    top: 8,
    left: 8,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    width: 182,
    borderRadius: Border.br_4xs,
  },
  dropDownItem1: {
    top: 48,
    left: 44,
  },
  deleteIcon: {
    height: "58.33%",
    width: "58.33%",
    top: "20.83%",
    right: "20.83%",
    bottom: "20.83%",
    left: "20.83%",
  },
  dropDownItem2: {
    top: 88,
    backgroundColor: Color.labelHover,
    left: 8,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    width: 182,
    borderRadius: Border.br_4xs,
  },
  basicDownloadDone: {
    top: 56,
    left: 20,
    position: "absolute",
    width: 24,
    overflow: "hidden",
  },
  dropDown: {
    marginTop: -168,
    left: 169,
    width: 226,
  },
  confirmDeleteTask: {
    backgroundColor: Color.white100,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default ConfirmDeleteTask;
