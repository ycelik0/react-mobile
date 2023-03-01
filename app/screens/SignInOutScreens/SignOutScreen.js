import React from "react";
import { View, Text, StyleSheet } from "react-native";

function SignOutScreen() {
  return (
    <View style={styles.container}>
      <Text>Sign out</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default SignOutScreen;
