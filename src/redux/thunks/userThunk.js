import jwtDecode from "jwt-decode";
import { loginUserAction } from "../actions/actionCreators";

const urlApi = process.env.REACT_APP_URL_API_ROBOTS;

export const loginUserActionThunk = (user) => async (dispatch) => {
  const response = await fetch(`${urlApi}login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const token = response.token;
    const user = jwtDecode(token);
    dispatch(loginUserAction(user));
    localStorage.setItem("user", JSON.stringify({ token }));
  }
};
