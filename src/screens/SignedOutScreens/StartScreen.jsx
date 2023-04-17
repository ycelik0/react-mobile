import React, { useContext } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
// Assets
import colors from "../../config/colors";
import MogoLogoFill from "../../assets/images/MogoLogoFill";
// Components
import Text from "../../components/CustomText";
import Button from "../../components/Buttons/Button";
import { Stack } from "@react-native-material/core";

function SignInScreen({ navigation }) {
  const { userToken } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View>
          <Text>{userToken}</Text>
        </View>
        <Stack spacing={26} center>
          <MogoLogoFill />
          <Stack spacing={13} style={{ marginTop: 16 }} w="100%">
            <Button
              title="Login"
              onPress={() => navigation.navigate("SignIn")}
              textStyle={styles.buttonText}
              style={[styles.button]}
            />
            <Button
              title="Create an account"
              onPress={() => navigation.navigate("SignUp")}
              textStyle={[styles.buttonText, { color: colors.primary }]}
              style={[
                styles.button,
                {
                  backgroundColor: colors.white,
                  borderColor: colors.primary,
                },
              ]}
            />
          </Stack>
        </Stack>
        <View style={styles.bottomView}>
          <Text style={styles.bottomView}>
            <Text style={{ color: colors.secondary, fontSize: 16 }}>85%</Text>{" "}
            of users got faster results with our premium features.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.white,
    flex: 1,
    paddingBottom: 16,
  },
  innerContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexGrow: 1,
    justifyContent: "space-between",
    marginHorizontal: "5%",
  },
  button: {
    backgroundColor: colors.primary,
    height: 61,
    justifyContent: "center",
  },
  bottomView: {
    alignSelf: "center",
    textAlign: "center",
    marginHorizontal: "4%",
  },
  buttonText: {
    color: colors.white,
  },
});

export default SignInScreen;
