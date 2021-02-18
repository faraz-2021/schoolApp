import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Office from './Office';

const Drawer = createDrawerNavigator();

function profileScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.Header}>
          <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <FontAwesome name="bars" size={30} />
          </TouchableOpacity>
          <Text style={styles.Dashboard}>Dashboard</Text>
        </View>
      </View>
    );
  }

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
          <FontAwesome name="bars" size={30} />
        </TouchableOpacity>
        <Text style={styles.Dashboard}>Dashboard</Text>
      </View>
    </View>
  );
}

const Home = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Office" component={Office} />  
    </Drawer.Navigator>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 390,
  },
  Header: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  Dashboard: {
    fontSize: 30,
  },
});
