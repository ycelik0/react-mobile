import React, { useContext } from "react";
import { StyleSheet } from "react-native";
// Assets
import colors from "../../config/colors";
// Components
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "@react-navigation/native";
import Button from "../Buttons/Button";
import Text from "../CustomText";
import { AuthContext } from "../../context/AuthContext";

function SignInForm({
  email,
  setEmail,
  password,
  setPassword,
  hidePassword,
  setHidePassword,
}) {
  const { login, errorMsg, setErrorMsg } = useContext(AuthContext);

  return (
    <Stack spacing={16} style={{ margin: "5%" }}>
      <Text style={{ color: "red" }}>{errorMsg}</Text>
      <TextInput
        label="Email"
        variant="outlined"
        color={colors.primary}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setErrorMsg("");
        }}
      />
      <TextInput
        label="Password"
        secureTextEntry={hidePassword}
        variant="outlined"
        value={password}
        color={colors.primary}
        onChangeText={(text) => {
          setPassword(text);
          setErrorMsg("");
        }}
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
      <Text style={styles.forgotPassword}>
        <Link to={{ screen: "ForgotPassword" }} style={styles.forgotPassword}>
          Forgot password?
        </Link>
      </Text>
      {email.length === 0 || password.length === 0 ? (
        <Button
          title="Login"
          disabled
          textStyle={{ color: colors.white }}
          style={[styles.loginButton, styles.loginButtonDisabled]}
          onPress={() => {
            login({ email, password });
            setEmail("");
            setPassword("");
          }}
        />
      ) : (
        <Button
          title="Login"
          textStyle={{ color: colors.white }}
          style={styles.loginButton}
          onPress={() => {
            login({ email, password });
            setEmail("");
            setPassword("");
          }}
        />
      )}
    </Stack>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    color: colors.grey,
    textAlign: "right",
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
  loginButtonDisabled: {
    opacity: 0.75,
  },
});

export default SignInForm;
