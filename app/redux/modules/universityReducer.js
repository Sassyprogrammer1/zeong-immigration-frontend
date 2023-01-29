import produce from 'immer';
import { GET_COURSE_REQUEST, GET_COURSE_SUCCESS, SEARCH_UNIVERSITY_FAIL, SEARCH_UNIVERSITY_REQUEST, SEARCH_UNIVERSITY_SUCCESS, SEND_STUDENT_INFO_FAIL, SEND_STUDENT_INFO_REQUEST, SEND_STUDENT_INFO_SUCCESS } from '../constants/uinversityConstant';


export const UniState = {
    loading: false,
    university: [],
    courses: null,
    message: null,
    studentData: null

};

const universityReducer = (state = UniState, action = {}) => produce(state, draft => {
    switch (action.type) {
        case SEARCH_UNIVERSITY_REQUEST:
            draft.loading = true;
            draft.message = draft.university.length <= 0 ? "No University Match" : draft.message;

            break;

        case SEARCH_UNIVERSITY_SUCCESS:
            draft.loading = false,
                draft.university = action.data;
            break;

        case SEARCH_UNIVERSITY_FAIL:

            draft.loading = false;
            draft.message = action.error;
            break;

        case GET_COURSE_REQUEST:

            draft.loading = true;

            break;

        case GET_COURSE_SUCCESS:


            draft.loading = false;
            draft.courses = action.course;

            break;

        // studnet info form
        case SEND_STUDENT_INFO_REQUEST:
            draft.loading = true;
            break;
        case SEND_STUDENT_INFO_SUCCESS:


            draft.loading = false;
            draft.studentData = action.data;
            darft.message = "student Create succesfully";


            break;

        case SEND_STUDENT_INFO_FAIL:


            draft.loading = false;
            draft.message = action.error


            break;

        default:
            break;
    }
});

export default universityReducer;
