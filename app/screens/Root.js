import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import colors from "../config/colors";
import SignInScreen from "./SignInOutScreens/SignInScreen";

function Root() {
  return (
    <SafeAreaView style={styles.container}>
      <SignInScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default Root;
