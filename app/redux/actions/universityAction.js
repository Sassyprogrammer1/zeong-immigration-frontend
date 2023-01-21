import * as types from "../constants/uinversityConstant"


export const getUniversity = (query) => {
    console.log(query, "ssss")
    return {
        type: types.SEARCH_UNIVERSITY_REQUEST,
        query,

    }
}


export const getUniversitySuccess = (data) => ({
    type: types.SEARCH_UNIVERSITY_SUCCESS,
    data

})

export const getUniversityFail = (error) => ({
    type: types.SEARCH_UNIVERSITY_FAIL,
    error

})