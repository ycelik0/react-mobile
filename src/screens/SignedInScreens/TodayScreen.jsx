import React, { useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
// Assets
import colors from "../../config/colors";
// Components
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Text from "../../components/CustomText";
import { AuthContext } from "../../context/AuthContext";
import { Pressable } from "@react-native-material/core";

function HomeScreen() {
  // Get logout function
  const { logout } = useContext(AuthContext);

  // States
  const [user, setUser] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  // Get User information
  useEffect(() => {
    async function getUserInfo() {
      setUser(JSON.parse(await SecureStore.getItemAsync("OF_USERINFO_1")));
      setUserInfo(JSON.parse(await SecureStore.getItemAsync("OF_USERINFO_2")));
    }
    getUserInfo();
  }, []);

  return (
    <SafeAreaView style={styles.outerContainer}>
      <ScrollView
        contentContainerStyle={styles.innerContainer}
        alwaysBounceVertical={true}
      >
        <Pressable onPress={logout}>
          <Text>Log out</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  innerContainer: {
    flexGrow: 1,
    marginTop: "3%",
    marginHorizontal: "5%",
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
  dropdownContainer: {
    flexDirection: "row",
    height: 40,
    position: "relative",
  },
  dropdown2BtnStyle: {
    height: "100%",
    backgroundColor: colors.grey,
  },
  dropdown2BtnTxtStyle: {
    color: colors.secondary,
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdown2DropdownStyle: {
    backgroundColor: colors.secondary,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: {
    backgroundColor: colors.white,
  },
  dropdown2RowTxtStyle: {
    color: colors.secondary,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default HomeScreen;
