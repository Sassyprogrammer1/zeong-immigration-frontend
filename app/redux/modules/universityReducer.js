// import produce from "immer";
// import { LOGIN_FAILURE, LOGIN_REQUEST } from "../constants/authConstants";


// export const UniversityState = {
//     loading: false,
//     university: null,
//     message: null,

// }

// const universityReducer = (state = UniversityState, action = {}) => produce((state, draft) => {
//     switch (action.type) {
//         case LOGIN_REQUEST:
//             draft.loading = true;
//             draft.message = null;
//             break;

//         case LOGIN_REQUEST:
//             draft.loading = false;
//             draft.university = action.data;
//             break;

//         case LOGIN_FAILURE:
//             draft.loading = false;
//             draft.message = action.error;
//         default:
//             break;
//     }

// });

// export default universityReducer;