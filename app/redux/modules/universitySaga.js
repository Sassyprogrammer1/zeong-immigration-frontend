import { useDispatch } from 'react-redux';
import {
    call, fork, put, take, all, takeEvery
} from 'redux-saga/effects';
import api from '../../api/baseUrl/BaseUrl';
import { getCourseRequest, getCourseSuccess, getUniversity, getUniversityFail, getUniversitySuccess } from '../actions/universityAction';
import { GET_COURSE_REQUEST, SEARCH_UNIVERSITY_REQUEST } from '../constants/uinversityConstant';



function* searchUniversity(data) {

    try {
        const res = yield api.post(`/consultant/search`, {
            searchQuery: data.query
        })
        yield put(getUniversitySuccess(res.data.hits))
    } catch (error) {
        yield put(getUniversityFail(error))

    }
}

function* getCourse(data) {
    console.log(data.course, "corse data")
    yield put(getCourseSuccess(data.course))



}



function* universitySaga() {
    yield all([

        yield takeEvery(SEARCH_UNIVERSITY_REQUEST, searchUniversity),
        yield takeEvery(GET_COURSE_REQUEST, getCourse),


    ]);
}

const uniSaga = [
    fork(universitySaga),
];

export default uniSaga;