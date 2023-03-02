import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import LoadingScreen from "./app/screens/LoadingScreen";
import SignInScreen from "./app/screens/SignInOutScreens/SignInScreen";
import SignOutScreen from "./app/screens/SignInOutScreens/SignOutScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="signout" component={SignOutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
