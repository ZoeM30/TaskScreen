import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ViewAllTasks = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.viewAllTasks}>
      <Image
        style={styles.navigationBarIcon}
        contentFit="cover"
        source={require("../assets/navigation-bar.png")}
      />
      <View style={styles.viewAllTasksChild} />
      <View style={[styles.cardMedium, styles.cardLayout]}>
        <View style={styles.cardShadowBox} />
        <View style={styles.group}>
          <View style={styles.group1}>
            <View style={[styles.group2, styles.groupPosition1]}>
              <Text style={[styles.designChanges, styles.designTypo]}>
                Family dinner
              </Text>
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
      <View style={[styles.viewAllTasksInner, styles.todaysLayout]}>
        <View style={[styles.todaysRemindersWrapper, styles.todaysLayout]}>
          <Text style={[styles.todaysReminders, styles.todaysLayout]}>
            Today’s Reminders
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.cardMedium1, styles.cardLayout]}
        onPress={() => navigation.navigate("ViewFutureTaskDetail")}
      >
        <View style={styles.cardShadowBox} />
        <View style={[styles.group3, styles.groupPosition]}>
          <View style={styles.group1}>
            <View style={[styles.group5, styles.groupPosition1]}>
              <Text style={[styles.designChanges1, styles.designTypo]}>
                Assignment 4
              </Text>
            </View>
            <Text style={[styles.daysAgo1, styles.daysTypo]} />
          </View>
        </View>
        <Image
          style={[styles.cardMediumItem, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-40.png")}
        />
      </Pressable>
      <View style={[styles.cardMedium2, styles.cardLayout]}>
        <View style={styles.cardShadowBox} />
        <View style={[styles.group6, styles.groupPosition]}>
          <View style={styles.group1}>
            <View style={[styles.group5, styles.groupPosition1]}>
              <Text style={[styles.designChanges1, styles.designTypo]}>
                Group meeting
              </Text>
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
        style={[styles.viewAllTasksItem, styles.viewLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-69.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.viewLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-70.png")}
      />
      <Image
        style={[styles.viewAllTasksChild1, styles.viewLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-70.png")}
      />
      <Text style={[styles.pm, styles.pmTypo]}>{`6:00 pm `}</Text>
      <Text style={[styles.hours, styles.pm1Typo]}>2 hours</Text>
      <Text style={[styles.pm1, styles.pm1Typo]}>8:20 pm</Text>
      <Text style={[styles.min, styles.pmTypo]}>45 min</Text>
      <Text style={[styles.pm2, styles.pm2Typo]}>1:20 pm</Text>
      <Text style={[styles.text, styles.pm2Typo]}>{` `}</Text>
      <Image
        style={styles.viewAllTasksChild2}
        contentFit="cover"
        source={require("../assets/ellipse-73.png")}
      />
      <View style={styles.group9}>
        <Text style={[styles.mo, styles.moTypo]}>Mo</Text>
        <Text style={styles.tu}>Tu</Text>
        <Text style={[styles.we, styles.moTypo]}>We</Text>
        <Text style={styles.th}>Th</Text>
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
      <Image
        style={styles.arrowChevronRight}
        contentFit="cover"
        source={require("../assets/arrow--chevron-right.png")}
      />
      <Image
        style={[styles.bgIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />
      <Image
        style={[styles.iconSearch, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-search.png")}
      />
      <Text style={[styles.searchTask, styles.pmTypo]}>search task</Text>
      <Pressable
        style={styles.editPlusCircle}
        onPress={() => navigation.navigate("CreateFutureTask")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/edit--plus-circle.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    height: 75,
    width: 352,
    left: 19,
    position: "absolute",
  },
  groupPosition1: {
    right: "0%",
    top: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  designTypo: {
    textAlign: "left",
    fontSize: FontSize.headingHeading4_size,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  daysTypo: {
    color: Color.darkgray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.bodyRegularBody3Regular_size,
    textAlign: "left",
    left: "0%",
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
  viewLayout: {
    height: 10,
    width: 10,
    left: 67,
    position: "absolute",
  },
  pmTypo: {
    fontFamily: FontFamily.bodyRegularBody3Regular,
    fontSize: FontSize.bodyRegularBody3Regular_size,
    textAlign: "left",
    position: "absolute",
  },
  pm1Typo: {
    top: 368,
    fontFamily: FontFamily.bodyRegularBody3Regular,
    fontSize: FontSize.bodyRegularBody3Regular_size,
    textAlign: "left",
    color: Color.mainText,
    position: "absolute",
  },
  pm2Typo: {
    left: 98,
    fontFamily: FontFamily.bodyRegularBody3Regular,
    fontSize: FontSize.bodyRegularBody3Regular_size,
    textAlign: "left",
    color: Color.mainText,
    position: "absolute",
  },
  moTypo: {
    color: Color.unselectFieldStroke,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyBoldBody2Bold_size,
    height: "49.65%",
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  saTypo: {
    width: "7.61%",
    color: Color.unselectFieldStroke,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyBoldBody2Bold_size,
    height: "49.65%",
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
    fontSize: FontSize.bodyBoldBody2Bold_size,
    height: "49.65%",
    textAlign: "left",
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
  viewAllTasksChild: {
    marginLeft: -165.5,
    top: 166,
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
  },
  group2: {
    height: "67.4%",
    bottom: "32.6%",
    left: "0%",
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
    position: "absolute",
  },
  cardMedium: {
    top: 234,
  },
  todaysReminders: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: Color.placeholder,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    width: 373,
    left: 0,
    top: 0,
  },
  todaysRemindersWrapper: {
    left: 0,
    top: 0,
    width: 373,
  },
  viewAllTasksInner: {
    top: 168,
    left: -46,
  },
  designChanges1: {
    color: Color.gray_200,
  },
  group5: {
    height: "58.13%",
    bottom: "41.87%",
    left: "0%",
  },
  daysAgo1: {
    top: "49.13%",
  },
  group3: {
    width: "38.35%",
    right: "38.87%",
  },
  cardMedium1: {
    top: 319,
  },
  group6: {
    width: "40.91%",
    right: "36.31%",
  },
  cardMedium2: {
    top: 407,
  },
  viewAllTasksItem: {
    top: 262,
  },
  ellipseIcon: {
    top: 347,
  },
  viewAllTasksChild1: {
    top: 430,
  },
  pm: {
    top: 283,
    left: 99,
    color: Color.mainText,
  },
  hours: {
    left: 165,
  },
  pm1: {
    left: 99,
  },
  min: {
    left: 164,
    top: 454,
    color: Color.mainText,
  },
  pm2: {
    top: 454,
  },
  text: {
    top: 744,
  },
  viewAllTasksChild2: {
    top: 113,
    left: 65,
    width: 45,
    height: 45,
    position: "absolute",
  },
  mo: {
    width: "8.57%",
    left: "0%",
  },
  tu: {
    left: "15.99%",
    color: Color.white100,
    width: "6.66%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyBoldBody2Bold_size,
    height: "49.65%",
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  we: {
    width: "9.52%",
    left: "30.34%",
  },
  th: {
    left: "45.28%",
    width: "6.66%",
    color: Color.unselectFieldStroke,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyBoldBody2Bold_size,
    height: "49.65%",
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  fr: {
    width: "5.71%",
    left: "61.77%",
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
    color: Color.white100,
    fontSize: FontSize.bodyBoldBody2Bold_size,
    textAlign: "left",
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
  group9: {
    height: "5.33%",
    width: "74.87%",
    top: "13.39%",
    right: "17.18%",
    bottom: "81.28%",
    left: "7.95%",
    position: "absolute",
  },
  arrowChevronRight: {
    top: 119,
    left: 342,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  bgIcon: {
    height: "3.91%",
    width: "84.62%",
    top: "6.87%",
    right: "7.69%",
    bottom: "89.22%",
    left: "7.69%",
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  iconSearch: {
    height: "2.25%",
    width: "4.87%",
    top: "7.88%",
    right: "85.51%",
    bottom: "89.87%",
    left: "9.62%",
    position: "absolute",
  },
  searchTask: {
    top: 65,
    left: 60,
    lineHeight: 20,
    color: Color.placeholder,
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    width: "100%",
  },
  editPlusCircle: {
    left: "82.31%",
    top: "90.17%",
    right: "4.87%",
    bottom: "3.91%",
    width: "12.82%",
    height: "5.92%",
    position: "absolute",
  },
  viewAllTasks: {
    backgroundColor: Color.white100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default ViewAllTasks;
