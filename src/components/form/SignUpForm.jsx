import React from "react";
import { StyleSheet, View } from "react-native";
// Assets
import colors from "../../config/colors";
// Components
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "@react-navigation/native";
import Button from "../Buttons/Button";
import Text from "../CustomText";
import CheckBox from "expo-checkbox";

function SignInForm({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  hidePassword,
  setHidePassword,
  hideConfirmPassword,
  setHideConfirmPassword,
  policyChecked,
  setPolicyChecked,
}) {
  return (
    <Stack spacing={16} style={{ margin: "5%" }}>
      <TextInput
        label="Display Name"
        variant="outlined"
        color={colors.primary}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        label="Email"
        variant="outlined"
        color={colors.primary}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        label="Password"
        secureTextEntry={hidePassword}
        variant="outlined"
        value={password}
        color={colors.primary}
        onChangeText={setPassword}
        trailing={(props) => (
          <IconButton
            onPress={() =>
              hidePassword ? setHidePassword(false) : setHidePassword(true)
            }
            icon={(props) => (
              <Icon name={hidePassword ? "eye-off" : "eye"} {...props} />
            )}
            {...props}
          />
        )}
      />
      <TextInput
        label="Re-type password"
        secureTextEntry={hideConfirmPassword}
        variant="outlined"
        value={confirmPassword}
        color={colors.primary}
        onChangeText={setConfirmPassword}
        trailing={(props) => (
          <IconButton
            onPress={() =>
              hideConfirmPassword
                ? setHideConfirmPassword(false)
                : setHideConfirmPassword(true)
            }
            icon={(props) => (
              <Icon name={hidePassword ? "eye-off" : "eye"} {...props} />
            )}
            {...props}
          />
        )}
      />
      <View style={styles.checkboxContainer}>
        <CheckBox style={styles.checkbox} value={policyChecked} onValueChange={setPolicyChecked}  />
        <Text style={styles.forgotPassword}>
          By signing up you accept Ortho Foodie’s{" "}
          <Link to={{ screen: "ForgotPassword" }} style={styles.policyText}>
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link to={{ screen: "ForgotPassword" }} style={styles.policyText}>
            Privacy Policy
          </Link>
        </Text>
      </View>
      <Button
        title="Sign up with email"
        textStyle={{ color: colors.white }}
        style={styles.loginButton}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    color: colors.grey,
    marginTop: 10
  },
  policyText: {
    color: colors.secondary,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    height: 61,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 16,
    overflow: "hidden",
    fontSize: 8,
  },
  checkbox: {
    borderColor: colors.secondary,
    marginRight: 8,
  },
  checkboxContainer: {
    marginRight: "5%",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SignInForm;
