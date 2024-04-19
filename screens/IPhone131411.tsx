import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Frame1 from "../components/Frame1";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone131411 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [groupIconVisible, setGroupIconVisible] = useState(false);
  const [groupIcon1Visible, setGroupIcon1Visible] = useState(false);
  const [groupIcon2Visible, setGroupIcon2Visible] = useState(false);

  const openGroupIcon = useCallback(() => {
    setGroupIconVisible(true);
  }, []);

  const closeGroupIcon = useCallback(() => {
    setGroupIconVisible(false);
  }, []);

  const openGroupIcon1 = useCallback(() => {
    setGroupIcon1Visible(true);
  }, []);

  const closeGroupIcon1 = useCallback(() => {
    setGroupIcon1Visible(false);
  }, []);

  const openGroupIcon2 = useCallback(() => {
    setGroupIcon2Visible(true);
  }, []);

  const closeGroupIcon2 = useCallback(() => {
    setGroupIcon2Visible(false);
  }, []);

  return (
    <>
      <View style={styles.iphone131411}>
        <View
          style={[styles.iphone131411Child, styles.iphone131411ChildLayout2]}
        />
        <View style={styles.iphone131411Item} />
        <Text
          style={[styles.wel10000001sp24WellnessAn, styles.journalLogsTypo]}
        >
          (WEL1000-0001.sp24) Wellness and Self-Care
        </Text>
        <Text style={[styles.journalLogs, styles.wrapperLayout]}>
          Journal Logs
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
        <View style={styles.iphone131411Inner} />
        <Text style={styles.myTasks}>My Tasks</Text>
        <View style={[styles.rectangleView, styles.iphone131411ChildLayout1]} />
        <View
          style={[styles.iphone131411Child1, styles.iphone131411ChildLayout1]}
        />
        <View
          style={[styles.iphone131411Child2, styles.iphone131411ChildLayout1]}
        />
        <Image
          style={[styles.rectangleIcon, styles.iphone131411ChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-74.png")}
        />
        <Text style={[styles.monthlyApril, styles.monthlyAprilTypo]}>
          Monthly: April
        </Text>
        <Pressable
          style={[styles.container, styles.frameLayout]}
          onPress={openGroupIcon}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-18.png")}
          />
        </Pressable>
        <View
          style={[styles.iphone131411Child3, styles.iphone131411ChildLayout2]}
        />
        <View
          style={[styles.iphone131411Child4, styles.iphone131411ChildLayout1]}
        />
        <View
          style={[styles.iphone131411Child5, styles.iphone131411ChildLayout1]}
        />
        <View
          style={[styles.iphone131411Child6, styles.iphone131411ChildLayout1]}
        />
        <Image
          style={[styles.iphone131411Child7, styles.iphone131411ChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-74.png")}
        />
        <Text style={[styles.weekly422428, styles.monthlyAprilTypo]}>
          Weekly: 4/22-4/28
        </Text>
        <Pressable
          style={[styles.frame, styles.frameLayout]}
          onPress={openGroupIcon1}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-18.png")}
          />
        </Pressable>
        <View
          style={[styles.iphone131411Child8, styles.iphone131411ChildLayout2]}
        />
        <View
          style={[styles.iphone131411Child9, styles.iphone131411ChildLayout1]}
        />
        <View
          style={[styles.iphone131411Child10, styles.iphone131411ChildLayout1]}
        />
        <View
          style={[styles.iphone131411Child11, styles.iphone131411ChildLayout1]}
        />
        <Image
          style={[styles.iphone131411Child12, styles.iphone131411ChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-74.png")}
        />
        <Text style={[styles.dailyApril24th, styles.monthlyAprilTypo]}>
          Daily: April 24th
        </Text>
        <Pressable
          style={[styles.groupPressable, styles.frameLayout]}
          onPress={openGroupIcon2}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-18.png")}
          />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={groupIconVisible}>
        <View style={styles.groupIconOverlay}>
          <Pressable style={styles.groupIconBg} onPress={closeGroupIcon} />
          <Frame1 onClose={closeGroupIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupIcon1Visible}>
        <View style={styles.groupIcon1Overlay}>
          <Pressable style={styles.groupIcon1Bg} onPress={closeGroupIcon1} />
          <Frame1 onClose={closeGroupIcon1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupIcon2Visible}>
        <View style={styles.groupIcon2Overlay}>
          <Pressable style={styles.groupIcon2Bg} onPress={closeGroupIcon2} />
          <Frame1 onClose={closeGroupIcon2} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iphone131411ChildLayout2: {
    height: 159,
    width: 343,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    left: 20,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  journalLogsTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  wrapperLayout: {
    height: 20,
    position: "absolute",
  },
  iphone131411ChildLayout1: {
    height: 25,
    width: 25,
    left: 35,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iphone131411ChildLayout: {
    height: 43,
    width: 343,
    left: 20,
    position: "absolute",
  },
  monthlyAprilTypo: {
    height: 41,
    width: 181,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    left: 30,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    height: 36,
    width: 36,
    left: 310,
    position: "absolute",
  },
  iphone131411Child: {
    top: 221,
  },
  iphone131411Item: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorMediumslateblue,
    width: 390,
    height: 91,
    position: "absolute",
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
  journalLogs: {
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
  },
  iphone131411Inner: {
    top: 106,
    left: 61,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorMediumpurple,
    width: 268,
    height: 54,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  myTasks: {
    top: 118,
    left: 109,
    fontSize: FontSize.size_9xl,
    width: 171,
    height: 30,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleView: {
    top: 236,
  },
  iphone131411Child1: {
    top: 332,
  },
  iphone131411Child2: {
    top: 284,
  },
  rectangleIcon: {
    top: 178,
  },
  monthlyApril: {
    top: 189,
  },
  groupIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  container: {
    top: 182,
  },
  iphone131411Child3: {
    top: 441,
  },
  iphone131411Child4: {
    top: 456,
  },
  iphone131411Child5: {
    top: 552,
  },
  iphone131411Child6: {
    top: 504,
  },
  iphone131411Child7: {
    top: 398,
  },
  weekly422428: {
    top: 409,
  },
  groupIcon1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupIcon1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frame: {
    top: 402,
  },
  iphone131411Child8: {
    top: 658,
  },
  iphone131411Child9: {
    top: 673,
  },
  iphone131411Child10: {
    top: 769,
  },
  iphone131411Child11: {
    top: 721,
  },
  iphone131411Child12: {
    top: 615,
  },
  dailyApril24th: {
    top: 626,
  },
  groupIcon2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupIcon2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupPressable: {
    top: 619,
  },
  iphone131411: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone131411;
