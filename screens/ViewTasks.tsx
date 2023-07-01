import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ViewTasks = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.viewTasks}>
      <Image
        style={styles.navigationBarIcon}
        contentFit="cover"
        source={require("../assets/navigation-bar1.png")}
      />
      <Text style={[styles.june29, styles.june29FlexBox]}>June 29</Text>
      <View style={[styles.viewTasksChild, styles.viewLayout]} />
      <View style={[styles.viewTasksItem, styles.viewLayout]} />
      <Image
        style={[styles.toDoList1Traced, styles.cardLayout1]}
        contentFit="cover"
        source={require("../assets/todolist-1-traced.png")}
      />
      <View style={[styles.taskCardSmall2, styles.cardLayout]}>
        <View style={[styles.cardMedium, styles.cardLayout]}>
          <View style={styles.cardShadowBox} />
          <View style={[styles.group, styles.groupPosition]}>
            <View style={[styles.group1, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupPosition1]}>
                <Text style={[styles.designChanges, styles.designTypo]}>
                  Assignment 4
                </Text>
              </View>
              <Text style={[styles.daysAgo, styles.daysTypo]} />
            </View>
          </View>
          <Image
            style={[styles.cardMediumItem, styles.cardLayout1]}
            contentFit="cover"
            source={require("../assets/group-40.png")}
          />
        </View>
        <Image
          style={[styles.taskCardSmall2Child, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-70.png")}
        />
        <Text style={[styles.hours, styles.textClr]}>2 hours</Text>
        <Text style={[styles.pm, styles.pmTypo]}>8:20 pm</Text>
      </View>
      <Text style={[styles.text, styles.textClr]}>{` `}</Text>
      <Pressable
        style={[styles.calendarCalendar, styles.calendarLayout]}
        onPress={() => navigation.navigate("ViewTasksSelectDate")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/calendar--calendar1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.taskCard}
        onPress={() => navigation.navigate("ViewCurrentTaskDetail")}
      >
        <Image
          style={[styles.taskCardChild, styles.groupPosition1]}
          contentFit="cover"
          source={require("../assets/rectangle-428.png")}
        />
        <Text style={styles.text1}>House Cleaning</Text>
        <Text style={[styles.currentBalance, styles.currentTypo]}>2 hours</Text>
        <Text style={[styles.currentBalance1, styles.currentTypo]}>
          11:30 am
        </Text>
      </Pressable>
      <Pressable
        style={[styles.menuMoreHorizontal, styles.calendarLayout]}
        onPress={() => navigation.navigate("ViewTasks1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/menu--more-horizontal.png")}
        />
      </Pressable>
      <Image
        style={[styles.basicAlarm, styles.calendarLayout]}
        contentFit="cover"
        source={require("../assets/basic--alarm.png")}
      />
      <View style={[styles.taskCardSmall, styles.cardLayout]}>
        <View style={[styles.cardMedium, styles.cardLayout]}>
          <View style={[styles.cardMedium, styles.cardLayout]}>
            <View style={styles.cardShadowBox} />
            <View style={[styles.group3, styles.groupPosition]}>
              <View style={[styles.group1, styles.groupPosition1]}>
                <View style={[styles.group5, styles.groupPosition1]}>
                  <Text style={[styles.designChanges1, styles.textClr]}>
                    Family dinner
                  </Text>
                </View>
                <Text style={[styles.daysAgo1, styles.daysTypo]}>{` `}</Text>
              </View>
            </View>
            <Image
              style={[styles.cardMediumItem, styles.cardLayout1]}
              contentFit="cover"
              source={require("../assets/group-40.png")}
            />
          </View>
          <Image
            style={[styles.groupChild, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-69.png")}
          />
          <Text style={[styles.pm1, styles.pmTypo]}>{`6:00 pm `}</Text>
        </View>
        <Image
          style={[styles.taskCardSmallChild, styles.calendarLayout]}
          contentFit="cover"
          source={require("../assets/group-20078.png")}
        />
      </View>
      <Pressable
        style={styles.editPlusCircle}
        onPress={() => navigation.navigate("CreateCurrentTask")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/edit--plus-circle.png")}
        />
      </Pressable>
      <View style={[styles.viewTasksInner, styles.todaysLayout]}>
        <View style={[styles.todaysRemindersWrapper, styles.todaysLayout]}>
          <Text style={[styles.todaysReminders, styles.todaysLayout]}>
            Today’s Reminders
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  june29FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  viewLayout: {
    height: 1,
    width: 331,
    borderTopWidth: 1,
    borderColor: "#adb5bd",
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  cardLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  cardLayout: {
    height: 75,
    width: 352,
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
  designTypo: {
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    left: "0%",
    top: "0%",
    fontSize: FontSize.headingHeading4_size,
  },
  daysTypo: {
    color: Color.darkgray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.bodyRegularBody3Regular_size,
    left: "0%",
    textAlign: "left",
    position: "absolute",
  },
  childLayout: {
    height: 10,
    width: 10,
    left: 44,
    position: "absolute",
  },
  textClr: {
    color: Color.mainText,
    textAlign: "left",
    position: "absolute",
  },
  pmTypo: {
    left: 80,
    color: Color.mainText,
    fontSize: FontSize.bodyRegularBody3Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegularBody3Regular,
    position: "absolute",
  },
  calendarLayout: {
    height: 24,
    width: 24,
    position: "absolute",
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
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  todaysLayout: {
    height: 66,
    width: 186,
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
    top: 108,
    left: 38,
    color: Color.buttonBg,
    fontFamily: FontFamily.bodyRegularBody3Regular,
    textAlign: "left",
    fontSize: FontSize.headingHeading4_size,
  },
  viewTasksChild: {
    marginLeft: -165.5,
    top: 529,
  },
  viewTasksItem: {
    marginLeft: -167.5,
    top: 161,
  },
  toDoList1Traced: {
    height: "2.73%",
    width: "4.62%",
    top: "6.16%",
    right: "10%",
    bottom: "91.11%",
    left: "85.38%",
    position: "absolute",
    overflow: "hidden",
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
    color: Color.gray_200,
    textAlign: "left",
    position: "absolute",
  },
  group2: {
    height: "58.13%",
    bottom: "41.87%",
    left: "0%",
    right: "0%",
    top: "0%",
  },
  daysAgo: {
    top: "49.13%",
  },
  group1: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  group: {
    height: "55.04%",
    width: "38.35%",
    right: "38.87%",
    bottom: "20.37%",
  },
  cardMediumItem: {
    height: "23.59%",
    width: "1.35%",
    top: "38.52%",
    right: "6.37%",
    bottom: "37.89%",
    left: "92.28%",
    position: "absolute",
    overflow: "hidden",
  },
  cardMedium: {
    left: 0,
    top: 0,
  },
  taskCardSmall2Child: {
    top: 25,
  },
  hours: {
    left: 146,
    top: 49,
    fontSize: FontSize.bodyRegularBody3Regular_size,
    color: Color.mainText,
    fontFamily: FontFamily.bodyRegularBody3Regular,
  },
  pm: {
    top: 49,
  },
  taskCardSmall2: {
    top: 677,
    left: 18,
    width: 352,
  },
  text: {
    top: 726,
    left: 98,
    fontSize: FontSize.bodyRegularBody3Regular_size,
    color: Color.mainText,
    fontFamily: FontFamily.bodyRegularBody3Regular,
  },
  calendarCalendar: {
    left: 335,
    top: 50,
  },
  taskCardChild: {
    borderRadius: Border.br_5xs,
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    top: 195,
    width: 270,
    height: 295,
    left: 29,
    position: "absolute",
  },
  menuMoreHorizontal: {
    left: 260,
    top: 214,
  },
  basicAlarm: {
    top: 370,
    left: 256,
    overflow: "hidden",
  },
  designChanges1: {
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    left: "0%",
    top: "0%",
    fontSize: FontSize.headingHeading4_size,
  },
  group5: {
    height: "67.4%",
    bottom: "32.6%",
    left: "0%",
    right: "0%",
    top: "0%",
  },
  daysAgo1: {
    height: "43.04%",
    width: "72.26%",
    top: "56.96%",
  },
  group3: {
    height: "47.48%",
    width: "36.93%",
    right: "40.29%",
    bottom: "27.93%",
  },
  groupChild: {
    top: 27,
  },
  pm1: {
    top: 47,
  },
  taskCardSmallChild: {
    top: 44,
    left: 143,
  },
  taskCardSmall: {
    top: 591,
    left: 18,
    width: 352,
  },
  icon2: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  editPlusCircle: {
    left: "82.05%",
    top: "90.4%",
    right: "5.13%",
    bottom: "3.67%",
    width: "12.82%",
    height: "5.92%",
    position: "absolute",
  },
  todaysReminders: {
    fontWeight: "500",
    fontFamily: FontFamily.bodyBoldBody2Bold,
    color: Color.placeholder,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: FontSize.headingHeading4_size,
    width: 186,
    left: 0,
    top: 0,
  },
  todaysRemindersWrapper: {
    left: 0,
    top: 0,
  },
  viewTasksInner: {
    top: 523,
    left: 29,
  },
  viewTasks: {
    backgroundColor: Color.white100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default ViewTasks;
