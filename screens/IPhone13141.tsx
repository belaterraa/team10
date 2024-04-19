import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const IPhone13141 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13142}>
      <View style={[styles.iphone13142Child, styles.iphone13142Position]} />
      <Image
        style={[styles.iphone13142Item, styles.groupChildLayout1]}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Pressable
        style={styles.vectorParent}
        onPress={() => navigation.navigate("IPhone1314")}
      >
        <Image
          style={[styles.groupChild, styles.groupChildLayout1]}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </Pressable>
      <Text style={[styles.wel10000001sp24, styles.backTypo]}>
        WEL1000-0001.sp24
      </Text>
      <View style={[styles.iphone13142Inner, styles.iphone13142Position]} />
      <Text style={[styles.wel10000001sp24WellnessAn, styles.spring1Typo]}>
        (WEL1000-0001.sp24) Wellness and Self-Care
      </Text>
      <Text style={[styles.spring1, styles.spring1Typo]}>2024 Spring- 1</Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupItemLayout]}
        onPress={() => navigation.navigate("IPhone1314")}
      >
        <View style={[styles.groupItem, styles.groupItemBorder]} />
        <Image
          style={[styles.groupInner, styles.groupLayout1]}
          contentFit="cover"
          source={require("../assets/vector-3.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.frontPage, styles.homeTypo]}>Front Page</Text>
      </Pressable>
      <View style={[styles.rectangleView, styles.iphone13142Position]} />
      <View style={[styles.rectangleGroup, styles.groupParentLayout1]}>
        <Pressable
          style={[styles.rectanglePressable, styles.groupParentLayout1]}
          onPress={() => navigation.navigate("IPhone131411")}
        />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector-3.png")}
        />
        <Text style={[styles.journalLogs, styles.syllabusPosition]}>
          Journal Logs
        </Text>
        <View style={[styles.groupParent, styles.groupParentLayout]}>
          <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
            <View style={styles.groupChild1} />
            <View style={[styles.groupChild2, styles.groupChildLayout]} />
            <View style={[styles.groupChild3, styles.groupChildLayout]} />
          </View>
          <View style={[styles.groupChild4, styles.groupChildLayout]} />
        </View>
      </View>
      <View style={[styles.groupView, styles.groupParentLayout1]}>
        <Pressable
          style={[styles.rectanglePressable, styles.groupParentLayout1]}
          onPress={() => navigation.navigate("IPhone131410")}
        />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector-3.png")}
        />
        <Text style={[styles.resources, styles.resourcesPosition]}>
          Resources
        </Text>
        <Image
          style={[styles.groupIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentLayout1]}>
        <Pressable
          style={[styles.rectanglePressable, styles.groupParentLayout1]}
          onPress={() => navigation.navigate("IPhone13145")}
        />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector-3.png")}
        />
        <Text style={[styles.syllabus, styles.syllabusPosition]}>Syllabus</Text>
        <Image
          style={[styles.groupChild9, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-3.png")}
        />
      </View>
      <View style={[styles.rectangleParent2, styles.groupParentLayout1]}>
        <Pressable
          style={[styles.rectanglePressable, styles.groupParentLayout1]}
          onPress={() => navigation.navigate("IPhone13146")}
        />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector-3.png")}
        />
        <Text style={[styles.announcements, styles.syllabusPosition]}>
          Announcements
        </Text>
        <Image
          style={styles.groupChild12}
          contentFit="cover"
          source={require("../assets/group-7.png")}
        />
      </View>
      <View style={[styles.rectangleParent3, styles.groupParentLayout1]}>
        <Pressable
          style={[styles.rectanglePressable, styles.groupParentLayout1]}
          onPress={() => navigation.navigate("IPhone131413")}
        />
        <Image
          style={[styles.groupChild14, styles.groupLayout1]}
          contentFit="cover"
          source={require("../assets/vector-3.png")}
        />
        <Text
          style={[styles.friendsShared, styles.resourcesPosition]}
        >{`Friends & Shared Progress`}</Text>
        <Image
          style={styles.groupChild15}
          contentFit="cover"
          source={require("../assets/group-21.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone13142Position: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 20,
    width: 10,
    position: "absolute",
  },
  backTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  spring1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    position: "absolute",
  },
  groupItemLayout: {
    height: 75,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupItemBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  groupLayout1: {
    height: 14,
    width: 7,
    left: 365,
    position: "absolute",
  },
  homeTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupParentLayout1: {
    height: 56,
    width: 390,
    left: 0,
    position: "absolute",
  },
  syllabusPosition: {
    left: 47,
    top: 21,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupParentLayout: {
    width: 16,
    height: 20,
    position: "absolute",
  },
  groupChildLayout: {
    height: 3,
    width: 3,
    left: 3,
    borderColor: Color.colorMediumslateblue,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  resourcesPosition: {
    top: 20,
    left: 47,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupLayout: {
    width: 17,
    top: 18,
    height: 20,
    position: "absolute",
  },
  iphone13142Child: {
    backgroundColor: Color.colorMediumslateblue,
    height: 91,
    top: 0,
  },
  text: {
    top: 17,
    left: 23,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 53,
    height: 18,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  iphone13142Item: {
    left: 13,
    top: 60,
  },
  groupChild: {
    top: 1,
    left: 0,
  },
  back: {
    left: 21,
    width: 55,
    height: 21,
    top: 0,
  },
  vectorParent: {
    top: 59,
    width: 76,
    height: 21,
    left: 13,
    position: "absolute",
  },
  wel10000001sp24: {
    left: 117,
    width: 219,
    height: 31,
    top: 60,
  },
  iphone13142Inner: {
    top: 91,
    backgroundColor: Color.colorMediumpurple,
    height: 235,
  },
  wel10000001sp24WellnessAn: {
    top: 159,
    left: 33,
    width: 339,
    height: 109,
    fontSize: FontSize.size_3xl,
  },
  spring1: {
    top: 220,
    left: 152,
    fontSize: FontSize.size_xs,
  },
  groupItem: {
    borderColor: Color.colorGray_300,
    height: 75,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupInner: {
    top: 30,
  },
  home: {
    top: 11,
    width: 117,
    height: 30,
    fontSize: FontSize.size_3xl,
    left: 13,
  },
  frontPage: {
    top: 39,
    left: 14,
    width: 146,
    height: 12,
    fontSize: FontSize.size_xs,
  },
  rectangleParent: {
    top: 326,
  },
  rectangleView: {
    top: 760,
    backgroundColor: Color.colorGainsboro_200,
    height: 84,
  },
  rectanglePressable: {
    borderColor: Color.colorGray_400,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  vectorIcon: {
    top: 21,
    height: 14,
    width: 7,
    left: 365,
    position: "absolute",
  },
  journalLogs: {
    width: 121,
    height: 29,
  },
  groupChild1: {
    borderColor: Color.colorMediumslateblue,
    width: 16,
    borderWidth: 1,
    borderStyle: "solid",
    height: 20,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupChild2: {
    top: 3,
  },
  groupChild3: {
    top: 8,
  },
  rectangleContainer: {
    left: 0,
    top: 0,
  },
  groupChild4: {
    top: 14,
  },
  groupParent: {
    top: 18,
    left: 13,
  },
  rectangleGroup: {
    top: 569,
  },
  resources: {
    width: 112,
    height: 30,
  },
  groupIcon: {
    left: 11,
  },
  groupView: {
    top: 513,
  },
  syllabus: {
    width: 161,
    height: 33,
  },
  groupChild9: {
    left: 12,
  },
  rectangleParent1: {
    top: 457,
  },
  announcements: {
    width: 156,
    height: 35,
  },
  groupChild12: {
    top: 19,
    width: 20,
    height: 19,
    left: 11,
    position: "absolute",
  },
  rectangleParent2: {
    top: 401,
  },
  groupChild14: {
    top: 22,
  },
  friendsShared: {
    width: 191,
    height: 29,
  },
  groupChild15: {
    left: 15,
    top: 18,
    height: 21,
    width: 10,
    position: "absolute",
  },
  rectangleParent3: {
    top: 625,
  },
  iphone13142: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone13141;
