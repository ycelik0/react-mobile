import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import LoadingScreen from "../screens/LoadingScreen";
import SignInScreen from "../screens/SignedOutScreens/SignInScreen";
import SignUpScreen from "../screens/SignedOutScreens/SignUpScreen";
import ForgotPasswordScreen from "../screens/SignedOutScreens/ForgotPasswordScreen";
import StartScreen from "../screens/SignedOutScreens/StartScreen";
import colors from "../config/colors";

const Stack = createNativeStackNavigator();

function AuthStack() {
  const [avatar, setAvatar] = useState(
    "https://manage.orthofoodie.com/orthofoodie/assets/qon27usd428c4o4w"
  );

  useEffect(() => {
    const getAvatar = async () => {
      const avatarID = JSON.parse(
        await SecureStorage.getItemAsync("OF_USERINFO_1")
      ).avatar;

      if (avatarID !== null) {
        const avatarHash = axios.get(`files/${avatarID}`);
        setAvatar(
          `https://manage.orthofoodie.com/orthofoodie/assets/${
            (await avatarHash).data.data.private_hash
          }`
        );
      }
    };
    getAvatar();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerLargeTitle: true,
        headerShadowVisible: false,
        headerTitleStyle: {
          color: colors.secondary,
          fontWeight: "bold",
          fontSize: 32,
        },
        headerBackVisible: false,
      }}
    >
      {/* Authentication */}
      <Stack.Screen
        name="Loading"
        options={{ headerShown: false }}
        component={LoadingScreen}
      />
      <Stack.Screen
        name="SignIn"
        options={{ title: "Sign In" }}
        component={SignInScreen}
      />
      <Stack.Screen
        name="SignUp"
        options={{ title: "Sign Up" }}
        component={SignUpScreen}
      />
      <Stack.Screen
        name="ForgotPassword"
        options={{ title: "Forgot Password" }}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name="Start"
        options={{ headerShown: false, headerBackVisible: false }}
        component={StartScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
