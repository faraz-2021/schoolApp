import { ActionSheetIOS } from 'react-native';
import {GET_BRANDS} from '../constant/type';

const initialState = {
    value: '',
}

const Reducer = (state=initialState,action) =>{
    switch(action.type){
        case GET_BRANDS:{
            return Object.assign({}, state,{
                value:[ action.subBrand]
            });
        }
        default: return state
    }
}

export default Reducer;