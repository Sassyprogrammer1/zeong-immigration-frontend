import {
    call, fork, put, take, all, takeEvery
} from 'redux-saga/effects';
import api from '../../api/baseUrl/BaseUrl';
import { getCourseRequest, getCourseSuccess, getUniversity, getUniversityFail, getUniversitySuccess, studentInfo, studentInfoFail, studentInfoSuccess } from '../actions/universityAction';
import { GET_COURSE_REQUEST, SEARCH_UNIVERSITY_REQUEST, SEND_STUDENT_INFO_REQUEST } from '../constants/uinversityConstant';



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
    yield put(getCourseSuccess(data.course))



}


function* studentData(data) {
    try {
        const res = yield api.post(`/student/create`, data.data)

        yield put(studentInfoSuccess(res.data))
    } catch (error) {
        yield put(studentInfoFail(error))

    }
}




function* universitySaga() {
    yield all([

        yield takeEvery(SEARCH_UNIVERSITY_REQUEST, searchUniversity),
        yield takeEvery(GET_COURSE_REQUEST, getCourse),
        yield takeEvery(SEND_STUDENT_INFO_REQUEST, studentData),


    ]);
}

const uniSaga = [
    fork(universitySaga),
];

export default uniSaga;