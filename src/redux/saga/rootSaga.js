import { all, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST } from "../constant/type";
import { LogIn } from "./loginSaga";
function* watchMan() {
  yield takeLatest(LOGIN_REQUEST, LogIn);
}
export default function* rootSaga() {
  yield all([watchMan()]);
}
