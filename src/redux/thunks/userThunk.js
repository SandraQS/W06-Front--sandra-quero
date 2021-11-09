import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginUserAction } from "../actions/actionCreators";

const urlApi = process.env.REACT_APP_URL_API_USERS;

export const loginUserActionThunk = (user) => async (dispatch) => {
  const response = await axios.post(`${urlApi}login`, user);

  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token);

    dispatch(loginUserAction(user));
    localStorage.setItem("user", JSON.stringify({ token: token }));
  }
};
