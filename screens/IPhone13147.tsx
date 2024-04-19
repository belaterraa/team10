import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13147 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13145}>
      <View style={[styles.iphone13145Child, styles.iphone13145Position]} />
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
      <View style={[styles.iphone13145Item, styles.iphone13145Position]} />
      <View style={styles.iphone13145Inner} />
      <Text style={[styles.freeYogaOn, styles.freeTypo]}>
        Free Yoga on Landis Green
      </Text>
      <Text
        style={[styles.freeYogaOn1, styles.freeTypo]}
      >{`Free Yoga on Landis Green:
`}</Text>
      <Text style={[styles.mar22nd2024, styles.mar22nd2024Position]}>
        Mar 22nd, 2024 at 6:59AM
      </Text>
      <Text style={[styles.helloEveryoneAt, styles.mar22nd2024Position]}>
        Hello everyone! At 2:00pm this afternoon the FSU Mental Health Counsel
        is offering a free yoga class! This is a great opportunity to spend some
        time outside, move your body, and meet some new people! Be sure to bring
        some water and a yoga mat.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone13145Position: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  freeTypo: {
    height: 28,
    width: 344,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  mar22nd2024Position: {
    color: Color.colorBlack,
    left: 20,
    textAlign: "left",
    position: "absolute",
  },
  iphone13145Child: {
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
  iphone13145Item: {
    top: 760,
    backgroundColor: Color.colorGainsboro_200,
    height: 84,
  },
  iphone13145Inner: {
    top: 161,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderTopWidth: 1,
    width: 392,
    height: 1,
    left: 0,
    position: "absolute",
  },
  freeYogaOn: {
    top: 112,
    fontSize: FontSize.size_5xl,
    left: 0,
  },
  freeYogaOn1: {
    top: 212,
    left: -37,
    fontSize: FontSize.size_lg,
  },
  mar22nd2024: {
    top: 176,
    fontSize: FontSize.size_2xs,
    width: 209,
    height: 21,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  helloEveryoneAt: {
    top: 255,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    width: 331,
    height: 139,
  },
  iphone13145: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13147;
