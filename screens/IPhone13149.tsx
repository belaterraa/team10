import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13149 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone131413}>
      <View style={[styles.iphone131413Child, styles.iphone131413Position]} />
      <Text style={styles.wel10000001sp24WellnessAn}>
        (WEL1000-0001.sp24) Wellness and Self-Care
      </Text>
      <Text style={styles.announcementDetails}>Announcement Details</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone13146")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
      </Pressable>
      <View style={[styles.iphone131413Item, styles.iphone131413Position]} />
      <View style={styles.iphone131413Inner} />
      <Text style={[styles.wellnessTablingOutside, styles.wellnessTypo]}>
        Wellness Tabling Outside HCB
      </Text>
      <Text style={[styles.wellnessTablingOutside1, styles.wellnessTypo]}>
        Wellness Tabling Outside HCB
      </Text>
      <Text style={[styles.jan19th2024, styles.jan19th2024Position]}>
        Jan 19th, 2024 at 8:32AM
      </Text>
      <Text style={[styles.helloEveryoneThe, styles.jan19th2024Position]}>
        Hello everyone! The FSU Mental Health Counsel, the Center for Health and
        Wellness, and the Askew Student Life Center will all be tabling outside
        of HCB today from 12:00PM-3:00PM. Come learn about some of the fun
        stress-relieving activities offered right on FSU’s campus. The tables
        are also giving away free merch!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone131413Position: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  wellnessTypo: {
    height: 28,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  jan19th2024Position: {
    color: Color.colorBlack,
    left: 20,
    textAlign: "left",
    position: "absolute",
  },
  iphone131413Child: {
    top: 0,
    backgroundColor: Color.colorMediumslateblue,
    height: 91,
  },
  wel10000001sp24WellnessAn: {
    top: 71,
    fontSize: FontSize.size_smi,
    width: 339,
    height: 17,
    textAlign: "center",
    color: Color.colorWhite,
    left: 25,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  announcementDetails: {
    top: 51,
    left: 86,
    fontSize: FontSize.size_base,
    width: 218,
    height: 20,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
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
    top: 59,
    width: 10,
    left: 20,
    height: 20,
    position: "absolute",
  },
  iphone131413Item: {
    top: 760,
    backgroundColor: Color.colorGainsboro_200,
    height: 84,
  },
  iphone131413Inner: {
    top: 161,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderTopWidth: 1,
    width: 392,
    height: 1,
    left: 0,
    position: "absolute",
  },
  wellnessTablingOutside: {
    top: 112,
    fontSize: FontSize.size_5xl,
    width: 377,
    left: 0,
  },
  wellnessTablingOutside1: {
    top: 212,
    left: -19,
    fontSize: FontSize.size_lg,
    width: 344,
  },
  jan19th2024: {
    top: 176,
    fontSize: FontSize.size_2xs,
    width: 209,
    height: 21,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  helloEveryoneThe: {
    top: 255,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    width: 331,
    height: 139,
  },
  iphone131413: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13149;
