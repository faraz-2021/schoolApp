import React from "react";
import { View, Text, StyleSheet, Button,TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
         <TouchableOpacity onPress={() => navigation.openDrawer()}><FontAwesome name="bars" size={30}/></TouchableOpacity> 
        <Text style={styles.Dashboard}>Dashboard</Text>
      </View>
    
    </View>
  );
}
function NotificationsScreen({ navigation }) {
  return (
    <View>
    
     <Text>Navigation Screen</Text>
    </View>
  );
}

const Home = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="sideBar" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 390,
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
