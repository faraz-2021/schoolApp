import axios from "axios";
import { call, put } from "redux-saga/effects";
import { LoginSuccess, LoginFailure } from "../Actions/action";
import { environment } from "../../../environment";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function* LogIn(action) {
  try {
    const response = yield call(async () => {
      await axios
        .post(`${environment.apiBase}/brand/login`, action.user)
        .then(async (res) => {
          await AsyncStorage.setItem("token", res.headers.token);
        });
    });

    if (response) {
      yield put(LoginSuccess({ response: response }));
    } else {
      yield put(LoginFailure({ error: "invalid user" }));
    }
  } catch (err) {
    yield put(LoginFailure({ error: "invalid user" }));
  }
}
