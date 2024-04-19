import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone131412 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone131414}>
      <View style={[styles.iphone131414Child, styles.iphone131414Border]} />
      <View style={[styles.iphone131414Item, styles.rectangleViewPosition]} />
      <Text style={[styles.wel10000001sp24WellnessAn, styles.journalLogsTypo]}>
        (WEL1000-0001.sp24) Wellness and Self-Care
      </Text>
      <Text style={[styles.journalLogs, styles.wrapperLayout]}>
        Journal Logs
      </Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("IPhone131411")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
      </Pressable>
      <Text style={[styles.newTask, styles.enter1Typo]}>New Task:</Text>
      <View style={[styles.iphone131414Inner, styles.iphone131414Border]} />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-64.png")}
      />
      <Pressable
        style={styles.enter}
        onPress={() => navigation.navigate("IPhone131411")}
      >
        <Text style={[styles.enter1, styles.enter1Typo]}>Enter</Text>
      </Pressable>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone131414Border: {
    borderStyle: "solid",
    position: "absolute",
  },
  rectangleViewPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  journalLogsTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  wrapperLayout: {
    height: 20,
    position: "absolute",
  },
  textLayout: {
    height: 18,
    fontSize: FontSize.size_mini,
  },
  enter1Typo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  iphone131414Child: {
    top: 114,
    backgroundColor: Color.colorGainsboro_100,
    borderColor: Color.colorDarkgray_200,
    borderWidth: 1,
    width: 343,
    height: 175,
    left: 20,
  },
  iphone131414Item: {
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
  journalLogs: {
    top: 51,
    left: 121,
    fontSize: FontSize.size_base,
    width: 147,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  text: {
    top: 18,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 53,
    textAlign: "left",
    height: 18,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    left: 25,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 59,
    width: 10,
    left: 20,
  },
  newTask: {
    top: 126,
    left: 37,
    fontSize: FontSize.size_5xl,
    width: 181,
    height: 41,
    position: "absolute",
  },
  iphone131414Inner: {
    top: 162,
    left: 41,
    borderColor: Color.colorBlack,
    borderRightWidth: 1,
    width: 1,
    height: 11,
  },
  rectangleIcon: {
    top: 251,
    left: 268,
    borderRadius: Border.br_81xl,
    width: 83,
    height: 29,
    position: "absolute",
  },
  enter1: {
    width: 58,
    height: 18,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
  },
  enter: {
    left: 287,
    top: 257,
    position: "absolute",
  },
  rectangleView: {
    top: 760,
    backgroundColor: Color.colorGainsboro_200,
    height: 84,
  },
  iphone131414: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone131412;
