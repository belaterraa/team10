import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Frame from "../components/Frame";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone131414 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [ellipseIconVisible, setEllipseIconVisible] = useState(false);
  const [username, setUsername] = useState<string | undefined>();
  const [names, setNames] = useState<string[]>([]);

  const openEllipseIcon = useCallback(() => {
    setEllipseIconVisible(true);
  }, []);

  const closeEllipseIcon = useCallback(() => {
    setEllipseIconVisible(false);
  }, []);

const handleAddName = (name: string) => {
  console.log("Adding name:", name);
  setNames(prevNames => [...prevNames, name]);
  closeEllipseIcon();
};

  return (
    <>
      <View style={styles.iphone131416}>
        <View style={[styles.iphone131416Child, styles.iphone131416Position]} />
        <Text style={[styles.wel10000001sp24WellnessAn, styles.myFriendsTypo]}>
          (WEL1000-0001.sp24) Wellness and Self-Care
        </Text>
        <Text style={[styles.myFriends, styles.wrapperLayout]}>My Friends</Text>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("IPhone131413")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vector-1.png")}
          />
        </Pressable>
        <View style={[styles.iphone131416Item, styles.iphone131416Position]} />
        <View style={[styles.iphone131416Inner, styles.rectangleViewBorder]} />
        <View style={[styles.lineView, styles.lineChildLayout]} />
        <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
        <View style={[styles.iphone131416Inner, styles.rectangleViewBorder]}>
          <Text style={styles.myFriendsList}>My Friends List</Text>
          <View style={styles.namesContainer}>
            {names.map((name, index) => (
              <View style={styles.nameItem} key={index}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("../assets/group-23.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain", marginRight: 10, marginLeft: 10 }}
                  />
                  <Text style={styles.nameText}>{name}</Text>
            </View>
            <Image
              source={require("../assets/line-23.png")}
              style={{ width: "100%", height: 1, marginTop: 15 }}
            />
          </View>
        ))}
      </View>
        </View>
        <View style={[styles.ellipseParent, styles.containerLayout]}>
          <Pressable
            style={[styles.container, styles.containerLayout]}
            onPress={openEllipseIcon}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/ellipse-15.png")}
            />
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.groupItem, styles.groupLayout]} />
          </Pressable>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={ellipseIconVisible}>
        <View style={styles.ellipseIconOverlay}>
          <Pressable style={styles.ellipseIconBg} onPress={closeEllipseIcon} />
          <Frame onSubmit={handleAddName} onClose={closeEllipseIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iphone131416Position: {
    width: 390,
    position: "absolute",
    left: 0,
  },
  myFriendsTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  wrapperLayout: {
    height: 20,
    position: "absolute",
  },
  rectangleViewBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  lineChildLayout: {
    height: 1,
    position: "absolute",
  },
  robTypo: {
    height: 30,
    width: 124,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    left: 87,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  containerLayout: {
    height: 37,
    width: 37,
    position: "absolute",
  },
  groupLayout: {
    height: 21,
    width: 3,
    backgroundColor: Color.colorMediumslateblue,
    position: "absolute",
  },
  iphone131416ChildPosition1: {
    left: 52,
    width: 9,
    height: 21,
    position: "absolute",
  },
  iphone131416ChildPosition: {
    left: 51,
    width: 9,
    height: 21,
    position: "absolute",
  },
  iphone131416Child: {
    height: 91,
    backgroundColor: Color.colorMediumslateblue,
    width: 390,
    top: 0,
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
  myFriends: {
    top: 51,
    left: 78,
    fontSize: FontSize.size_base,
    width: 243,
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
  iphone131416Item: {
    top: 760,
    backgroundColor: Color.colorGainsboro_200,
    height: 84,
    width: 390,
    position: "absolute",
  },
  iphone131416Inner: {
    top: 126,
    left: 30,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 326,
    height: 54,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
  },
  myFriendsList: {
    left: 20,
    fontSize: 30,
    width: 289,
    height: 100,
    color: Color.colorBlack,
    top: 8,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleView: {
    top: 180,
    borderColor: "#727171",
    height: 420,
    width: 325,
    left: 31,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  lineView: {
    top: 235,
    width: 324,
    height: 1,
    borderTopWidth: 1,
    left: 32,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  iphone131416Child1: {
    top: 290,
    width: 324,
    height: 1,
    borderTopWidth: 1,
    left: 32,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  iphone131416Child2: {
    top: 345,
    borderTopWidth: 1,
    left: 32,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    width: 325,
  },
  lineIcon: {
    top: 399,
    width: 324,
    height: 1,
    left: 32,
  },
  iphone131416Child3: {
    top: 455,
    width: 324,
    height: 1,
    left: 31,
  },
  ellipseIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  ellipseIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  container: {
    width: 37,
    left: 0,
    top: 0,
  },
  groupChild: {
    top: 8,
    left: 17,
  },
  groupItem: {
    top: 9,
    left: 17,
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  ellipseParent: {
    left: 293,
    top: 135,
    width: 37,
  },
  groupIcon: {
    left: 50,
    width: 9,
    height: 21,
    top: 193,
    position: "absolute",
  },
  iphone131416Child4: {
    top: 303,
  },
  iphone131416Child5: {
    top: 358,
  },
  iphone131416Child6: {
    top: 413,
  },
  iphone131416Child7: {
    top: 248,
  },
  iphone131416: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  namesContainer: {
    marginTop: 70,
  },
  nameItem: {
    marginBottom: 13, 
  },
  nameText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
});

export default IPhone131414;