import {takeEvery,call} from 'redux-saga/effects';
import {GET_BRANDS} from '../constant/type';

function* OfficeList() {
    yield call(
        
    )
}


function* watchOfficeList() {
    yield takeEvery(GET_BRANDS,OfficeList)
}