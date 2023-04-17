import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Components
import TodayScreen from "../screens/SignedInScreens/TodayScreen";
import ProgressScreen from "../screens/SignedInScreens/ProgressScreen";
import NewsFeedScreen from "../screens/SignedInScreens/NewsFeedScreen";
import FoodDiaryScreen from "../screens/SignedInScreens/FoodDiaryScreen";
import SettingsScreen from "../screens/SignedInScreens/SettingsScreen";
import TabBar from "./TabBar";
import { Image, Text, View } from "react-native";
import colors from "../config/colors";
import {
  Avatar,
  Icon,
  IconButton,
  IconComponentProvider,
} from "@react-native-material/core";

const Tab = createBottomTabNavigator();

function BottomTabs() {
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
    <Tab.Navigator
      initialRouteName="Today"
      screenOptions={{
        headerTitleStyle: {
          color: colors.secondary,
          fontWeight: "bold",
          fontSize: 24,
        },
        headerRight: (props) => (
          <View style={{ flexDirection: "row" }}>
            <View>
              <IconButton
                icon={(props) => (
                  <IconComponentProvider name="bell-outline" {...props} />
                )}
                color={colors.secondary}
              />
            </View>
            <Avatar
              image={
                <Image
                  source={{ uri: avatar }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 37,
                  }}
                />
              }
              size={37}
            />
          </View>
        ),
      }}
      tabBar={TabBar}
    >
      <Tab.Screen name="Today" component={TodayScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen
        name="NewsFeed"
        options={{ title: "News Feed" }}
        component={NewsFeedScreen}
      />
      <Tab.Screen
        name="FoodDiary"
        options={{ title: "Food Diary" }}
        component={FoodDiaryScreen}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
