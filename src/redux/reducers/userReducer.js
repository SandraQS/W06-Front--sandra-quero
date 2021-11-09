import actionTypes from "../actions/actionTypes";

const userReducer = (user = { isAuth: false, user: {} }, action) => {
  let newUser;

  switch (action.type) {
    case actionTypes.loginUser:
      newUser = { isAuth: true, user: { ...action.user } };
      break;
    case actionTypes.userRegitered:
      newUser = { isAuth: true, user: { ...action.user } };
      break;
    case actionTypes.logoutUser:
      newUser = { isAuth: false, user: {} };
      break;
    default:
      newUser = user;
  }
  return newUser;
};

export default userReducer;
