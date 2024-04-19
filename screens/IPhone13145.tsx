import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone13145 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13143}>
      <View style={[styles.iphone13143Child, styles.iphone13143Layout1]} />
      <View style={[styles.iphone13143Item, styles.iphone13143Layout]} />
      <Text
        style={[styles.wel10000001sp24WellnessAn, styles.courseSyllabusTypo]}
      >
        (WEL1000-0001.sp24) Wellness and Self-Care
      </Text>
      <Text style={[styles.courseSyllabus, styles.wrapperLayout]}>
        Course Syllabus
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
      <View style={[styles.iphone13143Inner, styles.iphone13143Layout1]} />
      <View style={styles.rectangleView} />
      <Text style={[styles.wel1000, styles.wel1000Clr]}>WEL 1000</Text>
      <Text style={styles.syllabus}>SYLLABUS</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.iphone13143Child1, styles.iphone13143ChildLayout]} />
      <View style={[styles.iphone13143Child2, styles.iphone13143ChildLayout]} />
      <View style={[styles.iphone13143Child3, styles.lineViewLayout]} />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-8.png")}
      />
      <View
        style={[styles.iphone13143Child4, styles.iphone13143ChildPosition]}
      />
      <View
        style={[styles.iphone13143Child5, styles.iphone13143ChildPosition]}
      />
      <Image
        style={[styles.iphone13143Child6, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-9.png")}
      />
      <Text style={[styles.courseInformation, styles.courseTypo]}>
        COURSE INFORMATION
      </Text>
      <Text style={[styles.courseDescription, styles.courseTypo]}>
        COURSE DESCRIPTION
      </Text>
      <Text
        style={[styles.onlineAsynchronousRegularContainer, styles.wel1000Clr]}
      >
        <Text style={styles.onlineAsynchronous}>Online Asynchronous:</Text>
        <Text
          style={styles.regularParticipationEncourag}
        >{` Regular participation encouraged
`}</Text>
        <Text style={styles.onlineAsynchronous}>Credit Hours</Text>
        <Text style={styles.regularParticipationEncourag}>{`: 0
`}</Text>
        <Text style={styles.onlineAsynchronous}>Prerequisites</Text>
        <Text style={styles.regularParticipationEncourag}>: None</Text>
      </Text>
      <Image
        style={styles.starIcon}
        contentFit="cover"
        source={require("../assets/star-1.png")}
      />
      <Text
        style={[styles.thisUngradedCourse, styles.wel1000Clr]}
      >{`This ungraded course is meant to help you find self-care resources both on and off campus. This course includes an interactive checklist for you to track and monitor the completion of various self-care tasks. If you choose, you can also share your progress with friends. `}</Text>
      <View style={[styles.iphone13143Child7, styles.iphone13143Layout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone13143Layout1: {
    width: 359,
    position: "absolute",
  },
  iphone13143Layout: {
    width: 390,
    position: "absolute",
  },
  courseSyllabusTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  wrapperLayout: {
    height: 20,
    position: "absolute",
  },
  wel1000Clr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 56,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    top: 140,
    position: "absolute",
  },
  iphone13143ChildLayout: {
    width: 156,
    borderColor: Color.colorGray_200,
    top: 259,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  groupIconLayout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  iphone13143ChildPosition: {
    top: 492,
    width: 156,
    borderColor: Color.colorGray_200,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  courseTypo: {
    height: 27,
    width: 348,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xl,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  iphone13143Child: {
    top: 451,
    backgroundColor: Color.colorGainsboro_100,
    height: 279,
    left: 16,
  },
  iphone13143Item: {
    top: 0,
    left: 0,
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
  courseSyllabus: {
    top: 51,
    left: 121,
    width: 147,
    fontSize: FontSize.size_base,
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
  iphone13143Inner: {
    top: 117,
    backgroundColor: Color.colorBrown_200,
    height: 105,
    left: 15,
  },
  rectangleView: {
    top: 126,
    left: 68,
    borderRadius: Border.br_81xl,
    width: 254,
    height: 29,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  wel1000: {
    top: 129,
    left: 139,
    fontSize: FontSize.size_xl,
    width: 109,
    height: 26,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorBlack,
  },
  syllabus: {
    top: 169,
    left: 135,
    width: 151,
    height: 31,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  lineView: {
    left: 319,
  },
  iphone13143Child1: {
    left: 219,
  },
  iphone13143Child2: {
    left: 15,
  },
  iphone13143Child3: {
    left: 15,
  },
  groupIcon: {
    top: 236,
    left: 169,
  },
  iphone13143Child4: {
    left: 220,
  },
  iphone13143Child5: {
    left: 16,
  },
  iphone13143Child6: {
    top: 469,
    left: 170,
  },
  courseInformation: {
    top: 300,
    left: 62,
  },
  courseDescription: {
    top: 533,
    left: 74,
  },
  onlineAsynchronous: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
  },
  regularParticipationEncourag: {
    fontFamily: FontFamily.interRegular,
  },
  onlineAsynchronousRegularContainer: {
    top: 353,
    left: 38,
    width: 284,
    height: 75,
    fontSize: FontSize.size_base,
  },
  starIcon: {
    top: 480,
    left: 182,
    width: 28,
    height: 28,
    position: "absolute",
  },
  thisUngradedCourse: {
    top: 570,
    left: 30,
    fontSize: FontSize.size_sm,
    width: 328,
    height: 141,
    fontFamily: FontFamily.interRegular,
  },
  iphone13143Child7: {
    top: 759,
    left: -1,
    backgroundColor: Color.colorGainsboro_200,
    height: 84,
  },
  iphone13143: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone13145;
