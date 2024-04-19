import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone131413 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone131415}>
      <View style={[styles.iphone131415Child, styles.iphone131415Position]} />
      <Text
        style={[styles.wel10000001sp24WellnessAn, styles.friendsSharedFlexBox]}
      >
        (WEL1000-0001.sp24) Wellness and Self-Care
      </Text>
      <Text
        style={[styles.friendsShared, styles.wrapperLayout]}
      >{`Friends & Shared Progress`}</Text>
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
      <View style={[styles.iphone131415Item, styles.iphone131415Position]} />
      <View style={[styles.iphone131415Inner, styles.rectangleViewBorder]} />
      <Text style={[styles.progressUpdates, styles.textFlexBox]}>
        Progress Updates
      </Text>
      <View style={[styles.rectangleView, styles.rectanglePosition]} />
      <Text style={[styles.jessicaCompletedAllContainer, styles.textFlexBox]}>
        <Text style={styles.jessica}>Jessica</Text>
        <Text style={styles.completedAllOf}>{`: completed all of her daily tasks

`}</Text>
        <Text style={styles.jessica}>Dave</Text>
        <Text
          style={styles.completedAllOf}
        >{`: added weekly task “visit the Lakefront”

`}</Text>
        <Text style={styles.jessica}>Mark</Text>
        <Text style={styles.completedAllOf}>{`: completed daily task “walk dog”

`}</Text>
        <Text style={styles.jessica}>Emma</Text>
        <Text
          style={styles.completedAllOf}
        >{`: completed monthly task “read a new book”

`}</Text>
        <Text style={styles.jessica}>Jessica</Text>
        <Text
          style={styles.completedAllOf}
        >{`: added daily task “finish homework 5”

`}</Text>
        <Text style={styles.jessica}>Rob</Text>
        <Text style={styles.completedAllOf}>
          : added weekly task “study for calculus”
        </Text>
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.rectanglePosition]}
        onPress={() => navigation.navigate("IPhone131414")}
      >
        <View style={styles.groupChild} />
        <Text style={[styles.myFriends, styles.settingsTypo]}>My Friends</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("IPhone131415")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.settings, styles.settingsTypo]}>Settings</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone131415Position: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  friendsSharedFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
  },
  wrapperLayout: {
    height: 20,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  rectangleViewBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  rectanglePosition: {
    left: 31,
    position: "absolute",
  },
  settingsTypo: {
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupLayout: {
    width: 124,
    height: 57,
    position: "absolute",
  },
  iphone131415Child: {
    backgroundColor: Color.colorMediumslateblue,
    height: 91,
    top: 0,
    left: 0,
    position: "absolute",
  },
  wel10000001sp24WellnessAn: {
    top: 71,
    fontSize: FontSize.size_smi,
    width: 339,
    height: 17,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 25,
    textAlign: "center",
    position: "absolute",
  },
  friendsShared: {
    top: 51,
    left: 78,
    width: 243,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorWhite,
  },
  text: {
    top: 18,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 53,
    height: 18,
    color: Color.colorWhite,
    textAlign: "left",
    left: 25,
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
  iphone131415Item: {
    top: 760,
    backgroundColor: Color.colorGainsboro_200,
    height: 84,
    left: 0,
    position: "absolute",
  },
  iphone131415Inner: {
    top: 204,
    left: 30,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 326,
    height: 54,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  progressUpdates: {
    top: 212,
    left: 54,
    fontSize: 32,
    width: 289,
    height: 31,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  rectangleView: {
    top: 258,
    borderColor: "#797979",
    width: 325,
    height: 420,
    borderWidth: 1,
    borderStyle: "solid",
    left: 31,
    backgroundColor: Color.colorWhite,
  },
  jessica: {
    color: Color.colorBrown_100,
  },
  completedAllOf: {
    color: Color.colorBlack,
  },
  jessicaCompletedAllContainer: {
    top: 270,
    left: 39,
    width: 304,
    height: 396,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  groupChild: {
    width: 187,
    height: 57,
    backgroundColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
  },
  myFriends: {
    top: 14,
    left: 33,
    width: 162,
    height: 45,
  },
  rectangleParent: {
    width: 195,
    height: 59,
    top: 112,
  },
  groupItem: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 124,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  settings: {
    top: 15,
    left: 16,
    width: 108,
    height: 28,
  },
  rectangleGroup: {
    left: 232,
    top: 112,
  },
  iphone131415: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone131413;
