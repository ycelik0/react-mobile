import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
// Assets
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import { Pressable } from "@react-native-material/core";

function TabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            pressEffectColor={colors.white}
            style={{
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              paddingVertical: "3%",
            }}
            key={route.key}
          >
            {route.name === "Today" ? (
              <MaterialCommunityIcons
                name="calendar"
                size={24}
                color={isFocused ? colors.primary : colors.secondary}
                style={{ flex: 1 }}
              />
            ) : (
              ""
            )}
            {route.name === "Progress" ? (
              <Ionicons
                name="bar-chart"
                size={24}
                color={isFocused ? colors.primary : colors.secondary}
              />
            ) : (
              ""
            )}
            {route.name === "News Feed" ? (
              <MaterialCommunityIcons
                name="note-outline"
                size={24}
                color={isFocused ? colors.primary : colors.secondary}
              />
            ) : (
              ""
            )}
            {route.name === "Food Diary" ? (
              <MaterialCommunityIcons
                name="book-open-outline"
                size={24}
                color={isFocused ? colors.primary : colors.secondary}
              />
            ) : (
              ""
            )}
            {route.name === "Settings" ? (
              <Ionicons
                name="settings-outline"
                size={24}
                color={isFocused ? colors.primary : colors.secondary}
                style={{ flex: 1 }}
              />
            ) : (
              ""
            )}
            <Text
              style={{
                color: isFocused ? "#673ab7" : "#222",
                fontSize: 10,
                textAlign: "center",
                paddingTop: 10,
              }}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default TabBar;
