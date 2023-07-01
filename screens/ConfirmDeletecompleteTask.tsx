import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ConfirmDeletecompleteTask = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.confirmDeletecompleteTask}>
      <Image
        style={styles.navigationBarIcon}
        contentFit="cover"
        source={require("../assets/navigation-bar.png")}
      />
      <Text style={styles.june29}>June 29</Text>
      <View style={styles.confirmDeletecompleteTaskChild} />
      <View style={[styles.cardMedium, styles.cardLayout]}>
        <View style={styles.cardShadowBox} />
        <View style={styles.group}>
          <View style={[styles.group1, styles.groupPosition1]}>
            <View style={[styles.group2, styles.groupPosition1]}>
              <Text style={styles.designChanges}>Family dinner</Text>
            </View>
            <Text style={[styles.daysAgo, styles.daysTypo]}>{` `}</Text>
          </View>
        </View>
        <Pressable
          style={styles.wrapperPosition}
          onPress={() => navigation.navigate("ConfirmDeleteTask")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group-40.png")}
          />
        </Pressable>
      </View>
      <View
        style={[styles.confirmDeletecompleteTaskInner, styles.todaysLayout]}
      >
        <View style={[styles.todaysRemindersWrapper, styles.todaysLayout]}>
          <Text style={[styles.todaysReminders, styles.todaysLayout]}>
            Today’s Reminders
          </Text>
        </View>
      </View>
      <View style={[styles.cardMedium1, styles.cardLayout]}>
        <View style={styles.cardShadowBox} />
        <View style={[styles.group3, styles.groupPosition]}>
          <View style={[styles.group1, styles.groupPosition1]}>
            <View style={[styles.group5, styles.groupPosition1]}>
              <Text style={[styles.designChanges1, styles.designChanges1Typo]}>
                Assignment 4
              </Text>
            </View>
            <Text style={[styles.daysAgo1, styles.daysTypo]} />
          </View>
        </View>
        <Image
          style={[styles.cardMediumInner, styles.iconLayout]}
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
        style={[styles.confirmDeletecompleteTaskItem, styles.confirmLayout]}
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
        style={styles.calendarCalendar}
        onPress={() => navigation.navigate("ViewTasksSelectDate")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/calendar--calendar1.png")}
        />
      </Pressable>
      <View style={[styles.cardMedium2, styles.cardLayout]}>
        <View style={styles.cardShadowBox} />
        <View style={[styles.group6, styles.groupPosition]}>
          <View style={[styles.group1, styles.groupPosition1]}>
            <View style={[styles.group5, styles.groupPosition1]}>
              <Text style={[styles.designChanges1, styles.designChanges1Typo]}>
                Group meeting
              </Text>
            </View>
            <Text style={[styles.daysAgo1, styles.daysTypo]} />
          </View>
        </View>
        <Image
          style={[styles.cardMediumInner, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-40.png")}
        />
      </View>
      <Image
        style={[styles.confirmDeletecompleteTaskChild1, styles.confirmLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-70.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    height: 75,
    width: 352,
    left: 17,
    position: "absolute",
  },
  groupPosition1: {
    left: "0%",
    top: "0%",
    position: "absolute",
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
    overflow: "hidden",
  },
  todaysLayout: {
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
  designChanges1Typo: {
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
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
  iconLayout1: {
    height: "100%",
    width: "100%",
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
  confirmDeletecompleteTaskChild: {
    marginLeft: -165.5,
    top: 168,
    left: "50%",
    borderStyle: "solid",
    borderColor: "#adb5bd",
    borderTopWidth: 1,
    width: 331,
    height: 1,
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
    right: "0%",
    left: "0%",
    top: "0%",
    width: "100%",
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
    width: "100%",
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
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapperPosition: {
    height: "23.59%",
    width: "1.35%",
    bottom: "37.89%",
    right: "6.37%",
    top: "38.52%",
    left: "92.28%",
    position: "absolute",
  },
  cardMedium: {
    top: 254,
  },
  todaysReminders: {
    fontSize: FontSize.size_5xl,
    color: Color.placeholder,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  confirmDeletecompleteTaskInner: {
    top: 188,
    left: -38,
  },
  designChanges1: {
    color: Color.gray_200,
    left: "0%",
    top: "0%",
    position: "absolute",
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.headingHeading4_size,
  },
  group5: {
    height: "58.13%",
    bottom: "41.87%",
    right: "0%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  daysAgo1: {
    top: "49.13%",
  },
  group3: {
    width: "38.35%",
    right: "38.87%",
  },
  cardMediumInner: {
    height: "23.59%",
    width: "1.35%",
    bottom: "37.89%",
    right: "6.37%",
    top: "38.52%",
    left: "92.28%",
    position: "absolute",
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
    position: "absolute",
  },
  confirmDeletecompleteTaskItem: {
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
  icon1: {
    overflow: "hidden",
  },
  calendarCalendar: {
    left: 335,
    top: 44,
    width: 24,
    height: 24,
    position: "absolute",
  },
  group6: {
    width: "40.91%",
    right: "36.31%",
  },
  cardMedium2: {
    top: 428,
  },
  confirmDeletecompleteTaskChild1: {
    top: 451,
    left: 65,
  },
  confirmDeletecompleteTask: {
    backgroundColor: Color.white100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default ConfirmDeletecompleteTask;
