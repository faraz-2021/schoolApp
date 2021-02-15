import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { Colors } from "../colors/ConstantColors";
import axios from "axios";
import { environment } from "../../environment";

const Login = (props) => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const SignIn = async () => {
    const user = {
      user_name: text,
      password: password,
    };
    setIsLoading(true);
    const res = await axios
      .post(`${environment.apiBase}/brand/login`, user)
      .then((res) => {
        props.navigation.navigate("HomeScreen");
      });
  };
  const handleClick = () => {
    props.navigation.navigate("SignUp");
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
        <Text style={styles.LoginText}>Student Login</Text>

        <View style={styles.View1}>
          <AntDesign name={"user"} size={25} />
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            onChange={(e) => setText(e)}
            value={text}
          />
        </View>
        <View style={styles.View1}>
          <Feather name={"lock"} size={25} />
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            secureTextEntry={true}
            onChange={(e) => setPassword(e)}
            value={password}
          />
        </View>

        <TouchableOpacity style={styles.Button} onPress={SignIn}>
          <Text style={styles.SignIn}>Sign In</Text>
          {isLoading ? (
            <ActivityIndicator size="small" color={Colors.violet} />
          ) : null}
        </TouchableOpacity>
        <View style={styles.flexStart}>
          <Text style={styles.Text1}>dont have account?</Text>
          <Text style={styles.Text2} onPress={handleClick}>
            Create New
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

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
    borderRadius: 20,
    flexDirection: "row",
    justifyContent:"flex-start",
    justifyContent:"center",
    alignItems: "center",
    marginTop: 20,
  },
  flexCenter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 320,
    marginTop: 20,
  },
});
