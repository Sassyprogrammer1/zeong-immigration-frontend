import * as types from "../constants/uinversityConstant"


export const getUniversity = (searchQuery) => ({
    type: types.SEARCH_UNIVERSITY_REQUEST,
    payload: { searchQuery },

})


export const getUniversitySuccess = (data) => ({
    type: types.SEARCH_UNIVERSITY_SUCCESS,
    data

})

export const getUniversityFail = (error) => ({
    type: types.SEARCH_UNIVERSITY_FAIL,
    error

})