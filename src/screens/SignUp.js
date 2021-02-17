import React, { useState } from "react";
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
import axios from "axios";
import { environment } from "../../environment";

const SignUp = (props) => {
  const [brand, setBrand] = useState("");
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSignUp = async () => {
    const user = {
      "brand_name" : brand,
      "user_name" : text,
      "password" : password,
      "confirm_password" : confirm
  }
 console.log(user)
    await axios.post(`${environment.apiBase}/brand/register`, user).then((res) => {
      console.log(res.data)
        props.navigation.navigate("HomeScreen");
      });
  };
  const handleClick = () => {
    props.navigation.navigate("LogIn");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.Img}
        source={require("../../assets/images/Background.jpg")}
      >
        <Image
          source={require("../../assets/images/Logo.png")}
          style={styles.Img1}
        />
        <Text style={styles.LoginText}>Create Account</Text>

        <View style={styles.View1}>
          <TextInput
            style={styles.TextInput}
            placeholder="Brand"
            onChangeText={(e) => setBrand(e)}
            value={brand}
          />
        </View>

        <View style={styles.View1}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            onChangeText={(e) => setText(e)}
            value={text}
          />
        </View>
        <View style={styles.View1}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(e) => setPassword(e)}
            value={password}
          />
        </View>
        <View style={styles.View1}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={(e) => setConfirm(e)}
            value={confirm}
          />
        </View>
        <TouchableOpacity style={styles.Button} onPress={handleSignUp}>
          <Text style={styles.SignIn}>Create Account</Text>
        </TouchableOpacity>
        <View style={styles.flexStart}>
          <Text style={styles.Text1}>Already have account?</Text>
          <Text style={styles.Text2} onPress={handleClick}>
            Sign In
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderWidth: 1,
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
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 25,
  },
});
