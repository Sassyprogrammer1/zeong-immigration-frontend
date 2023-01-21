import produce from "immer";
import { SEARCH_UNIVERSITY_FAIL, SEARCH_UNIVERSITY_REQUEST, SEARCH_UNIVERSITY_SUCCESS } from "../constants/uinversityConstant";


export const UniversityState = {
    loading: false,
    university: null,
    message: null,

}

const universityReducer = (state = UniversityState, action = {}) => produce((_state, draft) => {
    switch (action.type) {
        case SEARCH_UNIVERSITY_REQUEST:
            draft.loading = true;
            draft.message = null;
            break;

        case SEARCH_UNIVERSITY_SUCCESS:
            draft.loading = false;
            draft.university = action.data;
            break;

        case SEARCH_UNIVERSITY_FAIL:
            draft.loading = false;
            draft.message = action.error;
        default:
            break;
    }

});

export default universityReducer;