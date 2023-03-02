import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
// Assets
import colors from "../../config/colors";
// Components
import { useFonts } from "expo-font";
import SignInForm from "../../components/SignInForm";

function SignInScreen() {
  // Fonts
  const [loaded] = useFonts({
    "Public Sans": require("../../assets/fonts/public_sans/PublicSans-VariableFont_wght.ttf"),
  });
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [hidePassword, setHidePassword] = useState(true);

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text
          style={{
            marginLeft: "5%",
            marginTop: "5%",
            color: colors.secondary,
            fontFamily: loaded ? "Public Sans" : "",
            fontWeight: "bold",
            fontSize: 32,
          }}
        >
          Sign in
        </Text>
        <SignInForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          hidePassword={hidePassword}
          setHidePassword={setHidePassword}
        />
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

export default SignInScreen;
