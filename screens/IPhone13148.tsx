import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13148 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone131412}>
      <View style={[styles.iphone131412Child, styles.iphone131412Position]} />
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
      <View style={[styles.iphone131412Item, styles.iphone131412Position]} />
      <View style={styles.iphone131412Inner} />
      <Text style={[styles.mentalHealthFair, styles.mentalTypo]}>
        Mental Health Fair at the Union
      </Text>
      <Text style={[styles.mentalHealthFair1, styles.mentalTypo]}>
        Mental Health Fair at the Union
      </Text>
      <Text style={[styles.feb1st2024, styles.feb1st2024Position]}>
        Feb 1st, 2024 at 7:06AM
      </Text>
      <Text style={[styles.helloEveryoneAt, styles.feb1st2024Position]}>
        Hello everyone! At 12:00pm this afternoon there will be a Mental Health
        Fair in the Union ballroom! There will be a variety of tables where you
        can learn about stress relief tactics, coping strategies, mental health
        symptoms, and FSU resources. If you visit every table you can even get
        free food! This is a great way to learn something new, dedicate time to
        your personal well-being, meet new people, and enjoy some free food.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone131412Position: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  mentalTypo: {
    height: 28,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  feb1st2024Position: {
    color: Color.colorBlack,
    left: 20,
    textAlign: "left",
    position: "absolute",
  },
  iphone131412Child: {
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
  iphone131412Item: {
    top: 760,
    backgroundColor: Color.colorGainsboro_200,
    height: 84,
  },
  iphone131412Inner: {
    top: 161,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderTopWidth: 1,
    width: 392,
    height: 1,
    left: 0,
    position: "absolute",
  },
  mentalHealthFair: {
    top: 112,
    fontSize: FontSize.size_5xl,
    width: 377,
    left: 0,
  },
  mentalHealthFair1: {
    top: 212,
    left: -19,
    fontSize: FontSize.size_lg,
    width: 344,
  },
  feb1st2024: {
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
  iphone131412: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13148;
