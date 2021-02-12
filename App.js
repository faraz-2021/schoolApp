import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";

const MainNavigator = createSwitchNavigator({
  SignIn: { screen: Login },
  SignUp: { screen: SignUp },
});
const Main = createAppContainer(MainNavigator);

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
        <Main/>
        <StatusBar style="auto" />
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
