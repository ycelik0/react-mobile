import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
// Assets
import colors from "../../config/colors";
// Components
import Text from "../../components/CustomText";

function ForgotPasswordScreen() {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
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
});

export default ForgotPasswordScreen;
