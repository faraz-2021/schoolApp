import { createStore } from "redux";
import Reducer from '../Reducers/reducers';

const store = createStore(Reducer);

export default store;