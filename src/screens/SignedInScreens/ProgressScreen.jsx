import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
// Assets
import colors from "../../config/colors";
// Components
import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

function ProgressScreen() {
  const [user, setUser] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    async function getUserInfo() {
      setUser(JSON.parse(await SecureStore.getItemAsync("OF_USERINFO_1")));
      setUserInfo(JSON.parse(await SecureStore.getItemAsync("OF_USERINFO_2")));
    }
    getUserInfo();
  }, []);

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  innerContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: "5%",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  tabContainer: {
    height: 100,
    paddingHorizontal: "5%",
    backgroundColor: colors.black,
    flexDirection: "row",
    position: "relative",
  },
  tab: {
    width: 44,
    height: "100%",
    backgroundColor: colors.black,
  },
});

export default ProgressScreen;
