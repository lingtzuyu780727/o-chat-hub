import { authActions } from '../actions/auth_actions';

const initState = {
  userDetails: null,
  userName: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case authActions.SET_USER_DETAILS:
      return {
        ...state,
        // setUserDetails 那邊來的
        userDetails: action.userDetails,
      };
    case authActions.SET_USERNAME:
      return {
        ...state,
        userName: action.userName,
      };
    // 不做任何修改
    default:
      return state;
  }
};

export default reducer;

// create action file for the reducer
