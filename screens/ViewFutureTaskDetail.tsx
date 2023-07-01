import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const ViewFutureTaskDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.viewFutureTaskDetail}>
      <Image
        style={styles.navigationBarIcon}
        contentFit="cover"
        source={require("../assets/navigation-bar.png")}
      />
      <Pressable
        style={styles.coolicon}
        onPress={() => navigation.navigate("ViewTasks")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/coolicon1.png")}
        />
      </Pressable>
      <Text style={[styles.june29, styles.june29Typo]}>June 29</Text>
      <View style={[styles.viewFutureTaskDetailChild, styles.viewPosition]} />
      <View style={[styles.viewFutureTaskDetailItem, styles.viewPosition]} />
      <View style={[styles.cardMedium, styles.cardLayout]}>
        <View style={styles.cardShadowBox} />
        <View style={[styles.group, styles.groupPosition]}>
          <View style={styles.group1}>
            <View style={[styles.group2, styles.groupPosition1]}>
              <Text style={styles.designChanges}>Family dinner</Text>
            </View>
            <Text style={[styles.daysAgo, styles.daysTypo]}>{` `}</Text>
          </View>
        </View>
        <Image
          style={[styles.cardMediumItem, styles.rectangleIconLayout]}
          contentFit="cover"
          source={require("../assets/group-40.png")}
        />
      </View>
      <View style={[styles.viewFutureTaskDetailInner, styles.todaysLayout]}>
        <View style={[styles.todaysRemindersWrapper, styles.todaysLayout]}>
          <Text style={[styles.todaysReminders, styles.todaysLayout]}>
            Today’s Reminders
          </Text>
        </View>
      </View>
      <View style={[styles.cardMedium1, styles.cardLayout]}>
        <View style={styles.cardShadowBox} />
        <View style={[styles.group3, styles.groupPosition]}>
          <View style={styles.group1}>
            <View style={[styles.group5, styles.groupPosition1]}>
              <Text style={[styles.designChanges1, styles.workTypo1]}>
                Assignment 4
              </Text>
            </View>
            <Text style={[styles.daysAgo1, styles.daysTypo]} />
          </View>
        </View>
        <Image
          style={[styles.cardMediumItem, styles.rectangleIconLayout]}
          contentFit="cover"
          source={require("../assets/group-40.png")}
        />
      </View>
      <Image
        style={[styles.toDoList1Traced, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/todolist-1-traced.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-69.png")}
      />
      <Image
        style={[styles.viewFutureTaskDetailChild1, styles.ellipseIconLayout]}
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
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/calendar--calendar1.png")}
        />
      </Pressable>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4282.png")}
      />
      <Text style={[styles.text1, styles.workTypo1]}>Assignment 4</Text>
      <Text style={[styles.oct242022, styles.in5HoursLayout]}>
        Oct 24, 2022
      </Text>
      <Text style={[styles.in5Hours, styles.in5HoursLayout]}>In 5 hours</Text>
      <Text style={[styles.text2, styles.textTypo]}>13:22</Text>
      <Text style={[styles.text3, styles.textTypo]}>14:22</Text>
      <Text style={[styles.startTime, styles.timeTypo]}>Start Time</Text>
      <Text style={[styles.dueTime, styles.timeTypo]}>Due Time</Text>
      <Text style={[styles.description, styles.timeTypo]}>Description</Text>
      <Text style={[styles.category, styles.timeTypo]}>Category</Text>
      <Text
        style={[styles.currentBalance, styles.workTypo]}
      >{`finish assignment 4 for PROG 1234
Upload zip`}</Text>
      <View style={styles.workWrapper}>
        <Text style={[styles.work, styles.workTypo]}>Work</Text>
      </View>
      <Image
        style={[styles.basicAlarm, styles.calendarLayout]}
        contentFit="cover"
        source={require("../assets/basic--alarm.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  june29Typo: {
    fontSize: FontSize.headingHeading4_size,
    textAlign: "left",
    position: "absolute",
  },
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
  cardLayout: {
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
    right: "0%",
    left: "0%",
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
  rectangleIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  todaysLayout: {
    height: 66,
    width: 373,
    position: "absolute",
  },
  workTypo1: {
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
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
  calendarLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  in5HoursLayout: {
    width: 327,
    color: Color.whitesmoke_100,
    lineHeight: 40,
    letterSpacing: -1,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    width: 71,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 344,
    color: Color.whitesmoke_100,
    lineHeight: 40,
    letterSpacing: -1,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  timeTypo: {
    width: 99,
    color: Color.unselectFieldStroke,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 40,
    letterSpacing: -1,
    textAlign: "left",
    fontSize: FontSize.headingHeading4_size,
    position: "absolute",
  },
  workTypo: {
    fontSize: FontSize.bodyBoldBody2Bold_size,
    color: Color.whitesmoke_100,
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
  coolicon: {
    left: 26,
    top: 60,
    width: 7,
    height: 12,
    position: "absolute",
  },
  june29: {
    top: 124,
    color: Color.buttonBg,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegularBody3Regular,
    left: 38,
  },
  viewFutureTaskDetailChild: {
    top: 168,
  },
  viewFutureTaskDetailItem: {
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
    top: "0%",
    position: "absolute",
  },
  daysAgo: {
    height: "43.04%",
    width: "72.26%",
    top: "56.96%",
  },
  group1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
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
  },
  cardMedium: {
    top: 611,
  },
  todaysReminders: {
    color: Color.placeholder,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    left: 0,
    top: 0,
    width: 373,
  },
  todaysRemindersWrapper: {
    left: 0,
    top: 0,
    width: 373,
  },
  viewFutureTaskDetailInner: {
    top: 545,
    left: -37,
  },
  designChanges1: {
    color: Color.gray_200,
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
    top: "0%",
    position: "absolute",
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
  },
  ellipseIcon: {
    top: 636,
  },
  viewFutureTaskDetailChild1: {
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
  icon1: {
    overflow: "hidden",
  },
  calendarCalendar: {
    left: 335,
    top: 50,
  },
  rectangleIcon: {
    height: "88.15%",
    top: "12.8%",
    bottom: "-0.95%",
    borderRadius: Border.br_5xs,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  text1: {
    width: "63.08%",
    top: "17.54%",
    lineHeight: 41,
    color: Color.white100,
    fontSize: FontSize.headingHeading2_size,
    left: "9.74%",
    textAlign: "left",
    position: "absolute",
  },
  oct242022: {
    top: 215,
    fontWeight: "500",
    fontFamily: FontFamily.bodyBoldBody2Bold,
    fontSize: FontSize.headingHeading2_size,
    left: 38,
  },
  in5Hours: {
    top: 266,
    left: 41,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.bodyRegularBody3Regular,
  },
  text2: {
    left: 49,
  },
  text3: {
    left: 220,
  },
  startTime: {
    top: 311,
    color: Color.unselectFieldStroke,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 38,
  },
  dueTime: {
    left: 211,
    top: 311,
    color: Color.unselectFieldStroke,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  description: {
    top: 403,
    left: 38,
  },
  category: {
    top: 579,
    left: 38,
  },
  currentBalance: {
    height: "15.17%",
    width: "81.54%",
    top: "52.84%",
    textAlign: "justify",
    left: "9.74%",
    fontFamily: FontFamily.bodyRegularBody3Regular,
  },
  work: {
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    left: "0%",
    top: "0%",
    textAlign: "left",
    height: "100%",
    width: "100%",
  },
  workWrapper: {
    height: "1.78%",
    width: "12.05%",
    top: "74.53%",
    right: "77.44%",
    bottom: "23.7%",
    left: "10.51%",
    position: "absolute",
  },
  basicAlarm: {
    top: 352,
    left: 120,
    overflow: "hidden",
  },
  viewFutureTaskDetail: {
    backgroundColor: Color.white100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default ViewFutureTaskDetail;
