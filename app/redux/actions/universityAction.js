import * as types from "../constants/uinversityConstant"


export const getUniversity = (query) => {
    return {
        type: types.SEARCH_UNIVERSITY_REQUEST,
        query,

    }
}


export const getUniversitySuccess = (data) => {

    return {
        type: types.SEARCH_UNIVERSITY_SUCCESS,
        data

    }
}

export const getUniversityFail = (error) => {
    return {
        type: types.SEARCH_UNIVERSITY_FAIL,
        error

    }
}

export const getCourseRequest = (course) => {
    console.log(course, "courses")

    return {
        type: types.GET_COURSE_REQUEST,
        course

    }
}

export const getCourseSuccess = (course) => {

    return {
        type: types.GET_COURSE_SUCCESS,
        course

    }
}

export const studentInfoSend = (data) => {
    return {
        type: types.SEND_STUDENT_INFO_REQUEST,
        data

    }
}

export const studentInfoSuccess = (data) => {

    return {
        type: types.SEND_STUDENT_INFO_SUCCESS,
        data

    }
}
export const studentInfoFail = (error) => {

    return {
        type: types.SEND_STUDENT_INFO_FAIL,
        error

    }
}