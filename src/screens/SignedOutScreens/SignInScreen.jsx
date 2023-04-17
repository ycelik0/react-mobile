import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
// Assets
import colors from "../../config/colors";
// Components
import SignInForm from "../../components/form/SignInForm";
import { Link } from "@react-navigation/native";
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Text from "../../components/CustomText";

function SignInScreen({ navigation }) {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [hidePassword, setHidePassword] = useState(true);

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View>
          <SignInForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            hidePassword={hidePassword}
            setHidePassword={setHidePassword}
          />
        </View>
        <View style={styles.bottomView}>
          <Text
            style={{
              textAlign: "center",
              color: colors.grey,
              marginBottom: "5%",
            }}
          >
            Continue with
          </Text>
          <View style={{ flexDirection: "row" }}>
            <IconButton
              style={styles.iconButton}
              onPress={() => navigation.navigate("SignIn")}
              icon={(props) => <Icon name="google" {...props} />}
            />
            <IconButton
              style={styles.iconButton}
              onPress={() => navigation.navigate("SignIn")}
              icon={(props) => <Icon name="facebook" {...props} />}
            />
            <IconButton
              style={styles.iconButton}
              onPress={() => navigation.navigate("SignIn")}
              icon={(props) => <Icon name="instagram" {...props} />}
            />
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text>
            Don’t have an account?{" "}
            <Link to={{ screen: "SignUp" }} style={styles.bottomLink}>
              Sign Up
            </Link>
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
  },
  bottomView: {
    alignSelf: "center",
    textAlign: "center",
  },
  bottomLink: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  iconButton: {
    borderWidth: 1,
    borderColor: "rgba(14, 63, 63, 0.2)",
    margin: 7.5,
    width: 42,
    height: 42,
  },
});

export default SignInScreen;
