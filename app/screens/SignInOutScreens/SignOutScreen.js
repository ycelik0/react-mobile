import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../config/colors";

function SignOutScreen() {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Sign out</Text>
      </View>
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
  },
  text: {
    alignSelf: "center",
  },
});

export default SignOutScreen;