import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { TextInput } from "react-native-paper";
import Enter from "./Enter";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

export type Frame1Type = {
  onClose?: () => void;
};

const Frame1 = ({ onClose }: Frame1Type) => {
  return (
    <View style={[styles.rectangleParent, styles.frameChildLayout]}>
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <Text style={styles.newTask}>New Task:</Text>
      <Image
        style={styles.frameItem}
        contentFit="cover"
        source={require("../assets/rectangle-641.png")}
      />
      <Enter />
      <TextInput
        style={styles.frameInner}
        label="Task description"
        placeholder="Describe your task"
        mode="outlined"
        theme={{ colors: { background: "#d9d9d9" } }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 161,
    width: 255,
    borderWidth: 1,
    borderStyle: "solid",
  },
  frameChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorGainsboro_100,
    borderColor: Color.colorDarkgray_200,
    position: "absolute",
  },
  newTask: {
    top: 11,
    left: 13,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 134,
    height: 38,
    position: "absolute",
  },
  frameItem: {
    top: 126,
    left: 184,
    borderRadius: Border.br_81xl,
    width: 62,
    height: 27,
    position: "absolute",
  },
  frameInner: {
    top: 44,
    left: 15,
    width: 227,
    height: 25,
    position: "absolute",
  },
  rectangleParent: {
    borderRadius: 28,
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorBlack,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Frame1;
