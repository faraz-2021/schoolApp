import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import { ScrollView } from "react-native-gesture-handler";
import Home from './src/screens/Home';
import store from "./src/redux/store/store";
import {Provider} from 'react-redux';

const MainNavigator = createSwitchNavigator({
  LogIn: { screen: Login },
  SignUp: { screen: SignUp },
  HomeScreen:{ screen: Home }
});
const Main = createAppContainer(MainNavigator);

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Main />
      </ScrollView>
      <StatusBar style="auto"/>
    </NavigationContainer>
    </Provider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
