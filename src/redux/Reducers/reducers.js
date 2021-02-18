import { BRANDS_GOT, SUBRANDS_ADDED} from "../constant/type";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { environment } from "../../../environment";

const initialState = {
  value: "",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case BRANDS_GOT: {
      return Object.assign({}, state, {
        value: [action.subBrand],
      });
    }
    case SUBRANDS_ADDED: return {
        ...state,
        value:[action.user]
    }
    // {
    //   const AddOffice = async () => {
    //     const token = await AsyncStorage.getItem("token");
    //     const headers = {
    //       "token": token,
    //     };
    //     try {
    //       await axios
    //         .post(`${environment.apiBase}/brand/sub_brand/add `, action.user, {
    //           headers,
    //         })
    //         .then((res) => {
    //           console.log(res, "klklkl");
    //         });
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

      
    //   AddOffice();
    // }
    default:
      return state;
  }
};

export default Reducer;
