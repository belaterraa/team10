import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Switch } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone131415 = () => {
  const [rectangleSwitchSwitchValueState, setRectangleSwitchSwitchValueState] =
    useState(false);
  const [
    rectangleSwitch1SwitchValueState,
    setRectangleSwitch1SwitchValueState,
  ] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone131417}>
      <View style={styles.iphone131417Child} />
      <View style={[styles.iphone131417Item, styles.iphone131417Position]} />
      <Text style={[styles.wel10000001sp24WellnessAn, styles.settingsTypo]}>
        (WEL1000-0001.sp24) Wellness and Self-Care
      </Text>
      <Text style={[styles.settings, styles.wrapperLayout]}>Settings</Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("IPhone131413")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
      </Pressable>
      <View style={[styles.iphone131417Inner, styles.iphone131417Position]} />
      <View style={styles.lineView} />
      <View
        style={[styles.iphone131417Child1, styles.iphone131417ChildLayout]}
      />
      <View
        style={[styles.iphone131417Child2, styles.iphone131417ChildLayout]}
      />
      <Text style={styles.settings1}>Settings</Text>
      <Text style={[styles.shareAddedTasks, styles.shareTypo]}>
        Share added tasks
      </Text>
      <Text style={[styles.shareCompletedTasks, styles.shareTypo]}>
        Share completed tasks
      </Text>
      <Switch
        style={[styles.rectangleSwitch, styles.rectangleSwitchLayout]}
        value={rectangleSwitchSwitchValueState}
        onValueChange={setRectangleSwitchSwitchValueState}
        trackColor={{ false: "#939393", true: "#55ca38" }}
      />
      <Switch
        style={[styles.iphone131417Child3, styles.rectangleSwitchLayout]}
        value={rectangleSwitch1SwitchValueState}
        onValueChange={setRectangleSwitch1SwitchValueState}
        trackColor={{ false: "#939393", true: "#55ca38" }}
      />
      {/* <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-17.png")}
      />
      <Image
        style={[styles.iphone131417Child4, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-17.png")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  iphone131417Position: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  settingsTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  wrapperLayout: {
    height: 20,
    position: "absolute",
  },
  iphone131417ChildLayout: {
    width: 329,
    left: 30,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    position: "absolute",
  },
  shareTypo: {
    height: 51,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    left: 30,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleSwitchLayout: {
    height: 41,
    width: 74,
    borderRadius: Border.br_81xl,
    left: 270,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 32,
    width: 32,
    left: 307,
    position: "absolute",
  },
  iphone131417Child: {
    top: 168,
    left: 18,
    borderRadius: 25,
    backgroundColor: "rgba(217, 217, 217, 0.61)",
    width: 355,
    height: 226,
    position: "absolute",
  },
  iphone131417Item: {
    top: 0,
    backgroundColor: Color.colorMediumslateblue,
    height: 91,
  },
  wel10000001sp24WellnessAn: {
    top: 71,
    fontSize: FontSize.size_smi,
    width: 339,
    height: 17,
    left: 25,
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  settings: {
    top: 51,
    left: 78,
    fontSize: FontSize.size_base,
    width: 243,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  text: {
    top: 18,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 53,
    height: 18,
    textAlign: "left",
    color: Color.colorWhite,
    left: 25,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 20,
    top: 59,
    width: 10,
  },
  iphone131417Inner: {
    top: 760,
    backgroundColor: Color.colorGainsboro_200,
    height: 84,
  },
  lineView: {
    top: 155,
    left: 4,
    width: 392,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    position: "absolute",
  },
  iphone131417Child1: {
    top: 249,
  },
  iphone131417Child2: {
    top: 336,
  },
  settings1: {
    top: 114,
    left: 10,
    fontSize: FontSize.size_5xl,
    width: 344,
    height: 28,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  shareAddedTasks: {
    top: 198,
    width: 218,
  },
  shareCompletedTasks: {
    top: 285,
    width: 240,
  },
  rectangleSwitch: {
    top: 191,
  },
  iphone131417Child3: {
    top: 278,
  },
  ellipseIcon: {
    top: 196,
  },
  iphone131417Child4: {
    top: 283,
  },
  iphone131417: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone131415;
