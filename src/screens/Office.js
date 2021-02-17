import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Colors } from "../colors/ConstantColors";
import OfficeModal from "../component/OfficeModal";
import OfficeData from "./OfficeAdd";

const DATA = [
    {
      id: 1,
      office: 'DAV',
      description:"this is DAV school"
    },
    {
      id: 2,
      office: 'DPS',
      description:"this is DPS school"
    },
   
  ];

export default function Office() {
  const [modalVisible, setModalVisible] = useState(false);
  const[officeList,setOfficeList] = useState(DATA);
  const handleClick = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.Main}>
      <View style={styles.Head}>
        <Text style={styles.t1}>Office </Text>

        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Icon name="pluscircleo" size={30} />
        </TouchableOpacity>
      </View>
      {modalVisible ? (
        <OfficeModal
          modalVisible={modalVisible}
          handleClick={handleClick}
          setModalVisible={setModalVisible}
        />
      ) : null}
      <OfficeData />
    </View>
  );
}
const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  Head: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 2,
    borderBottomColor: Colors.grey,
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  t1: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
