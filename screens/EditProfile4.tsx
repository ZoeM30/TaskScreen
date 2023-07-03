import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";

const EditProfile4 = () => {
  return (
    <View style={styles.editProfile4}>
      <View style={[styles.navigationBar, styles.barPosition]}>
        <Text style={[styles.pageTitle, styles.signUpTypo]}>Edit Profile</Text>
        <Image
          style={[styles.statusBarIcon, styles.barPosition]}
          contentFit="cover"
          source={require("../assets/status-bar1.png")}
        />
      </View>
      <Image
        style={styles.coolicon}
        contentFit="cover"
        source={require("../assets/coolicon.png")}
      />
      <Image
        style={styles.editProfile4Child}
        contentFit="cover"
        source={require("../assets/ellipse-61.png")}
      />
      <Image
        style={styles.editPlusCircleOutline}
        contentFit="cover"
        source={require("../assets/edit--plus-circle-outline.png")}
      />
      <Text style={[styles.save, styles.saveTypo]}>Save</Text>
      <View style={[styles.mainButton, styles.mainPosition]} />
      <Text style={[styles.pleaseEnterThe, styles.placeholderTypo]}>
        Please enter the six digit code sent to your email
      </Text>
      <View style={styles.form}>
        <View style={styles.inputLayout}>
          <View style={[styles.inputFieldNotSelected1, styles.inputPosition]}>
            <View style={[styles.inputText, styles.inputPosition]}>
              <View style={styles.field}>
                <Text style={[styles.placeholder, styles.signUpLayout]}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputFieldNotSelected2, styles.inputLayout]}>
          <View style={[styles.inputFieldNotSelected1, styles.inputPosition]}>
            <View style={[styles.inputText, styles.inputPosition]}>
              <View style={styles.field}>
                <Text style={[styles.placeholder, styles.signUpLayout]}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputFieldNotSelected2, styles.inputLayout]}>
          <View style={[styles.inputFieldNotSelected1, styles.inputPosition]}>
            <View style={[styles.inputText, styles.inputPosition]}>
              <View style={styles.field}>
                <Text style={[styles.placeholder, styles.signUpLayout]}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputFieldNotSelected2, styles.inputLayout]}>
          <View style={[styles.inputFieldNotSelected1, styles.inputPosition]}>
            <View style={[styles.inputText, styles.inputPosition]}>
              <View style={styles.field}>
                <Text style={[styles.placeholder, styles.signUpLayout]}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputFieldNotSelected2, styles.inputLayout]}>
          <View style={[styles.inputFieldNotSelected1, styles.inputPosition]}>
            <View style={[styles.inputText, styles.inputPosition]}>
              <View style={styles.field}>
                <Text style={[styles.placeholder, styles.signUpLayout]}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputFieldNotSelected2, styles.inputLayout]}>
          <View style={[styles.inputFieldNotSelected1, styles.inputPosition]}>
            <View style={[styles.inputText, styles.inputPosition]}>
              <View style={styles.field}>
                <Text style={[styles.placeholder, styles.signUpLayout]}>1</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.letsVerifyYour, styles.saveTypo]}>
        Let’s verify your email
      </Text>
      <View style={[styles.mainButton1, styles.mainPosition]}>
        <View style={styles.button}>
          <Text style={[styles.signUp, styles.signUpLayout]}>Verify</Text>
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
  signUpTypo: {
    textAlign: "center",
    fontFamily: "Inter_medium",
    fontWeight: "500",
  },
  saveTypo: {
    textAlign: "left",
    fontFamily: "Inter_medium",
    fontWeight: "500",
    position: "absolute",
  },
  mainPosition: {
    marginLeft: -163,
    left: "50%",
    position: "absolute",
  },
  placeholderTypo: {
    fontFamily: "Inter_regular",
    textAlign: "left",
  },
  inputPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  signUpLayout: {
    lineHeight: 24,
    fontSize: 16,
    letterSpacing: 0,
  },
  inputLayout: {
    height: 40,
    width: 40,
  },
  pageTitle: {
    marginLeft: -122,
    fontSize: 20,
    width: 244,
    color: "#1d232e",
    lineHeight: 28,
    textAlign: "center",
    fontFamily: "Inter_medium",
    fontWeight: "500",
    letterSpacing: -1,
    left: "50%",
    top: 52,
    position: "absolute",
  },
  statusBarIcon: {
    width: 375,
    height: 44,
    overflow: "hidden",
  },
  navigationBar: {
    right: 0,
    height: 88,
    backgroundColor: "#fff",
    left: 0,
    top: 0,
  },
  coolicon: {
    top: 59,
    left: 26,
    width: 7,
    height: 12,
    position: "absolute",
  },
  editProfile4Child: {
    marginTop: -312,
    top: "50%",
    left: 24,
    width: 72,
    height: 72,
    position: "absolute",
  },
  editPlusCircleOutline: {
    height: "2.84%",
    width: "6.15%",
    top: "19.55%",
    right: "75.38%",
    bottom: "77.61%",
    left: "18.46%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  save: {
    marginLeft: 132,
    width: 50,
    letterSpacing: 0,
    fontSize: 18,
    color: "#1d232e",
    lineHeight: 28,
    left: "50%",
    textAlign: "left",
    top: 52,
  },
  mainButton: {
    top: 472,
  },
  pleaseEnterThe: {
    marginLeft: -162,
    top: 292,
    width: 300,
    letterSpacing: 0,
    fontSize: 18,
    color: "#1d232e",
    lineHeight: 28,
    left: "50%",
    position: "absolute",
  },
  placeholder: {
    color: "#adb5bd",
    fontFamily: "Inter_regular",
    textAlign: "left",
  },
  field: {
    alignSelf: "stretch",
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
  },
  inputText: {
    height: "140%",
    top: "-20%",
    bottom: "-20%",
    backgroundColor: "#e9ecef",
    borderRadius: 8,
  },
  inputFieldNotSelected1: {
    height: "100%",
    top: "0%",
    bottom: "0%",
  },
  inputFieldNotSelected2: {
    marginLeft: 16,
  },
  form: {
    marginLeft: -184,
    top: 364,
    width: 368,
    padding: 24,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  letsVerifyYour: {
    top: 228,
    left: 33,
    fontSize: 32,
    lineHeight: 40,
    color: "#212529",
    width: 327,
    letterSpacing: -1,
    textAlign: "left",
  },
  signUp: {
    color: "#ced4da",
    textAlign: "center",
    fontFamily: "Inter_medium",
    fontWeight: "500",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#000",
    paddingHorizontal: 32,
    paddingVertical: 16,
    alignItems: "center",
    width: 327,
    borderRadius: 8,
  },
  mainButton1: {
    top: 474,
  },
  editProfile4: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#fff",
  },
});

export default EditProfile4;
