import { useDispatch, useSelector } from "react-redux";
import { userRegiteredAction } from "../redux/actions/actionCreators";
import { loginUserActionThunk } from "../redux/thunks/userThunk";
import jwtDecode from "jwt-decode";
import { useCallback } from "react";

const useUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({
    user,
  }));

  const loginUser = (user) => {
    dispatch(loginUserActionThunk(user));
  };

  const userRegitered = useCallback(() => {
    const registeredUser = JSON.parse(localStorage.getItem("user"));
    if (registeredUser) {
      const infoUser = jwtDecode(registeredUser.token);
      dispatch(userRegiteredAction(infoUser.user));
    }
  }, [dispatch]);

  return {
    dispatch,
    user,
    loginUser,
    userRegitered,
  };
};

export default useUser;
