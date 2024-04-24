import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal, FlatList } from "react-native";
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

  const [monthlyTasks, setMonthlyTasks] = useState<{ task: string; checked: boolean }[]>([]);
  const [weeklyTasks, setWeeklyTasks] = useState<{ task: string; checked: boolean }[]>([]);
  const [dailyTasks, setDailyTasks] = useState<{ task: string; checked: boolean }[]>([]);

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

  const addMonthlyTask = (task: string) => {
    setMonthlyTasks([...monthlyTasks, { task, checked: false }]);
  };

  const addWeeklyTask = (task: string) => {
    setWeeklyTasks([...weeklyTasks, { task, checked: false }]);
  };

  const addDailyTask = (task: string) => {
    setDailyTasks([...dailyTasks, { task, checked: false }]);
  };

  const toggleChecked = (list: any[], index: number) => {
    const newList = [...list];
    newList[index].checked = !newList[index].checked;
    if (index > -1) {
      if (list === monthlyTasks) setMonthlyTasks(newList);
      else if (list === weeklyTasks) setWeeklyTasks(newList);
      else if (list === dailyTasks) setDailyTasks(newList);
    }
  };

  return (
    <>
      <View style={styles.iphone131411}>
        <View
          style={[styles.iphone131411Child, styles.iphone131411ChildLayout2]}
        />
        <View style={[styles.iphone131411ChildLayout, styles.weeklyChildLayout2]}>
        </View>
        <View style={[styles.iphone131411ChildLayout, styles.dailyChildLayout2]}>
        </View>
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
        
        <View style={[styles.listBox, styles.monthlyBox]}>
          <Text style={[styles.text, styles.monthlyAprilTypo]}>Monthly: April</Text>
          <FlatList
            data={monthlyTasks}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => toggleChecked(monthlyTasks, index)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={[styles.checkbox, item.checked && styles.checkedStyle]} />
                  <Text style={styles.listItem}>{item.task}</Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        
        <View style={[styles.listBox, styles.weeklyBox]}>
          <Text style={[styles.text, styles.monthlyAprilTypo]}>Weekly: 4/24-4/28</Text>
          <FlatList
            data={weeklyTasks}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => toggleChecked(weeklyTasks, index)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={[styles.checkbox, item.checked && styles.checkedStyle]} />
                  <Text style={styles.listItem}>{item.task}</Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        
        <View style={[styles.listBox, styles.dailyBox]}>
          <Text style={[styles.text, styles.monthlyAprilTypo]}>Daily: April 24th</Text>
          <FlatList
            data={dailyTasks}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => toggleChecked(dailyTasks, index)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={[styles.checkbox, item.checked && styles.checkedStyle]} />
                  <Text style={styles.listItem}>{item.task}</Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <Pressable
          style={[styles.container, styles.frameLayout]}
          onPress={openGroupIcon}w
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-18.png")}
          />
        </Pressable>
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
          <View style={styles.modalOverlay}>
            <Pressable style={styles.modalBg} onPress={closeGroupIcon} />
            <Frame1 onClose={closeGroupIcon} onSubmit={addMonthlyTask} />
          </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupIcon1Visible}>
          <View style={styles.modalOverlay}>
            <Pressable style={styles.modalBg} onPress={closeGroupIcon1} />
            <Frame1 onClose={closeGroupIcon1} onSubmit={addWeeklyTask} />
          </View>
        </Modal>

        <Modal animationType="fade" transparent visible={groupIcon2Visible}>
          <View style={styles.modalOverlay}>
            <Pressable style={styles.modalBg} onPress={closeGroupIcon2} />
            <Frame1 onClose={closeGroupIcon2} onSubmit={addDailyTask} />
          </View>
        </Modal>
    </>
  );
};


const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: Color.colorBlack,
  },
  checkedStyle: {
    backgroundColor: 'lightgreen',
  },
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
    height: 45,
    width: 343,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    top: -54,
    left: -10,
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
    position: "absolute",
    top: 200,
    left: 30,
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
    position: "absolute",
    top: 420,
    left: 30
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
    position: "absolute",
    top: 645,
    left: 30,
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
    top: 628,
  },
  iphone131411: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  monthlyBox: {
    top: 220,
    left: 30,
    position: "absolute",
  },
  weeklyBox: {
    top: 440,
    left: 30,
    position: "absolute",
  },
  dailyBox: {
    top: 668,
    left: 30,
    position: "absolute",
  },
  listBox: {
    marginTop: 10,
  },
  listItem: {
    fontSize: 16,
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    marginBottom: 15,
    marginLeft: 5,
    textAlignVertical: 'center',
  },
  weeklyChildLayout2: {
    top: 441, 
    height: 159, 
    width: 343, 
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  dailyChildLayout2: {
    top: 669, 
    height: 159, 
    width: 343, 
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },

  modalOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  modalBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});


export default IPhone131411;