import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13142 = () => {
  return (
    <View style={styles.iphone131418}>
      <View
        style={[styles.iphone131418Child, styles.iphone131418ChildLayout1]}
      />
      <View style={[styles.iphone131418Item, styles.rectangleParentPosition]} />
      <Image
        style={styles.iphone131418Inner}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={styles.iphone131418Inner}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Text style={[styles.back, styles.backLayout]}>Back</Text>
      <Text style={[styles.wel10000001sp24, styles.backTypo]}>
        WEL1000-0001.sp24
      </Text>
      <View style={[styles.rectangleView, styles.iphone131418ChildLayout2]} />
      <Text style={[styles.wel10000001sp24WellnessAn, styles.spring1Typo]}>
        (WEL1000-0001.sp24) Wellness and Self-Care
      </Text>
      <Text style={[styles.spring1, styles.spring1Typo]}>2024 Spring- 1</Text>
      <View
        style={[styles.iphone131418Child1, styles.iphone131418ChildLayout2]}
      />
      <View
        style={[styles.iphone131418Child2, styles.iphone131418ChildLayout1]}
      />
      <View
        style={[styles.iphone131418Child3, styles.iphone131418ChildLayout1]}
      />
      <View
        style={[styles.iphone131418Child4, styles.iphone131418ChildLayout1]}
      />
      <View
        style={[styles.iphone131418Child5, styles.iphone131418ChildLayout1]}
      />
      <Image
        style={[styles.iphone131418Child6, styles.iphone131418ChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
      <Image
        style={[styles.iphone131418Child7, styles.iphone131418ChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
      <Image
        style={[styles.iphone131418Child8, styles.iphone131418ChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
      <Image
        style={[styles.iphone131418Child9, styles.iphone131418ChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
      <Image
        style={[styles.iphone131418Child10, styles.iphone131418ChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.frontPage, styles.homeTypo]}>Front Page</Text>
      <Text style={[styles.announcements, styles.syllabusTypo]}>
        Announcements
      </Text>
      <Text style={[styles.syllabus, styles.syllabusTypo]}>Syllabus</Text>
      <Text style={[styles.resources, styles.syllabusTypo]}>Resources</Text>
      <Text style={[styles.journalLogs, styles.journalLogsTypo]}>
        Journal Logs
      </Text>
      <Text
        style={[styles.friendsShared, styles.journalLogsTypo]}
      >{`Friends & Shared Progress`}</Text>
      <View
        style={[styles.iphone131418Child11, styles.iphone131418ChildLayout2]}
      />
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.rectangleParent, styles.parentLayout]}>
          <View style={styles.groupChild} />
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
        <View style={[styles.groupChild1, styles.groupLayout]} />
      </View>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <Image
        style={[styles.iphone131418Child12, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-3.png")}
      />
      <Image
        style={styles.iphone131418Child13}
        contentFit="cover"
        source={require("../assets/group-7.png")}
      />
      <Image
        style={[styles.iphone131418Child14, styles.backLayout]}
        contentFit="cover"
        source={require("../assets/group-21.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone131418ChildLayout1: {
    height: 56,
    borderColor: Color.colorGray_400,
    width: 390,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  rectangleParentPosition: {
    top: 0,
    left: 0,
  },
  backLayout: {
    height: 21,
    position: "absolute",
  },
  backTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorWhite,
  },
  iphone131418ChildLayout2: {
    width: 390,
    position: "absolute",
  },
  spring1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    position: "absolute",
  },
  iphone131418ChildLayout: {
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
  syllabusTypo: {
    left: 47,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  journalLogsTypo: {
    height: 29,
    left: 47,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  parentLayout: {
    width: 16,
    height: 20,
    position: "absolute",
  },
  groupLayout: {
    height: 3,
    width: 3,
    left: 3,
    borderColor: Color.colorMediumslateblue,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupIconLayout: {
    width: 17,
    height: 20,
    position: "absolute",
  },
  iphone131418Child: {
    top: 625,
  },
  iphone131418Item: {
    backgroundColor: Color.colorMediumslateblue,
    height: 91,
    width: 390,
    position: "absolute",
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
  iphone131418Inner: {
    height: 20,
    width: 10,
    left: 13,
    top: 60,
    position: "absolute",
  },
  back: {
    top: 59,
    left: 34,
    width: 55,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorWhite,
  },
  wel10000001sp24: {
    left: 117,
    width: 219,
    height: 31,
    top: 60,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  rectangleView: {
    top: 91,
    backgroundColor: Color.colorMediumpurple,
    height: 235,
    left: 0,
    width: 390,
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
  iphone131418Child1: {
    top: 326,
    borderColor: Color.colorGray_300,
    height: 75,
    borderWidth: 1,
    borderStyle: "solid",
    width: 390,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  iphone131418Child2: {
    top: 513,
  },
  iphone131418Child3: {
    top: 569,
  },
  iphone131418Child4: {
    top: 457,
  },
  iphone131418Child5: {
    top: 401,
  },
  iphone131418Child6: {
    top: 356,
  },
  iphone131418Child7: {
    top: 422,
  },
  iphone131418Child8: {
    top: 478,
  },
  iphone131418Child9: {
    top: 534,
  },
  iphone131418Child10: {
    top: 590,
  },
  home: {
    top: 337,
    width: 117,
    height: 30,
    fontSize: FontSize.size_3xl,
    left: 13,
  },
  frontPage: {
    top: 365,
    left: 14,
    width: 146,
    height: 12,
    fontSize: FontSize.size_xs,
  },
  announcements: {
    width: 156,
    height: 35,
    top: 422,
  },
  syllabus: {
    width: 161,
    height: 33,
    top: 478,
  },
  resources: {
    top: 533,
    width: 112,
    height: 30,
  },
  journalLogs: {
    width: 121,
    top: 590,
  },
  friendsShared: {
    top: 645,
    width: 191,
  },
  iphone131418Child11: {
    top: 760,
    backgroundColor: Color.colorGainsboro_200,
    height: 84,
    left: 0,
    width: 390,
  },
  groupChild: {
    borderColor: Color.colorMediumslateblue,
    width: 16,
    height: 20,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupItem: {
    top: 3,
  },
  groupInner: {
    top: 8,
  },
  rectangleParent: {
    top: 0,
    left: 0,
  },
  groupChild1: {
    top: 14,
  },
  groupParent: {
    top: 587,
    left: 13,
  },
  groupIcon: {
    top: 531,
    left: 11,
  },
  iphone131418Child12: {
    top: 475,
    left: 12,
  },
  iphone131418Child13: {
    top: 420,
    width: 20,
    height: 19,
    left: 11,
    position: "absolute",
  },
  iphone131418Child14: {
    top: 643,
    left: 15,
    width: 10,
    height: 21,
  },
  iphone131418: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone13142;
