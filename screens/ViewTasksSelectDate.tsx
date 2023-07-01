import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ViewTasksSelectDate = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.viewTasksSelectDate}>
      <Image
        style={styles.navigationBarIcon}
        contentFit="cover"
        source={require("../assets/navigation-bar.png")}
      />
      <View style={[styles.viewTasksSelectDateChild, styles.viewPosition]} />
      <Pressable
        style={styles.taskCard}
        onPress={() => navigation.navigate("ViewCurrentTaskDetail")}
      >
        <Image
          style={[styles.taskCardChild, styles.cardLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-428.png")}
        />
        <Text style={[styles.text, styles.textTypo1]}>Read Chapter 1</Text>
        <Text style={[styles.currentBalance, styles.currentTypo]}>1 hour</Text>
        <Text style={[styles.currentBalance1, styles.currentTypo]}>
          2:30 pm
        </Text>
      </Pressable>
      <Image
        style={[styles.toDoList1Traced, styles.cardLayout1]}
        contentFit="cover"
        source={require("../assets/todolist-1-traced.png")}
      />
      <Image
        style={styles.viewTasksSelectDateItem}
        contentFit="cover"
        source={require("../assets/ellipse-73.png")}
      />
      <View style={styles.group}>
        <Text style={[styles.mo, styles.moTypo]}>Mo</Text>
        <Text style={[styles.tu, styles.tuTypo]}>Tu</Text>
        <Text style={[styles.we, styles.moTypo]}>We</Text>
        <Text style={[styles.th, styles.tuTypo]}>Th</Text>
        <Text style={[styles.fr, styles.moTypo]}>Fr</Text>
        <Text style={[styles.sa, styles.saTypo]}>Sa</Text>
        <Text style={[styles.su, styles.saTypo]}>Su</Text>
        <Text style={styles.text1}>29</Text>
        <Text style={styles.text2}>30</Text>
        <Text style={[styles.text3, styles.textTypo]}>1</Text>
        <Text style={[styles.text4, styles.textTypo]}>2</Text>
        <Text style={[styles.text5, styles.textTypo]}>3</Text>
        <Text style={[styles.text6, styles.textTypo]}>4</Text>
        <Text style={[styles.text7, styles.textTypo]}>5</Text>
      </View>
      <Pressable
        style={[styles.calendarCalendar, styles.calendarLayout]}
        onPress={() => navigation.navigate("ViewTasks")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/calendar--calendar1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.menuMoreHorizontal, styles.calendarLayout]}
        onPress={() => navigation.navigate("ViewTasks1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/menu--more-horizontal.png")}
        />
      </Pressable>
      <Image
        style={[styles.basicAlarm, styles.calendarLayout]}
        contentFit="cover"
        source={require("../assets/basic--alarm.png")}
      />
      <View style={[styles.viewTasksSelectDateInner, styles.viewPosition]} />
      <Pressable
        style={styles.editPlusCircle}
        onPress={() => navigation.navigate("CreateCurrentTask")}
      >
        <Image
          style={[styles.icon2, styles.cardLayout1]}
          contentFit="cover"
          source={require("../assets/edit--plus-circle.png")}
        />
      </Pressable>
      <View style={[styles.taskCardSmall3, styles.cardLayout]}>
        <View style={[styles.cardMedium, styles.cardLayout]}>
          <View style={styles.cardShadowBox} />
          <View style={[styles.group1, styles.groupPosition]}>
            <View style={[styles.group2, styles.group2Position]}>
              <View style={[styles.group3, styles.groupPosition1]}>
                <Text style={[styles.designChanges, styles.textTypo1]}>
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
          style={[styles.taskCardSmall3Child, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-70.png")}
        />
        <Text style={[styles.hours, styles.hoursClr]}>2 hours</Text>
        <Text style={[styles.pm, styles.pmTypo]}>8:20 pm</Text>
      </View>
      <View style={[styles.taskCardSmall, styles.cardLayout]}>
        <View style={[styles.cardMedium, styles.cardLayout]}>
          <Pressable
            style={[styles.cardMedium, styles.cardLayout]}
            onPress={() => navigation.navigate("ViewAllTasks")}
          >
            <View style={styles.cardShadowBox} />
            <View style={[styles.group4, styles.groupPosition]}>
              <View style={[styles.group2, styles.group2Position]}>
                <View style={[styles.group6, styles.groupPosition1]}>
                  <Text style={[styles.designChanges1, styles.hoursClr]}>
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
          </Pressable>
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
      <Image
        style={[styles.arrowChevronRight, styles.calendarLayout]}
        contentFit="cover"
        source={require("../assets/arrow--chevron-right.png")}
      />
      <View style={[styles.groupView, styles.todaysLayout]}>
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
  viewPosition: {
    height: 1,
    width: 331,
    borderTopWidth: 1,
    borderColor: "#adb5bd",
    borderStyle: "solid",
    left: "50%",
    marginLeft: -165.5,
    position: "absolute",
  },
  cardLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  currentTypo: {
    fontSize: FontSize.bodyBoldBody2Bold_size,
    top: "7.46%",
    textAlign: "left",
    color: Color.white100,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  moTypo: {
    fontFamily: FontFamily.poppinsMedium,
    height: "49.65%",
    color: Color.unselectFieldStroke,
    fontWeight: "500",
    fontSize: FontSize.bodyBoldBody2Bold_size,
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  tuTypo: {
    width: "6.66%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    height: "49.65%",
    fontSize: FontSize.bodyBoldBody2Bold_size,
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  saTypo: {
    width: "7.61%",
    color: Color.unselectFieldStroke,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    height: "49.65%",
    fontSize: FontSize.bodyBoldBody2Bold_size,
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  textTypo: {
    width: "3.81%",
    top: "45.91%",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    color: Color.unselectFieldStroke,
    height: "49.65%",
    fontSize: FontSize.bodyBoldBody2Bold_size,
    textAlign: "left",
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
  group2Position: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupPosition1: {
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  daysTypo: {
    color: Color.darkgray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.bodyRegularBody3Regular_size,
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  childLayout: {
    height: 10,
    width: 10,
    left: 44,
    position: "absolute",
  },
  hoursClr: {
    color: Color.mainText,
    textAlign: "left",
    position: "absolute",
  },
  pmTypo: {
    left: 80,
    color: Color.mainText,
    fontFamily: FontFamily.bodyRegularBody3Regular,
    fontSize: FontSize.bodyRegularBody3Regular_size,
    textAlign: "left",
    position: "absolute",
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
  viewTasksSelectDateChild: {
    top: 529,
  },
  taskCardChild: {
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  text: {
    width: "91.11%",
    top: "43.05%",
    left: "3.33%",
    fontSize: FontSize.headingHeading2_size,
    lineHeight: 41,
    color: Color.white100,
  },
  currentBalance: {
    left: "44.44%",
  },
  currentBalance1: {
    left: "6.3%",
  },
  taskCard: {
    top: 193,
    width: 270,
    height: 295,
    left: 29,
    position: "absolute",
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
  viewTasksSelectDateItem: {
    top: 110,
    left: 65,
    width: 45,
    height: 45,
    position: "absolute",
  },
  mo: {
    width: "8.57%",
    color: Color.unselectFieldStroke,
    left: "0%",
  },
  tu: {
    left: "15.99%",
    color: Color.white100,
  },
  we: {
    width: "9.52%",
    left: "30.34%",
    color: Color.unselectFieldStroke,
  },
  th: {
    left: "45.28%",
    color: Color.unselectFieldStroke,
  },
  fr: {
    width: "5.71%",
    left: "61.77%",
    color: Color.unselectFieldStroke,
  },
  sa: {
    left: "76.15%",
  },
  su: {
    left: "92.39%",
  },
  text1: {
    top: "46.67%",
    left: "0.68%",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    width: "6.81%",
    color: Color.unselectFieldStroke,
    fontSize: FontSize.bodyBoldBody2Bold_size,
    textAlign: "left",
    position: "absolute",
  },
  text2: {
    left: "16.08%",
    top: "45.91%",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    width: "6.81%",
    fontSize: FontSize.bodyBoldBody2Bold_size,
    textAlign: "left",
    color: Color.white100,
    position: "absolute",
  },
  text3: {
    left: "32.6%",
  },
  text4: {
    left: "46.74%",
  },
  text5: {
    left: "62.59%",
  },
  text6: {
    left: "78.08%",
  },
  text7: {
    left: "94.51%",
  },
  group: {
    height: "5.33%",
    width: "74.87%",
    top: "13.03%",
    right: "17.18%",
    bottom: "81.64%",
    left: "7.95%",
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  calendarCalendar: {
    left: 335,
    top: 50,
  },
  menuMoreHorizontal: {
    left: 257,
    top: 212,
  },
  basicAlarm: {
    top: 364,
    left: 249,
    overflow: "hidden",
  },
  viewTasksSelectDateInner: {
    top: 161,
  },
  icon2: {
    height: "100%",
    width: "100%",
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
    fontSize: FontSize.headingHeading4_size,
    left: "0%",
    top: "0%",
    textAlign: "left",
  },
  group3: {
    height: "58.13%",
    bottom: "41.87%",
    left: "0%",
  },
  daysAgo: {
    top: "49.13%",
  },
  group2: {
    left: "0%",
  },
  group1: {
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
  },
  cardMedium: {
    left: 0,
    top: 0,
  },
  taskCardSmall3Child: {
    top: 25,
  },
  hours: {
    left: 146,
    fontFamily: FontFamily.bodyRegularBody3Regular,
    color: Color.mainText,
    top: 49,
    fontSize: FontSize.bodyRegularBody3Regular_size,
  },
  pm: {
    top: 49,
    left: 80,
  },
  taskCardSmall3: {
    top: 679,
    left: 29,
  },
  designChanges1: {
    fontSize: FontSize.headingHeading4_size,
    color: Color.mainText,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    left: "0%",
    top: "0%",
  },
  group6: {
    height: "67.4%",
    bottom: "32.6%",
    left: "0%",
  },
  daysAgo1: {
    height: "43.04%",
    width: "72.26%",
    top: "56.96%",
  },
  group4: {
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
    top: 593,
    left: 29,
  },
  arrowChevronRight: {
    top: 118,
    left: 342,
    overflow: "hidden",
  },
  todaysReminders: {
    fontFamily: FontFamily.bodyBoldBody2Bold,
    color: Color.placeholder,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: FontSize.headingHeading4_size,
    fontWeight: "500",
    width: 186,
    left: 0,
    top: 0,
  },
  todaysRemindersWrapper: {
    left: 0,
    top: 0,
  },
  groupView: {
    top: 523,
    left: 29,
  },
  viewTasksSelectDate: {
    backgroundColor: Color.white100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default ViewTasksSelectDate;
