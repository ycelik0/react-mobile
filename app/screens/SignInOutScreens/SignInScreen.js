import React from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../config/colors";

function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign in</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    textAlign: "center"
  },
});

export default SignInScreen;
