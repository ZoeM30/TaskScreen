import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const ViewTasks1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.viewTasks}>
      <Image
        style={styles.navigationBarIcon}
        contentFit="cover"
        source={require("../assets/navigation-bar.png")}
      />
      <Text style={[styles.june29, styles.june29FlexBox]}>June 29</Text>
      <View style={[styles.viewTasksChild, styles.viewPosition]} />
      <View style={[styles.viewTasksItem, styles.viewPosition]} />
      <Image
        style={[styles.toDoList1Traced, styles.iconCardLayout]}
        contentFit="cover"
        source={require("../assets/todolist-1-traced.png")}
      />
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
      <View style={styles.taskCard}>
        <Image
          style={[styles.taskCardChild, styles.groupPosition1]}
          contentFit="cover"
          source={require("../assets/rectangle-428.png")}
        />
        <Text style={styles.text}>House Cleaning</Text>
        <Text style={[styles.currentBalance, styles.currentTypo]}>2 hours</Text>
        <Text style={[styles.currentBalance1, styles.currentTypo]}>
          11:30 am
        </Text>
      </View>
      <View style={styles.dropDown}>
        <View style={styles.dropdownBg} />
        <Pressable
          style={[styles.dropDownItem, styles.dropItemSpaceBlock]}
          onPress={() => navigation.navigate("EditTask1")}
        >
          <View style={styles.calendarLayout}>
            <View style={[styles.container, styles.groupPosition1]} />
            <Image
              style={[styles.editIcon, styles.iconCardLayout]}
              contentFit="cover"
              source={require("../assets/edit.png")}
            />
          </View>
          <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
        </Pressable>
        <Pressable
          style={styles.dropDownItem1}
          onPress={() => navigation.navigate("ConfirmDeletecompleteTask")}
        >
          <Text style={styles.editTypo}>Complete</Text>
        </Pressable>
        <Pressable
          style={[styles.dropDownItem2, styles.dropItemSpaceBlock]}
          onPress={() => navigation.navigate("DeleteTask")}
        >
          <View style={styles.calendarLayout}>
            <View style={[styles.container, styles.groupPosition1]} />
            <Image
              style={[styles.deleteIcon, styles.iconCardLayout]}
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
      <Pressable
        style={styles.editPlusCircle}
        onPress={() => navigation.navigate("CreateCurrentTask")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/edit--plus-circle.png")}
        />
      </Pressable>
      <View style={[styles.taskCardSmall2, styles.cardLayout]}>
        <View style={[styles.cardMedium, styles.cardLayout]}>
          <View style={styles.cardShadowBox} />
          <View style={[styles.group, styles.groupPosition]}>
            <View style={[styles.container, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupPosition1]}>
                <Text style={[styles.designChanges, styles.designTypo]}>
                  Assignment 4
                </Text>
              </View>
              <Text style={[styles.daysAgo, styles.daysTypo]} />
            </View>
          </View>
          <Image
            style={[styles.cardMediumItem, styles.iconCardLayout]}
            contentFit="cover"
            source={require("../assets/group-40.png")}
          />
        </View>
        <Image
          style={[styles.taskCardSmall2Child, styles.childLayout]}
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
            <View style={[styles.group3, styles.groupPosition]}>
              <View style={[styles.container, styles.groupPosition1]}>
                <View style={[styles.group5, styles.groupPosition1]}>
                  <Text style={[styles.designChanges1, styles.hoursClr]}>
                    Family dinner
                  </Text>
                </View>
                <Text style={[styles.daysAgo1, styles.daysTypo]}>{` `}</Text>
              </View>
            </View>
            <Image
              style={[styles.cardMediumItem, styles.iconCardLayout]}
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
  iconCardLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  calendarLayout: {
    height: 24,
    width: 24,
  },
  groupPosition1: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
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
  dropItemSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    width: 182,
    borderRadius: Border.br_4xs,
    left: 8,
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
  iconLayout: {
    height: "100%",
    overflow: "hidden",
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
  hoursClr: {
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
    top: 124,
    left: 38,
    color: Color.buttonBg,
    fontFamily: FontFamily.bodyRegularBody3Regular,
    textAlign: "left",
    fontSize: FontSize.headingHeading4_size,
  },
  viewTasksChild: {
    top: 168,
  },
  viewTasksItem: {
    top: 529,
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
  calendarCalendar: {
    left: 335,
    top: 50,
    position: "absolute",
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
  text: {
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
    width: 270,
    height: 295,
    left: 29,
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
    width: 198,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    height: 136,
    top: "50%",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  container: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  editIcon: {
    height: "54.61%",
    width: "54.61%",
    top: "20.98%",
    right: "19.97%",
    bottom: "24.41%",
    left: "25.42%",
    position: "absolute",
    overflow: "hidden",
  },
  edit: {
    marginLeft: 16,
  },
  dropDownItem: {
    top: 8,
    alignItems: "center",
  },
  dropDownItem1: {
    top: 48,
    left: 44,
    alignItems: "center",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    width: 182,
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  deleteIcon: {
    height: "58.33%",
    width: "58.33%",
    top: "20.83%",
    right: "20.83%",
    bottom: "20.83%",
    left: "20.83%",
    position: "absolute",
    overflow: "hidden",
  },
  dropDownItem2: {
    top: 88,
    backgroundColor: Color.labelHover,
    alignItems: "center",
  },
  basicDownloadDone: {
    top: 56,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  dropDown: {
    marginTop: -223,
    left: 98,
    width: 226,
    height: 136,
    top: "50%",
    position: "absolute",
  },
  icon1: {
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
  cardShadowBox: {
    elevation: 23,
    shadowRadius: 23,
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.unselectedFieldFill,
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
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
    top: 672,
    left: 18,
    width: 352,
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
    position: "absolute",
  },
  taskCardSmall: {
    top: 586,
    left: 18,
    width: 352,
  },
  todaysReminders: {
    fontWeight: "500",
    fontFamily: FontFamily.bodyBoldBody2Bold,
    color: Color.placeholder,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default ViewTasks1;
