import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IconButton} from 'react-native-paper';
import Fab from "../components/Fab";

const Homepage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepage}>
      <View style={styles.menu} >
      <IconButton
    icon="menu"
    iconColor="#252525"
    size={50}
    onPress={() => navigation.navigate("Setting1")}
  />
  
  </View>
  <Fab />
     
      <View style={[styles.logo2, styles.logo2Layout]}>
        <Image
          style={[styles.ringIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ring.png")}
        />
      </View>
      <Image
        style={[styles.editPlusSquare, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/edit--plus-square.png")}
      />
      <Text style={[styles.hiVictoriaGot, styles.messageHereTypo]}>
        Hi Victoria, got a plan for today?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menu:{
    paddingTop:30,
  },
  iconPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
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
    textAlign: "center",
    color: "#1d232e",
    fontFamily: "SF Pro Text_regular",
    lineHeight: 21,
    letterSpacing: 0,
    top: "28.21%",
    fontSize: 16,
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
    letterSpacing: -1,
    fontSize: 23,
    marginTop: -10.84,
    top: "50%",
    textAlign: "center",
    color: "#1d232e",
    fontFamily: "SF Pro Text_regular",
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
  logo2Layout: {
    height: 50,
    position: "absolute",
  },
  messageHereTypo: {
    textAlign: "left",
    fontFamily: "Inter_regular",
    lineHeight: 20,
    position: "absolute",
  },
  statusBarIcon: {
    width: 385,
    height: 40,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  background1: {
    backgroundColor: "#d1d5db",
    left: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  background: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -67,
    bottom: 8,
    backgroundColor: "#1d232e",
    width: 134,
    height: 5,
    borderRadius: 100,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    height: "11.68%",
    top: "88.32%",
    left: "0%",
    position: "absolute",
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
    borderRadius: 5,
    right: 0,
    maxWidth: "100%",
    left: 0,
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
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: "#fcfcfe",
    borderRadius: 5,
    right: 0,
    bottom: 0,
    left: 0,
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
    backgroundColor: "#ccced3",
    width: 390,
    height: 303,
    left: "50%",
    bottom: 0,
    position: "absolute",
  },
  bgIcon: {
    borderRadius: 100,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  messageHere: {
    marginTop: -10,
    left: 16,
    fontSize: 14,
    color: "#adb5bd",
    top: "50%",
  },
  iconsend: {
    marginTop: -17,
    right: 8,
    width: 34,
    height: 34,
    top: "50%",
    position: "absolute",
  },
  inputSearchDefault: {
    marginLeft: -171,
    top: 486,
    width: 343,
    left: "50%",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  menuHamburger: {
    left: 30,
    top: 53,
    height: 24,
    width: 24,
    position: "absolute",
  },
  ringIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  logo2: {
    top: 119,
    left: 9,
    width: 50,
  },
  editPlusSquare: {
    height: "2.84%",
    width: "6.15%",
    top: "6.28%",
    right: "8.21%",
    bottom: "90.88%",
    left: "85.64%",
  },
  hiVictoriaGot: {
    top: 137,
    left: 71,
    color: "#212529",
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Inter_regular",
    lineHeight: 20,
  },
  homepage: {
    backgroundColor: "#fff",
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Homepage;

