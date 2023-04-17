import React, { useContext } from "react";
import * as SecureStore from "expo-secure-store"
// Stacks
import AuthStack from "../navigation/AuthStack";
import HomeStack from "../navigation/TabBarStack";
import { AuthContext } from "../context/AuthContext";
// Assets
import colors from "../config/colors";
// Components
import { NavigationContainer } from "@react-navigation/native";
import { View, ActivityIndicator } from "react-native";

function Root() {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.secondary,
        }}
      >
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        {userToken !== null ? <AuthStack /> : <HomeStack />}
      </NavigationContainer>
    );
  }
}

export default Root;
