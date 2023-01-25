import React from "react";
import {
  SafeAreaView,
  View,
  ImageBackground,
  Image,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";

function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require("../assets/background.jpg")}
        style={styles.imageBackground}
      >
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.image}
        />
        <Text>Sell What You Don't Need</Text>
      </ImageBackground>
      <View style={styles.viewPrimary}></View>
      <View style={styles.viewSecondary}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  imageBackground: {
    flex: 10,
    width: "100%",
    alignItems: "center",
    paddingTop: 40,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  viewPrimary: {
    backgroundColor: "#fc5c65",
    width: "100%",
    height: 100,
    flex: 1,
  },
  viewSecondary: {
    backgroundColor: "#4ECDC4",
    width: "100%",
    height: 100,
    flex: 1,
  },
});

export default WelcomeScreen;
