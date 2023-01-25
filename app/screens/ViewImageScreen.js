import React from "react";
import { SafeAreaView, View, Image, StatusBar, Platform, StyleSheet} from "react-native";
import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.primaryButton}></View>
        <View style={styles.secondaryButton}></View>
      </View>
      <Image source={require("../assets/chair.jpg")} style={styles.images} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  buttonContainer: {
    backgroundColor: colors.black,
    padding: 30,
    paddingTop: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  primaryButton: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: "100%",
    height: "80%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default ViewImageScreen;
