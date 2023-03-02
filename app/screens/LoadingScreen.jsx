import React, { useState } from "react";
// Assets
import colors from "../config/colors";
import logo from "../assets/images/orthofoodie_logo.png";
// Components
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import * as Progress from "react-native-progress";

function LoadingScreen({ navigation }) {
  const [progressAmount, setProgressAmount] = useState(0);

  if (progressAmount >= 1) {
    navigation.navigate("SignIn");
  }

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View>
        <Image source={logo} style={styles.image} />
        <Progress.Bar
          progress={progressAmount}
          width={78}
          color={colors.primary}
          borderColor={colors.primary}
          style={styles.progressBar}
        />
        <Text style={styles.text}>Loading</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.secondary,
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: colors.grey,
    textAlign: "center",
  },
  image: {
    alignSelf: "center",
  },
  progressBar: {
    marginTop: 31,
    marginBottom: 7,
    alignSelf: "center",
  },
});

export default LoadingScreen;
