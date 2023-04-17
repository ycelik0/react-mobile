import React from "react";
import { Pressable } from "@react-native-material/core";
import { View } from "react-native";
import Text from "../CustomText/";
// Assets
import colors from "../../config/colors";

function Button(props) {
  let styling = [];
  props.style.forEach((style) => {
    style.length > 0
      ? style.forEach((data) => {
          styling.push(data);
        })
      : styling.push(style);
  });
  return (
    <View
      style={{
        height: 61,
        borderRadius: 16,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Pressable style={props.style} pressEffectColor={colors.white} {...props}>
        <Text
          style={[
            {
              fontSize: 16,
              fontWeight: "bold",
              alignSelf: "center",
              pointerEvents: "none",
            },
            props.textStyle,
          ]}
        >
          {props.title}
        </Text>
      </Pressable>
    </View>
  );
}

export default Button;
