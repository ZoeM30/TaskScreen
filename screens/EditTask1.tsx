import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const EditTask1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editTask}>
      <View style={[styles.navigationBar, styles.barPosition]}>
        <Text style={styles.pageTitle}>Edit Task</Text>
        <Image
          style={[styles.statusBarIcon, styles.barPosition]}
          contentFit="cover"
          source={require("../assets/status-bar.png")}
        />
      </View>
      <Image
        style={styles.coolicon}
        contentFit="cover"
        source={require("../assets/coolicon.png")}
      />
      <View style={styles.editTaskChild} />
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.startTime, styles.timeTypo]}>Start Time</Text>
      <Pressable
        style={[styles.description, styles.startTimePosition]}
        onPress={() => navigation.navigate("EditTaskDescription")}
      >
        <Text style={styles.timeTypo}>Description</Text>
      </Pressable>
      <Text style={[styles.dueTime, styles.timeTypo]}>Due Time</Text>
      <Image
        style={[styles.editTaskItem, styles.editLayout]}
        contentFit="cover"
        source={require("../assets/vector-13.png")}
      />
      <Image
        style={[styles.editTaskInner, styles.editLayout]}
        contentFit="cover"
        source={require("../assets/vector-13.png")}
      />
      <Text style={[styles.houseCleaning, styles.jun292023Typo]}>
        House Cleaning
      </Text>
      <Text style={[styles.date, styles.nameTypo]}>Date</Text>
      <Image
        style={[styles.vectorIcon, styles.editLayout]}
        contentFit="cover"
        source={require("../assets/vector-13.png")}
      />
      <Text style={[styles.jun292023, styles.jun292023Typo]}>Jun 29, 2023</Text>
      <Text style={[styles.text, styles.textTypo]}>13:22</Text>
      <Text style={[styles.text1, styles.textTypo]}>14:22</Text>
      <Text style={[styles.notification, styles.timeTypo]}>Notification</Text>
      <Image
        style={[styles.notificationIcon, styles.groupViewLayout]}
        contentFit="cover"
        source={require("../assets/notification.png")}
      />
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={styles.groupChild} />
      </View>
      <Image
        style={[styles.editTaskChild1, styles.editLayout]}
        contentFit="cover"
        source={require("../assets/vector-13.png")}
      />
      <Text style={styles.save}>Save</Text>
      <View style={styles.cursor}>
        <View style={[styles.cursorChild, styles.backgroundPosition]} />
      </View>
      <View style={styles.iosKeyboard}>
        <View style={[styles.background, styles.backgroundPosition]}>
          <View style={[styles.background1, styles.backgroundPosition]} />
        </View>
        <View style={[styles.homeIndicator, styles.backgroundPosition]}>
          <View style={styles.homeIndicator1} />
        </View>
        <View style={styles.keys}>
          <Image
            style={styles.dictationIcon}
            contentFit="cover"
            source={require("../assets/dictation1.png")}
          />
          <Image
            style={styles.emojiIcon}
            contentFit="cover"
            source={require("../assets/emoji.png")}
          />
          <View style={[styles.return, styles.viewPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle4.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Go</Text>
          </View>
          <View style={[styles.space, styles.viewPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle1.png")}
            />
            <Text style={[styles.label1, styles.labelTypo]}>space</Text>
          </View>
          <View style={[styles.view, styles.viewPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle5.png")}
            />
            <Text style={[styles.label2, styles.labelTypo]}>123</Text>
          </View>
          <View style={[styles.delete, styles.shiftPosition]}>
            <View style={[styles.background, styles.backgroundPosition]}>
              <Image
                style={[styles.rectangleIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle3.png")}
              />
              <Text style={[styles.label3, styles.labelTypo]}>{` `}</Text>
            </View>
            <Image
              style={styles.deleteButtonIcon}
              contentFit="cover"
              source={require("../assets/delete-button.png")}
            />
          </View>
          <View style={[styles.shift, styles.shiftPosition]}>
            <View style={[styles.background, styles.backgroundPosition]}>
              <View style={styles.rectangleShadowBox} />
              <Text style={[styles.symbol, styles.symbolTypo]}>{` `}</Text>
            </View>
            <Image
              style={[styles.shiftIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/shift.png")}
            />
          </View>
          <View style={[styles.m, styles.mPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol1, styles.symbolTypo]}>M</Text>
          </View>
          <View style={[styles.n, styles.nPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>N</Text>
          </View>
          <View style={[styles.b, styles.bPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>B</Text>
          </View>
          <View style={[styles.v, styles.vPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>V</Text>
          </View>
          <View style={[styles.c, styles.cPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>C</Text>
          </View>
          <View style={[styles.x, styles.xPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>X</Text>
          </View>
          <View style={[styles.z, styles.zPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>Z</Text>
          </View>
          <View style={[styles.l, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>L</Text>
          </View>
          <View style={[styles.k, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>K</Text>
          </View>
          <View style={[styles.j, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>J</Text>
          </View>
          <View style={[styles.h, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>H</Text>
          </View>
          <View style={[styles.g, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>G</Text>
          </View>
          <View style={[styles.f, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>F</Text>
          </View>
          <View style={[styles.d, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>D</Text>
          </View>
          <View style={[styles.s, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>S</Text>
          </View>
          <View style={[styles.a, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>A</Text>
          </View>
          <View style={[styles.p, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>P</Text>
          </View>
          <View style={[styles.o, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol18, styles.symbolTypo]}>O</Text>
          </View>
          <View style={[styles.i, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol19, styles.symbolTypo]}>I</Text>
          </View>
          <View style={[styles.u, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>U</Text>
          </View>
          <View style={[styles.y, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>Y</Text>
          </View>
          <View style={[styles.t, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>T</Text>
          </View>
          <View style={[styles.r, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol23, styles.symbolTypo]}>R</Text>
          </View>
          <View style={[styles.e, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>E</Text>
          </View>
          <View style={[styles.w, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol25, styles.symbolTypo]}>W</Text>
          </View>
          <View style={[styles.q, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol18, styles.symbolTypo]}>Q</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barPosition: {
    left: 0,
    top: 0,
    position: "absolute",
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
  },
  startTimePosition: {
    left: 43,
    position: "absolute",
  },
  editLayout: {
    height: 1,
    width: 332,
    position: "absolute",
  },
  jun292023Typo: {
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
  groupViewLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  backgroundPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  viewPosition: {
    bottom: "21.24%",
    top: "62.55%",
    height: "16.22%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  labelTypo: {
    color: Color.neutral500,
    fontFamily: FontFamily.sFProTextRegular,
    lineHeight: 21,
    letterSpacing: 0,
    top: "28.21%",
    fontSize: FontSize.bodyBoldBody2Bold_size,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  shiftPosition: {
    bottom: "42.08%",
    top: "41.7%",
    width: "11.38%",
    height: "16.22%",
    position: "absolute",
  },
  symbolTypo: {
    fontSize: FontSize.size_3xl_5,
    top: "50%",
    marginTop: -10.84,
    color: Color.neutral500,
    fontFamily: FontFamily.sFProTextRegular,
    textAlign: "center",
    letterSpacing: -1,
    position: "absolute",
  },
  mPosition: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  nPosition: {
    left: "66.12%",
    right: "25.2%",
  },
  bPosition: {
    left: "55.83%",
    right: "35.5%",
  },
  vPosition: {
    left: "45.8%",
    right: "45.53%",
  },
  cPosition: {
    left: "35.5%",
    right: "55.83%",
  },
  xPosition: {
    left: "25.47%",
    right: "65.85%",
  },
  zPosition: {
    left: "15.18%",
    right: "76.15%",
  },
  lPosition: {
    bottom: "62.93%",
    top: "20.85%",
    width: "8.67%",
    height: "16.22%",
    position: "absolute",
  },
  pPosition: {
    bottom: "83.78%",
    width: "8.67%",
    height: "16.22%",
    top: "0%",
    position: "absolute",
  },
  pageTitle: {
    marginLeft: -122,
    width: 244,
    textAlign: "center",
    color: Color.whitesmoke_100,
    fontFamily: FontFamily.bodyBoldBody2Bold,
    fontWeight: "500",
    lineHeight: 28,
    letterSpacing: -1,
    fontSize: FontSize.headingHeading4_size,
    top: 52,
    left: "50%",
    position: "absolute",
  },
  statusBarIcon: {
    width: 375,
    height: 44,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  navigationBar: {
    height: 88,
    right: 0,
    left: 0,
    top: 0,
    backgroundColor: Color.buttonBg,
  },
  coolicon: {
    top: 59,
    width: 7,
    height: 12,
    left: 26,
    position: "absolute",
  },
  editTaskChild: {
    top: 316,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white100,
    shadowColor: "rgba(0, 0, 0, 0.02)",
    shadowRadius: 23,
    elevation: 23,
    height: 617,
    width: 390,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -7,
    },
    left: 0,
    position: "absolute",
  },
  name: {
    top: 97,
  },
  startTime: {
    left: 43,
    position: "absolute",
    top: 325,
    color: Color.placeholder,
  },
  description: {
    top: 413,
  },
  dueTime: {
    left: 166,
    top: 325,
    color: Color.placeholder,
    position: "absolute",
  },
  editTaskItem: {
    top: 187,
    left: 29,
    width: 332,
  },
  editTaskInner: {
    left: 29,
    width: 332,
    top: 413,
  },
  houseCleaning: {
    top: 142,
  },
  date: {
    top: 202,
  },
  vectorIcon: {
    top: 292,
    left: 29,
    width: 332,
  },
  jun292023: {
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
    color: Color.placeholder,
    position: "absolute",
  },
  notificationIcon: {
    top: 366,
    left: 303,
  },
  groupChild: {
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
  editTaskChild1: {
    marginLeft: -166,
    top: 492,
    left: "50%",
  },
  save: {
    marginLeft: 124,
    width: 56,
    fontSize: FontSize.bodyBoldBody2Bold_size,
    textAlign: "center",
    color: Color.whitesmoke_100,
    fontFamily: FontFamily.bodyBoldBody2Bold,
    fontWeight: "500",
    lineHeight: 28,
    letterSpacing: -1,
    left: "50%",
    top: 52,
    position: "absolute",
  },
  cursorChild: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    backgroundColor: Color.buttonBg,
  },
  cursor: {
    top: 458,
    left: 42,
    width: 1,
    height: 30,
    position: "absolute",
  },
  background1: {
    backgroundColor: Color.lightgray_100,
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  background: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  homeIndicator1: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.neutral500,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    height: "11.68%",
    top: "88.32%",
    left: "0%",
  },
  dictationIcon: {
    width: 16,
    height: 26,
  },
  emojiIcon: {
    width: 28,
    height: 28,
  },
  rectangleIcon: {
    bottom: -1,
    borderRadius: Border.br_8xs_6,
    maxWidth: "100%",
    left: 0,
    right: 0,
    top: 0,
  },
  label: {
    width: 92,
  },
  return: {
    width: "23.85%",
    left: "76.15%",
    right: "0%",
  },
  label1: {
    width: 189,
  },
  space: {
    width: "49.32%",
    right: "25.47%",
    left: "25.2%",
  },
  label2: {
    width: 90,
  },
  view: {
    width: "23.58%",
    right: "76.42%",
    left: "0%",
  },
  label3: {
    width: 44,
  },
  deleteButtonIcon: {
    height: 18,
    width: 24,
  },
  delete: {
    left: "88.62%",
    right: "0%",
  },
  rectangleShadowBox: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_8xs_6,
    bottom: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -7,
    },
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  symbol: {
    left: "48.07%",
  },
  shiftIcon: {
    height: "39.18%",
    width: "44.95%",
    top: "29.05%",
    right: "27.29%",
    bottom: "31.77%",
    left: "27.76%",
  },
  shift: {
    right: "88.62%",
    left: "0%",
  },
  symbol1: {
    left: "18.75%",
  },
  m: {
    right: "14.91%",
    left: "76.42%",
  },
  symbol2: {
    left: "25%",
  },
  n: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  symbol3: {
    left: "28.13%",
  },
  b: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  v: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  c: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  x: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  z: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  symbol8: {
    left: "31.25%",
  },
  l: {
    right: "4.88%",
    left: "86.45%",
  },
  k: {
    right: "15.18%",
    left: "76.15%",
  },
  j: {
    left: "66.12%",
    right: "25.2%",
  },
  h: {
    left: "55.83%",
    right: "35.5%",
  },
  g: {
    left: "45.8%",
    right: "45.53%",
  },
  f: {
    left: "35.5%",
    right: "55.83%",
  },
  d: {
    left: "25.47%",
    right: "65.85%",
  },
  s: {
    left: "15.18%",
    right: "76.15%",
  },
  a: {
    right: "86.18%",
    left: "5.15%",
  },
  p: {
    left: "91.33%",
    right: "0%",
  },
  symbol18: {
    left: "21.88%",
  },
  o: {
    right: "10.03%",
    left: "81.3%",
  },
  symbol19: {
    left: "40.63%",
  },
  i: {
    right: "20.33%",
    left: "71%",
  },
  u: {
    right: "30.35%",
    left: "60.98%",
  },
  y: {
    right: "40.65%",
    left: "50.68%",
  },
  t: {
    right: "50.68%",
    left: "40.65%",
  },
  symbol23: {
    left: "28.12%",
  },
  r: {
    right: "60.98%",
    left: "30.35%",
  },
  e: {
    right: "71%",
    left: "20.33%",
  },
  symbol25: {
    left: "15.63%",
  },
  w: {
    right: "81.3%",
    left: "10.03%",
  },
  q: {
    right: "91.33%",
    left: "0%",
  },
  keys: {
    height: "89%",
    width: "98.4%",
    top: "2.75%",
    right: "0.8%",
    bottom: "8.25%",
    left: "0.8%",
    position: "absolute",
  },
  iosKeyboard: {
    marginLeft: -195,
    backgroundColor: Color.lightgray_200,
    height: 303,
    bottom: 0,
    width: 390,
    left: "50%",
    position: "absolute",
  },
  editTask: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.buttonBg,
  },
});

export default EditTask1;
