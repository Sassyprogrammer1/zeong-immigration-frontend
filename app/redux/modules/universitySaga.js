import { useDispatch } from 'react-redux';
import {
    call, fork, put, take, takeEvery, all
} from 'redux-saga/effects';
import api from '../../api/baseUrl/BaseUrl';
import { getUniversity, getUniversityFail, getUniversitySuccess } from '../actions/universityAction';
import { SEARCH_UNIVERSITY_FAIL, SEARCH_UNIVERSITY_REQUEST, SEARCH_UNIVERSITY_SUCCESS } from '../constants/uinversityConstant';



function* searchUniversity(data) {
    console.log(data, "data")
    disptch({ type: SEARCH_UNIVERSITY_REQUEST, getUniversity })
    try {
        const uni = yield api.post(`/consultant/search`, {
            searchQuery: data.query
        })

        yield put(getUniversitySuccess(res.data))




    } catch (error) {
        yield put(getUniversityFail(error?.message))

    }
}


function* syncUniversitySaga() {
    const data = yield call(getUniversity);
    while (true) {
        const { data } = yield take(qurey);
        if (data) {
            yield put(getUniversitySuccess(data));
        } else {
            yield put(getUniversityFail(data));
        }
    }
}


function* universitySaga() {
    yield all([

        yield takeEvery(SEARCH_UNIVERSITY_REQUEST, searchUniversity)

    ])
}

const uniSaga = [
    fork(universitySaga),
];

export default uniSaga;