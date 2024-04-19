import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Enter = () => {
  return <Text style={styles.enter}>Enter</Text>;
};

const styles = StyleSheet.create({
  enter: {
    position: "absolute",
    top: 132,
    left: 198,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 44,
    height: 16,
  },
});

export default Enter;
