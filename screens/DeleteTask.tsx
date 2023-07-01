import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const DeleteTask = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.deleteTask}>
      <Image
        style={styles.navigationBarIcon}
        contentFit="cover"
        source={require("../assets/navigation-bar.png")}
      />
      <Text style={styles.june29}>June 29</Text>
      <View style={[styles.deleteTaskChild, styles.deletePosition]} />
      <View style={[styles.deleteTaskItem, styles.deletePosition]} />
      <View style={[styles.cardMedium, styles.cardLayout1]}>
        <View style={styles.cardShadowBox} />
        <View style={[styles.group, styles.groupPosition]}>
          <View style={[styles.group1, styles.groupPosition1]}>
            <View style={[styles.group2, styles.groupPosition1]}>
              <Text style={styles.designChanges}>Family dinner</Text>
            </View>
            <Text style={[styles.daysAgo, styles.daysTypo]}>{` `}</Text>
          </View>
        </View>
        <Image
          style={[styles.cardMediumItem, styles.cardLayout]}
          contentFit="cover"
          source={require("../assets/group-40.png")}
        />
      </View>
      <View style={[styles.deleteTaskInner, styles.deleteTaskInnerLayout]}>
        <View
          style={[styles.todaysRemindersWrapper, styles.deleteTaskInnerLayout]}
        >
          <Text style={styles.todaysReminders}>Today’s Reminders</Text>
        </View>
      </View>
      <View style={[styles.cardMedium1, styles.cardLayout1]}>
        <View style={styles.cardShadowBox} />
        <View style={[styles.group3, styles.groupPosition]}>
          <View style={[styles.group1, styles.groupPosition1]}>
            <View style={[styles.group5, styles.groupPosition1]}>
              <Text style={styles.designChanges1}>Assignment 4</Text>
            </View>
            <Text style={[styles.daysAgo1, styles.daysTypo]} />
          </View>
        </View>
        <Image
          style={[styles.cardMediumItem, styles.cardLayout]}
          contentFit="cover"
          source={require("../assets/group-40.png")}
        />
      </View>
      <Image
        style={[styles.toDoList1Traced, styles.cardLayout]}
        contentFit="cover"
        source={require("../assets/todolist-1-traced.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-69.png")}
      />
      <Image
        style={[styles.deleteTaskChild1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-70.png")}
      />
      <Text style={[styles.pm, styles.pmTypo]}>{`6:00 pm `}</Text>
      <Text style={[styles.hours, styles.pm1Typo]}>2 hours</Text>
      <Text style={[styles.pm1, styles.pm1Typo]}>8:20 pm</Text>
      <Text style={[styles.text, styles.pmTypo]}>{` `}</Text>
      <Pressable
        style={styles.calendarCalendar}
        onPress={() => navigation.navigate("ViewTasksSelectDate")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/calendar--calendar1.png")}
        />
      </Pressable>
      <View style={styles.taskCard}>
        <Image
          style={[styles.taskCardChild, styles.cardLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-428.png")}
        />
        <Text style={styles.text1}>House Cleaning</Text>
        <Text style={[styles.currentBalance, styles.currentTypo]}>2 hours</Text>
        <Text style={[styles.currentBalance1, styles.currentTypo]}>
          11:30 am
        </Text>
      </View>
      <View style={[styles.dropDown, styles.dropDownLayout]}>
        <View style={[styles.dropdownBg, styles.dropDownLayout]} />
        <Pressable
          style={styles.dropDownItem}
          onPress={() => navigation.navigate("EditTask")}
        >
          <Text style={[styles.edit, styles.editTypo]}>Delete Task?</Text>
        </Pressable>
        <Pressable
          style={[styles.dropDownItem1, styles.dropItemSpaceBlock]}
          onPress={() => navigation.navigate("ConfirmDeletecompleteTask")}
        >
          <Text style={[styles.edit1, styles.editTypo]}>Delete</Text>
        </Pressable>
        <Pressable
          style={[styles.dropDownItem2, styles.dropItemSpaceBlock]}
          onPress={() => navigation.navigate("ViewTasks")}
        >
          <Text style={[styles.edit1, styles.editTypo]}>Cancel</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.editPlusCircle}
        onPress={() => navigation.navigate("CreateCurrentTask")}
      >
        <Image
          style={[styles.icon1, styles.cardLayout]}
          contentFit="cover"
          source={require("../assets/edit--plus-circle.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  deletePosition: {
    height: 1,
    width: 331,
    borderTopWidth: 1,
    borderColor: "#adb5bd",
    left: "50%",
    marginLeft: -165.5,
    borderStyle: "solid",
    position: "absolute",
  },
  cardLayout1: {
    height: 75,
    width: 352,
    left: 18,
    position: "absolute",
  },
  groupPosition: {
    left: "22.78%",
    top: "24.59%",
    position: "absolute",
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
  cardLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  deleteTaskInnerLayout: {
    height: 66,
    width: 373,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 10,
    width: 10,
    left: 62,
    position: "absolute",
  },
  pmTypo: {
    fontSize: FontSize.bodyRegularBody3Regular_size,
    left: 98,
    color: Color.mainText,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegularBody3Regular,
    position: "absolute",
  },
  pm1Typo: {
    top: 745,
    fontSize: FontSize.bodyRegularBody3Regular_size,
    color: Color.mainText,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegularBody3Regular,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  currentTypo: {
    fontSize: FontSize.bodyBoldBody2Bold_size,
    top: "7.46%",
    color: Color.white100,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
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
  dropItemSpaceBlock: {
    backgroundColor: Color.labelHover,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    borderRadius: Border.br_4xs,
    alignItems: "center",
    position: "absolute",
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
    fontSize: FontSize.headingHeading4_size,
    fontFamily: FontFamily.bodyRegularBody3Regular,
    position: "absolute",
  },
  deleteTaskChild: {
    top: 168,
  },
  deleteTaskItem: {
    top: 547,
  },
  cardShadowBox: {
    shadowOpacity: 1,
    elevation: 23,
    shadowRadius: 23,
    shadowOffset: {
      width: 0,
      height: -7,
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.unselectedFieldFill,
    borderRadius: Border.br_xl,
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
  },
  cardMediumItem: {
    height: "23.59%",
    width: "1.35%",
    top: "38.52%",
    right: "6.37%",
    bottom: "37.89%",
    left: "92.28%",
    position: "absolute",
  },
  cardMedium: {
    top: 611,
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
  deleteTaskInner: {
    top: 545,
    left: -37,
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
    height: "55.04%",
    width: "38.35%",
    right: "38.87%",
    bottom: "20.37%",
  },
  cardMedium1: {
    top: 696,
  },
  toDoList1Traced: {
    height: "2.73%",
    width: "4.62%",
    top: "6.16%",
    right: "10%",
    bottom: "91.11%",
    left: "85.38%",
    position: "absolute",
  },
  ellipseIcon: {
    top: 636,
  },
  deleteTaskChild1: {
    top: 721,
  },
  pm: {
    top: 660,
    left: 98,
  },
  hours: {
    left: 164,
  },
  pm1: {
    left: 98,
  },
  text: {
    top: 744,
    left: 98,
  },
  icon: {
    overflow: "hidden",
  },
  calendarCalendar: {
    left: 335,
    top: 44,
    width: 24,
    height: 24,
    position: "absolute",
  },
  taskCardChild: {
    borderRadius: Border.br_5xs,
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
    bottom: "0%",
    height: "100%",
  },
  text1: {
    width: "91.11%",
    top: "43.05%",
    left: "3.33%",
    fontSize: FontSize.headingHeading2_size,
    lineHeight: 41,
    color: Color.white100,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  currentBalance: {
    left: "44.44%",
  },
  currentBalance1: {
    left: "6.3%",
  },
  taskCard: {
    top: 193,
    left: 29,
    width: 270,
    height: 295,
    position: "absolute",
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
    borderStyle: "solid",
    height: 136,
    width: 198,
    top: "50%",
    left: 0,
  },
  edit: {
    fontWeight: "500",
    fontFamily: FontFamily.bodyBoldBody2Bold,
  },
  dropDownItem: {
    top: 34,
    left: 43,
    width: 133,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    borderRadius: Border.br_4xs,
    alignItems: "center",
    position: "absolute",
  },
  edit1: {
    fontFamily: FontFamily.bodyRegularBody3Regular,
    color: Color.primary,
    lineHeight: 24,
  },
  dropDownItem1: {
    top: 88,
    left: 8,
    width: 70,
  },
  dropDownItem2: {
    top: 86,
    left: 111,
    width: 72,
  },
  dropDown: {
    marginTop: -144,
    left: 67,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  editPlusCircle: {
    left: "82.05%",
    top: "92.54%",
    right: "5.13%",
    bottom: "1.54%",
    width: "12.82%",
    height: "5.92%",
    position: "absolute",
  },
  deleteTask: {
    backgroundColor: Color.white100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default DeleteTask;
