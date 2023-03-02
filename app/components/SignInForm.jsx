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
import colors from "../config/colors";
// Components
import {
  Stack,
  TextInput,
  IconButton,
  Provider,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";

function SignInForm({
  email,
  setEmail,
  password,
  setPassword,
  hidePassword,
  setHidePassword,
}) {
  // Fonts
  const [loaded] = useFonts({
    "Public Sans": require("../assets/fonts/public_sans/PublicSans-VariableFont_wght.ttf"),
  });

  return (
    <Stack spacing={16} style={{ margin: "5%" }}>
      <TextInput
        label="Email"
        variant="outlined"
        color={colors.primary}
        inputStyle={{ fontFamily: loaded ? "Public Sans" : "" }}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <TextInput
        label="Password"
        secureTextEntry={hidePassword}
        variant="outlined"
        value={password}
        color={colors.primary}
        inputStyle={{ fontFamily: loaded ? "Public Sans" : "" }}
        onChangeText={(text) => {
          setPassword(text);
        }}
        trailing={(props) => (
          <IconButton
            icon={(props) => {
              hidePassword ? (
                <Icon name="eye" {...props} />
              ) : (
                <Icon name="eye-off" {...props} />
              );
            }}
            onPress={() => {
              hidePassword ? setHidePassword(false) : setHidePassword(true);
            }}
            {...props}
          />
        )}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    color: colors.secondary,
  },
});

export default SignInForm;
