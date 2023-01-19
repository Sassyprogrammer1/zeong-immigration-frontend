import {
    call, fork, put, take, takeEvery, all
} from 'redux-saga/effects';
import axios from 'axios';
import history from '../../utils/history';


import api from '../../api/baseUrl/BaseUrl';
import { getUniversity, getUniversityFail, getUniversitySuccess } from '../actions/universityAction';
import { SEARCH_UNIVERSITY_REQUEST } from '../constants/uinversityConstant';

export function* searchUniversity(payload) {
    debugger;
    console.log({ payload })
    try {
        const res = yield api.post("/consultant/search",
            {
                searchQuery: "indemand"
            }

        )

        console.log(res, "response from serach")
        put(getUniversitySuccess());
    } catch (error) {
        yield put(getUniversityFail(error));
    }
}


function* getUniversitySaga() {
    yield takeEvery(SEARCH_UNIVERSITY_REQUEST, searchUniversity)
}


