import React from "react";
import { Text as NativeText } from "react-native";
import { useFonts } from "expo-font";

export default function Text(props) {
  const [loaded] = useFonts({
    "Public Sans": require("../assets/fonts/public_sans/static/PublicSans-Regular.ttf"),
  });
  return (
    <NativeText
      style={[
        {
          fontFamily: loaded ? "Public Sans" : "",
        },
        props.style,
      ]}
      {...props}
    >
      {props.children}
    </NativeText>
  );
}
