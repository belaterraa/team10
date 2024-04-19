import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Vector = () => {
  return <View style={styles.vectorView} />;
};

const styles = StyleSheet.create({
  vectorView: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 3,
    height: 1,
  },
});

export default Vector;
