import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13146 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13144}>
      <View style={[styles.iphone13144Child, styles.rectangleViewLayout]} />
      <Text
        style={[styles.wel10000001sp24WellnessAn, styles.announcementsTypo]}
      >
        (WEL1000-0001.sp24) Wellness and Self-Care
      </Text>
      <Text style={[styles.announcements, styles.wrapperLayout]}>
        Announcements
      </Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("IPhone13141")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
      </Pressable>
      <View style={[styles.iphone13144Item, styles.iphone13144Layout]} />
      <View style={[styles.iphone13144Inner, styles.iphone13144Layout]} />
      <View style={[styles.lineView, styles.iphone13144Layout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Pressable
        style={[styles.groupParent, styles.groupLayout3]}
        onPress={() => navigation.navigate("IPhone13147")}
      >
        <Image
          style={[styles.groupChild, styles.groupLayout2]}
          contentFit="cover"
          source={require("../assets/group-7.png")}
        />
        <Text style={[styles.freeYogaOn, styles.freeYogaOnTypo]}>
          Free Yoga on Landis Green
        </Text>
        <Text style={[styles.lastPostMar, styles.lastTypo]}>
          Last post Mar 22nd, 2024 at 6:59AM
        </Text>
        <View style={[styles.groupItem, styles.groupChildBg]} />
      </Pressable>
      <Pressable
        style={[styles.groupContainer, styles.groupLayout1]}
        onPress={() => navigation.navigate("IPhone13148")}
      >
        <Image
          style={[styles.groupInner, styles.groupLayout2]}
          contentFit="cover"
          source={require("../assets/group-7.png")}
        />
        <Text style={[styles.mentalHealthFair, styles.lastPostFebPosition]}>
          Mental Health Fair at the Union
        </Text>
        <Text style={[styles.lastPostFeb, styles.lastPostFebPosition]}>
          Last post Feb 1st, 2024 at 7:06AM
        </Text>
        <View style={[styles.groupChild1, styles.groupLayout1]} />
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.groupLayout]}
        onPress={() => navigation.navigate("IPhone13149")}
      >
        <Image
          style={[styles.groupIcon, styles.groupLayout2]}
          contentFit="cover"
          source={require("../assets/group-7.png")}
        />
        <Text style={[styles.wellnessTablingOutside, styles.lastClr]}>
          Wellness Tabling outside HCB
        </Text>
        <Text style={[styles.lastPostJan, styles.lastTypo]}>
          Last post Jan 19th, 2024 at 8:32AM
        </Text>
        <View style={[styles.groupChild2, styles.groupLayout]} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewLayout: {
    width: 390,
    position: "absolute",
  },
  announcementsTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  wrapperLayout: {
    height: 20,
    position: "absolute",
  },
  iphone13144Layout: {
    height: 1,
    width: 392,
    borderTopWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    position: "absolute",
  },
  groupLayout3: {
    height: 64,
    width: 385,
    left: 0,
    position: "absolute",
  },
  groupLayout2: {
    height: 19,
    width: 20,
    position: "absolute",
  },
  freeYogaOnTypo: {
    height: 28,
    width: 249,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_mini,
  },
  lastTypo: {
    height: 21,
    width: 209,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  groupChildBg: {
    backgroundColor: Color.colorGainsboro_300,
    top: 0,
  },
  groupLayout1: {
    height: 67,
    width: 385,
    left: 0,
    position: "absolute",
  },
  lastPostFebPosition: {
    left: 41,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  groupLayout: {
    height: 69,
    width: 385,
    left: 0,
    position: "absolute",
  },
  lastClr: {
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  iphone13144Child: {
    backgroundColor: Color.colorMediumslateblue,
    height: 91,
    left: 0,
    top: 0,
    width: 390,
  },
  wel10000001sp24WellnessAn: {
    top: 71,
    fontSize: FontSize.size_smi,
    width: 339,
    height: 17,
    left: 25,
    position: "absolute",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  announcements: {
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
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    width: 53,
    height: 18,
    fontSize: FontSize.size_mini,
    top: 18,
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
  iphone13144Item: {
    top: 161,
    left: 0,
  },
  iphone13144Inner: {
    top: 311,
    left: 0,
  },
  lineView: {
    top: 235,
    left: -1,
  },
  rectangleView: {
    top: 760,
    left: 1,
    backgroundColor: Color.colorGainsboro_200,
    height: 84,
  },
  groupChild: {
    top: 26,
    left: 15,
    width: 20,
  },
  freeYogaOn: {
    top: 21,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
    left: 25,
  },
  lastPostMar: {
    top: 43,
    left: 49,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  groupItem: {
    height: 64,
    width: 385,
    left: 0,
    position: "absolute",
  },
  groupParent: {
    top: 93,
  },
  groupInner: {
    top: 22,
    left: 14,
  },
  mentalHealthFair: {
    top: 19,
    height: 28,
    width: 249,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_mini,
  },
  lastPostFeb: {
    top: 41,
    height: 21,
    width: 209,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  groupChild1: {
    backgroundColor: Color.colorGainsboro_300,
    top: 0,
  },
  groupContainer: {
    top: 163,
  },
  groupIcon: {
    top: 25,
    left: 15,
    width: 20,
  },
  wellnessTablingOutside: {
    left: 39,
    width: 248,
    height: 38,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    top: 18,
  },
  lastPostJan: {
    top: 42,
    left: 45,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  groupChild2: {
    backgroundColor: Color.colorGainsboro_300,
    top: 0,
  },
  groupPressable: {
    top: 238,
  },
  iphone13144: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13146;
