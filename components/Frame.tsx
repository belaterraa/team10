import * as React from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

export type FrameType = {
  onClose?: () => void;
  onSubmit: (name: string) => void;
};

const Frame = ({ onClose, onSubmit }: FrameType) => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");

  const handleTextInputChange = (text: React.SetStateAction<string>) => {
    setUsername(text);
  }

  const handleSubmit = () => {
    console.log("Submit button pressed");
    if (username.trim() !== " ") {

      onSubmit(username);
      setUsername("");
    }
  };

  return (
    <View style={[styles.enterFriendsUsernameParent, styles.frameItemBorder]}>
      <Text style={[styles.enterFriendsUsername, styles.submitClr]}>
        Enter Friend’s Username
      </Text>
      <TextInput
        style={styles.frameChild}
        label="Enter Username"
        placeholder="Enter Username"
        mode="outlined"
        onChangeText={handleTextInputChange}
        onSubmitEditing={handleSubmit} // Handle submit on Enter press
        value={username}
        theme={{ colors: { background: "#d9d9d9" } }}
      />
      <View style={[styles.frameItem, styles.frameItemBorder]} />
      <Text style={[styles.submit, styles.submitClr]} onPress={handleSubmit}>
        Submit
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  frameItemBorder: {
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  submitClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  enterFriendsUsername: {
    top: 17,
    left: 23,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  frameChild: {
    top: 63,
    left: 26,
    width: 288,
    height: 36,
    position: "absolute",
  },
  frameItem: {
    top: 116,
    left: 36,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorMediumpurple,
    borderWidth: 1,
    width: 268,
    height: 54,
    position: "absolute",
  },
  submit: {
    top: 128,
    left: 84,
    fontSize: FontSize.size_9xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
    width: 171,
    height: 30,
  },
  enterFriendsUsernameParent: {
    borderRadius: 29,
    backgroundColor: Color.colorWhite,
    borderWidth: 5,
    width: 346,
    height: 192,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Frame;
