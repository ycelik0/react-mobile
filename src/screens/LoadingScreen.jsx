import React, { useEffect, useState } from "react";
// Assets
import colors from "../config/colors";
import MogoLogoFill from "../assets/images/MogoLogoFill";
// Components
import { SafeAreaView, View, StyleSheet, Image } from "react-native";
import Text from "../components/CustomText";

function LoadingScreen({ navigation }) {
  const [progressAmount, setProgressAmount] = useState(0);

  useEffect(() => {
    if (progressAmount >= 1) {
      navigation.navigate("SignIn");
    } else {
      setInterval(() => {
        setProgressAmount(1);
      }, 1000);
    }
  }, []);

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View>
        <MogoLogoFill />
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
