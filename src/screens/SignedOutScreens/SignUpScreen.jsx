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
import SignUpForm from "../../components/form/SignUpForm";
import { Link } from "@react-navigation/native";
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Text from "../../components/CustomText";

function SignInScreen({ navigation }) {
  // States
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [policyChecked, setPolicyChecked] = useState(false);

  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View>
          <SignUpForm
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            hidePassword={hidePassword}
            setHidePassword={setHidePassword}
            hideConfirmPassword={hideConfirmPassword}
            setHideConfirmPassword={setHideConfirmPassword}
            policyChecked={policyChecked}
            setPolicyChecked={setPolicyChecked}
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
            or sign up with
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
            Already have an account?{" "}
            <Link to={{ screen: "SignIn" }} style={styles.bottomLink}>
              Sign In
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
