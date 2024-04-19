import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1314 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13141}>
      <View style={styles.iphone13141Child} />
      <View style={[styles.iphone13141Item, styles.iphone13141Layout]} />
      <View style={[styles.iphone13141Inner, styles.iphone13141Layout]} />
      <View style={[styles.rectangleView, styles.iphone13141Layout]} />
      <View
        style={[styles.iphone13141Child1, styles.iphone13141ChildPosition]}
      />
      <View
        style={[styles.iphone13141Child2, styles.iphone13141ChildPosition]}
      />
      <Text style={styles.courses}>Courses</Text>
      <Pressable
        style={[
          styles.wel1000WellnessAndContainer,
          styles.iphone13141Child3Position,
        ]}
        onPress={() => navigation.navigate("IPhone13141")}
      >
        <Text style={styles.wel1000WellnessAndSelfCar}>
          (WEL1000) Wellness and Self-Care
        </Text>
      </Pressable>
      <View
        style={[styles.iphone13141Child3, styles.iphone13141Child3Position]}
      />
      <Text style={[styles.editDashboard, styles.editDashboardTypo]}>
        Edit Dashboard
      </Text>
      <Text style={[styles.a, styles.aTypo]}>100%- A</Text>
      <Text style={[styles.wel10000001sp24, styles.editDashboardTypo]}>
        WEL1000-0001.sp24
      </Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={styles.iphone13141Child4}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.iphone13141Child5}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <View style={styles.iphone13141Child6} />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-28.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone13141Layout: {
    height: 2,
    width: 20,
    left: 20,
    borderRadius: Border.br_81xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iphone13141ChildPosition: {
    borderRadius: Border.br_8xs,
    top: 142,
    position: "absolute",
  },
  iphone13141Child3Position: {
    left: 22,
    position: "absolute",
  },
  aTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  editDashboardTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  iphone13141Child: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorBrown_200,
    width: 390,
    height: 88,
    position: "absolute",
  },
  iphone13141Item: {
    top: 72,
  },
  iphone13141Inner: {
    top: 65,
  },
  rectangleView: {
    top: 58,
  },
  iphone13141Child1: {
    left: 16,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.12)",
    borderWidth: 1,
    width: 358,
    height: 160,
    backgroundColor: Color.colorWhite,
  },
  iphone13141Child2: {
    left: 17,
    backgroundColor: Color.colorMediumpurple,
    width: 357,
    height: 80,
  },
  courses: {
    top: 108,
    left: 8,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    width: 122,
    height: 27,
    textAlign: "left",
    position: "absolute",
  },
  wel1000WellnessAndSelfCar: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interRegular,
    width: 352,
    height: 32,
    color: Color.colorMediumpurple,
    textAlign: "left",
  },
  wel1000WellnessAndContainer: {
    top: 233,
  },
  iphone13141Child3: {
    top: 150,
    width: 74,
    height: 21,
    borderRadius: Border.br_81xl,
    left: 22,
    backgroundColor: Color.colorWhite,
  },
  text: {
    top: 15,
    left: 43,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    width: 53,
    height: 18,
  },
  editDashboard: {
    top: 117,
    left: 271,
    fontSize: FontSize.size_sm,
    color: Color.colorBrown_200,
    width: 112,
    height: 17,
  },
  a: {
    top: 153,
    left: 34,
    fontSize: FontSize.size_smi,
    width: 62,
    height: 14,
    color: Color.colorMediumpurple,
  },
  wel10000001sp24: {
    top: 261,
    left: 26,
    fontSize: FontSize.size_2xs,
    color: "rgba(0, 0, 0, 0.63)",
    width: 133,
    height: 18,
  },
  ellipseIcon: {
    top: 44,
    left: 175,
    width: 40,
    height: 40,
    position: "absolute",
  },
  iphone13141Child4: {
    top: 46,
    left: 177,
    width: 36,
    height: 36,
    position: "absolute",
  },
  iphone13141Child5: {
    top: 53,
    left: 184,
    width: 22,
    height: 22,
    position: "absolute",
  },
  iphone13141Child6: {
    top: 760,
    left: -7,
    backgroundColor: Color.colorGainsboro_200,
    width: 397,
    height: 84,
    position: "absolute",
  },
  groupIcon: {
    top: 162,
    left: 159,
    width: 57,
    height: 45,
    position: "absolute",
  },
  iphone13141: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone1314;
