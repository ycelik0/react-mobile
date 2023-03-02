import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../config/colors";

function SignInScreen() {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Sign in</Text>
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

export default SignInScreen;
