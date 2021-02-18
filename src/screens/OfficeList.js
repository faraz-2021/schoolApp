import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import axios from "axios";
import { environment } from "../../environment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getSubBrand } from '../redux/Actions/action';
import { connect } from "react-redux";

const OfficeList = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getResult();
  }, [getResult]);
  const getResult = async () => {
    const result = [];
    
    const token = await AsyncStorage.getItem("token");
    console.log(token);
    const headers = {
      "token": token,
    };
    try {
      await axios
        .get(`${environment.apiBase}/brand/sub_brand/get`, { headers })
        .then((res) => {
              res.data.forEach((e) => {
                result.push({ name: e.subBrand_name, des: e.description });
              });
              props.dispatch(getSubBrand(result));
          
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SafeAreaView>
      <FlatList
        data={props.value[0]}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.des}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

const mapStateToProps = (state) => {
  return {
    value: state.value,
  }
}
const mapdispatchToProps = (dispatch) => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps,mapdispatchToProps)(OfficeList);
