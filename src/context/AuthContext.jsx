import React, { createContext, useState } from "react";
import axios from "../config/axios";
import * as SecureStore from "expo-secure-store";

// Create Auth Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // States
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Login
  const login = async ({ email, password }) => {
    try {
      if (email.length > 0 || password.length > 0) {
        // Send email and password to authentication endpoint
        const userResponse = await axios.post(
          "auth/authenticate",
          JSON.stringify({ email, password }),
          {
            withCredentials: true,
          }
        );
        setUserToken(await userResponse.data.data.token);
        // Put response data in Async Storage
        await SecureStore.setItemAsync(
          "OF_SESSID",
          await userResponse.data.data.token
        );
        await SecureStore.setItemAsync(
          "OF_USERINFO_1",
          JSON.stringify(await userResponse.data.data.user)
        );

        if (userResponse) {
          // Get extra User information from person endpoint
          const personResponse = await axios.get(
            `items/person/${await userResponse.data.data.user.id}`
          );
          // Put response data in Async Storage
          await SecureStore.setItemAsync(
            "OF_USERINFO_2",
            JSON.stringify(await personResponse.data.data)
          );
        }
      } else {
        setErrorMsg("Fill in all field");
      }
    } catch (error) {
      // const errorCode = error.response.data.error.code;
      // If there is no response server is down
      if (!error) {
        setErrorMsg("No Server Response");
        // If the response.status is equal to certain status code give error message
      } else if (error.response.data.error.code == 100) {
        setErrorMsg("Invalid user credentials");
      } else if (error.response.data.error.code == 103) {
        setErrorMsg("User inactive");
      } else if (error.response.data.error.code == 114) {
        setErrorMsg("Invalid email address");
      } else {
        setErrorMsg("Login Failed");
      }
    }
    // Set token and loading to false
    setIsLoading(false);
  };

  const logout = async () => {
    // Set token to null and loading to false
    await SecureStore.deleteItemAsync("OF_SESSID");
    await SecureStore.deleteItemAsync("OF_USERINFO");
    setIsLoading(false);
    setUserToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isLoading,
        userToken,
        errorMsg,
        setErrorMsg,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
