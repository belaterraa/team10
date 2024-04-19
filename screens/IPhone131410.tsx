import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone131410 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13148}>
      <View
        style={[styles.iphone13148Child, styles.iphone13148ChildPosition3]}
      />
      <Text style={styles.wel10000001sp24WellnessAn}>
        (WEL1000-0001.sp24) Wellness and Self-Care
      </Text>
      <Text style={styles.resources}>Resources</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone13141")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
      </Pressable>
      <View style={[styles.iphone13148Item, styles.iphone13148ChildLayout1]} />
      <View style={[styles.iphone13148Inner, styles.iphone13148ChildLayout1]} />
      <View style={[styles.rectangleView, styles.iphone13148ChildLayout1]} />
      <View
        style={[styles.iphone13148Child1, styles.iphone13148ChildLayout1]}
      />
      <View
        style={[styles.iphone13148Child2, styles.iphone13148ChildLayout1]}
      />
      <View style={[styles.iphone13148Inner, styles.iphone13148ChildLayout1]} />
      <Text style={[styles.fsuRecreation, styles.fsuLayout]}>
        FSU Recreation
      </Text>
      <View
        style={[styles.iphone13148Child4, styles.iphone13148ChildLayout1]}
      />
      <View
        style={[styles.iphone13148Child5, styles.iphone13148ChildPosition]}
      />
      <View
        style={[styles.iphone13148Child6, styles.iphone13148ChildLayout1]}
      />
      <View
        style={[styles.iphone13148Child7, styles.iphone13148ChildLayout1]}
      />
      <View
        style={[styles.iphone13148Child8, styles.iphone13148ChildPosition]}
      />
      <View
        style={[styles.iphone13148Child9, styles.iphone13148ChildPosition]}
      />
      <View
        style={[styles.iphone13148Child6, styles.iphone13148ChildLayout1]}
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout1]}>
        <View style={styles.groupChildLayout} />
        <View style={styles.groupPosition} />
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/line-15.png")}
        />
      </View>
      <View
        style={[styles.iphone13148Child7, styles.iphone13148ChildLayout1]}
      />
      <View
        style={[styles.iphone13148Child12, styles.iphone13148ChildLayout1]}
      />
      <View
        style={[styles.iphone13148Child13, styles.iphone13148ChildLayout1]}
      />
      <View
        style={[styles.iphone13148Child14, styles.iphone13148ChildLayout1]}
      />
      <View
        style={[styles.iphone13148Child15, styles.iphone13148ChildPosition3]}
      />
      <Image
        style={[styles.polygonIcon, styles.iphone13148ChildLayout]}
        contentFit="cover"
        source={require("../assets/polygon-1.png")}
      />
      <Image
        style={[styles.iphone13148Child16, styles.iphone13148ChildLayout]}
        contentFit="cover"
        source={require("../assets/polygon-1.png")}
      />
      <Image
        style={[styles.iphone13148Child17, styles.iphone13148ChildLayout]}
        contentFit="cover"
        source={require("../assets/polygon-1.png")}
      />
      <Text style={[styles.onCampus, styles.onCampusTypo]}>On-Campus</Text>
      <Text style={[styles.helpfulVideos, styles.onCampusTypo]}>
        Helpful Videos
      </Text>
      <Text style={[styles.informationalWebsites, styles.onCampusTypo]}>
        Informational Websites
      </Text>
      <View style={[styles.rectangleGroup, styles.rectangleLayout1]}>
        <View style={styles.groupChildLayout} />
        <View style={styles.groupPosition} />
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/line-15.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={styles.groupChild3} />
        <Image
          style={[styles.rectangleIcon, styles.groupChild4Position]}
          contentFit="cover"
          source={require("../assets/rectangle-51.png")}
        />
        <View style={[styles.groupChild4, styles.groupChild4Position]} />
      </View>
      <View style={[styles.groupView, styles.rectangleLayout]}>
        <View style={styles.groupChild3} />
        <Image
          style={[styles.rectangleIcon, styles.groupChild4Position]}
          contentFit="cover"
          source={require("../assets/rectangle-51.png")}
        />
        <View style={[styles.groupChild4, styles.groupChild4Position]} />
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleLayout]}>
        <View style={styles.groupChild3} />
        <Image
          style={[styles.rectangleIcon, styles.groupChild4Position]}
          contentFit="cover"
          source={require("../assets/rectangle-51.png")}
        />
        <View style={[styles.groupChild4, styles.groupChild4Position]} />
      </View>
      <Text style={[styles.fsuCounseling, styles.fsuLayout]}>
        FSU Counseling
      </Text>
      <Text style={[styles.guidedYoga, styles.fsuLayout]}>Guided Yoga</Text>
      <Text style={[styles.mindfulnessMeditation, styles.journalingTipsTypo]}>
        Mindfulness Meditation
      </Text>
      <Text style={[styles.gratitudeExercises, styles.journalingTipsTypo]}>
        Gratitude Exercises
      </Text>
      <Text style={[styles.journalingTips, styles.journalingTipsTypo]}>
        Journaling Tips
      </Text>
      <Text style={[styles.stressManagementGuide, styles.journalingTipsTypo]}>
        Stress Management Guide
      </Text>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-29.png")}
      />
      <Image
        style={[styles.iphone13148Child18, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-29.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone13148ChildPosition3: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  iphone13148ChildLayout1: {
    height: 48,
    width: 344,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 20,
    position: "absolute",
  },
  fsuLayout: {
    height: 35,
    width: 156,
  },
  iphone13148ChildPosition: {
    top: 510,
    height: 48,
    width: 344,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 20,
    position: "absolute",
  },
  rectangleLayout1: {
    height: 19,
    width: 23,
    position: "absolute",
  },
  iphone13148ChildLayout: {
    width: 27,
    height: 28,
    position: "absolute",
  },
  onCampusTypo: {
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    left: 78,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleLayout: {
    height: 21,
    left: 32,
    width: 21,
    position: "absolute",
  },
  groupChild4Position: {
    left: 5,
    position: "absolute",
  },
  journalingTipsTypo: {
    width: 197,
    height: 35,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    // textDecoration: "underline",
    left: 78,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupIconLayout: {
    width: 15,
    height: 18,
    position: "absolute",
  },
  iphone13148Child: {
    backgroundColor: Color.colorMediumslateblue,
    height: 91,
    top: 0,
    width: 390,
    left: 0,
    position: "absolute",
  },
  wel10000001sp24WellnessAn: {
    top: 71,
    fontSize: FontSize.size_smi,
    width: 339,
    height: 17,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 25,
    position: "absolute",
  },
  resources: {
    top: 51,
    left: 121,
    fontSize: FontSize.size_base,
    width: 147,
    height: 20,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  text: {
    top: 18,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 53,
    height: 18,
    textAlign: "left",
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
    height: 20,
    position: "absolute",
  },
  iphone13148Item: {
    top: 109,
    width: 344,
    backgroundColor: Color.colorWhite,
  },
  iphone13148Inner: {
    top: 205,
    backgroundColor: Color.colorWhite,
  },
  rectangleView: {
    top: 157,
    backgroundColor: Color.colorWhite,
  },
  iphone13148Child1: {
    backgroundColor: Color.colorThistle,
    top: 109,
    width: 344,
  },
  iphone13148Child2: {
    backgroundColor: Color.colorWhitesmoke_200,
    top: 109,
    width: 344,
  },
  fsuRecreation: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    // textDecoration: "underline",
    left: 78,
    width: 156,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
    top: 220,
  },
  iphone13148Child4: {
    top: 427,
    backgroundColor: Color.colorWhite,
  },
  iphone13148Child5: {
    backgroundColor: Color.colorWhite,
  },
  iphone13148Child6: {
    top: 606,
    backgroundColor: Color.colorWhite,
  },
  iphone13148Child7: {
    top: 558,
    backgroundColor: Color.colorWhite,
  },
  iphone13148Child8: {
    backgroundColor: Color.colorThistle,
  },
  iphone13148Child9: {
    backgroundColor: Color.colorWhitesmoke_200,
  },
  groupChildLayout: {
    transform: [
      {
        rotate: "-32.3deg",
      },
    ],
    height: 7,
    top: 13,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    width: 10,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupPosition: {
    left: 11,
    top: 6,
    transform: [
      {
        rotate: "-32.3deg",
      },
    ],
    height: 7,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    width: 10,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupInner: {
    left: 7,
    height: 6,
    top: 6,
    width: 10,
    position: "absolute",
  },
  rectangleParent: {
    left: 30,
    top: 621,
  },
  iphone13148Child12: {
    top: 283,
    backgroundColor: Color.colorWhitesmoke_200,
  },
  iphone13148Child13: {
    top: 379,
    backgroundColor: Color.colorWhite,
  },
  iphone13148Child14: {
    top: 331,
    backgroundColor: Color.colorWhite,
  },
  iphone13148Child15: {
    top: 760,
    backgroundColor: Color.colorGainsboro_200,
    height: 84,
    width: 390,
    left: 0,
    position: "absolute",
  },
  polygonIcon: {
    top: 119,
    height: 28,
    left: 30,
  },
  iphone13148Child16: {
    top: 293,
    height: 28,
    left: 25,
    width: 27,
  },
  iphone13148Child17: {
    top: 520,
    height: 28,
    left: 25,
    width: 27,
  },
  onCampus: {
    top: 122,
    height: 35,
    width: 156,
  },
  helpfulVideos: {
    top: 297,
    width: 192,
    height: 28,
  },
  informationalWebsites: {
    top: 525,
    width: 241,
    height: 31,
  },
  rectangleGroup: {
    left: 29,
    top: 573,
  },
  groupChild3: {
    top: 3,
    width: 21,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    height: 18,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  rectangleIcon: {
    top: 7,
    width: 12,
    height: 11,
  },
  groupChild4: {
    width: 11,
    height: 4,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 5,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  rectangleContainer: {
    top: 394,
  },
  groupView: {
    top: 344,
  },
  rectangleParent1: {
    top: 440,
  },
  fsuCounseling: {
    top: 172,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    // textDecoration: "underline",
    left: 78,
    width: 156,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  guidedYoga: {
    top: 347,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    // textDecoration: "underline",
    left: 78,
    width: 156,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  mindfulnessMeditation: {
    top: 396,
  },
  gratitudeExercises: {
    top: 442,
  },
  journalingTips: {
    top: 573,
  },
  stressManagementGuide: {
    top: 621,
  },
  groupIcon: {
    left: 33,
    top: 172,
  },
  iphone13148Child18: {
    left: 34,
    top: 220,
  },
  iphone13148: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone131410;
