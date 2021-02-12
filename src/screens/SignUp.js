import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../colors/ConstantColors";

const SignUp = (props) => {
  const handleClick = () => {
    props.navigation.navigate("LogIn");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.Img}
        source={require("../../assets/1.jpg")}
      >
        <Image
          source={require("../../assets/graduate.png")}
          style={styles.Img1}
        />
        <Text style={styles.LoginText}>Create Account</Text>
        <View style={styles.flexStart}>
          <Text style={styles.Text1}>Already have account?</Text>
          <Text style={styles.Text2} onPress={handleClick}>
            Sign In
          </Text>
        </View>

        <View style={styles.View1}>
          <TextInput style={styles.TextInput} placeholder="E-m@il" />
        </View>
        <View style={styles.View1}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.View1}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.SignIn}>Create Account</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    height: 40,
    width: 250,
    fontSize: 23,
  },
  View1: {
    height: 50,
    width: 320,
    borderColor: "gray",
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  LoginText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  flexStart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  Text1: {
    color: Colors.white,
    fontSize: 15,
  },
  Text2: {
    color: Colors.perlBlue,
    fontSize: 15,
    marginLeft: 5,
  },
  SignIn: {
    color: Colors.palmBlue,
    fontSize: 20,
  },
  Img: {
    flex: 1,
    width: 400,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  Img1: {
    width: 250,
    height: 200,
  },
  Button: {
    borderRadius: 20,
    backgroundColor: Colors.perlBlue,
    height: 50,
    width: 320,
    borderColor: "gray",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 25,
  },
});
