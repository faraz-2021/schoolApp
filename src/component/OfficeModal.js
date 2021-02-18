import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import { Colors } from "../colors/ConstantColors";
import { environment } from "../../environment";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addSubBrand } from "../redux/Actions/action";
import { connect } from "react-redux";

const OfficeModal = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const user = {
    subBrand_name: inputValue,
    description: inputValue1,
  };

  // const AddOffice = async () => {
  //   const user = {
  //     subBrand_name: inputValue,
  //     description: inputValue1,
  //   };
  //   console.log(user);
  //   const token = await AsyncStorage.getItem("token");
  //   const headers = {
  //     token: token,
  //   };
  //   try {
  //     await axios
  //       .post(`${environment.apiBase}/brand/sub_brand/add `, user, { headers })
  //       .then((res) => {
  //         console.log(res, "klklkl");
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   props.setModalVisible(false);
  // };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.innerView}>
            <Text style={styles.modalText}>Office</Text>
            <TextInput
              style={styles.modalView}
              onChangeText={(e) => setInputValue(e)}
              value={inputValue}
              autoCapitalize="none"
            />
            <Text style={styles.modalText}>Description</Text>

            <TextInput
              style={styles.modalView1}
              onChangeText={(e) => setInputValue1(e)}
              value={inputValue1}
              autoCapitalize="none"
            />
            <View style={styles.flex}>
              <TouchableOpacity onPress={props.handleClick}>
                <Text style={styles.Button}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>props.Add(user), props.setModalVisible()}>
                <Text style={styles.Button}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height: 100,
    width: 290,
    marginLeft: 9,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalView1: {
    height: 100,
    width: 290,
    marginLeft: 9,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Button: {
    color: Colors.blue,
    fontSize: 20,
    marginTop: 10,
  },
  textStyle: {
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    width: 300,
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 10,
  },
  flex: {
    width: 250,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
  },
  innerView: {
    borderRadius: 20,
    padding: 15,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    Add: (user) => {
      dispatch(addSubBrand(user));
    },
  };
}

export default connect(null, mapDispatchToProps)(OfficeModal);
