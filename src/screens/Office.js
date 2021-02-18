import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Colors } from "../colors/ConstantColors";
import OfficeModal from "../component/OfficeModal";
import OfficeList from "./OfficeList";



export default function Office() {
  const [modalVisible, setModalVisible] = useState(false);
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
      <OfficeList />
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
