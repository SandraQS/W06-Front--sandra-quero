import {
  createRobotAction,
  deleteRobotByIdAction,
  loadRobotByIdAction,
  loadRobotsAction,
} from "../actions/actionCreators";

const urlApi = process.env.REACT_APP_URL_API_ROBOTS;
const tokenAntiguo = `?token=${process.env.REACT_APP_TOKEN}`;

export const loadRobotsActionThunk = () => async (dispatch) => {
  const { token } = JSON.parse(localStorage.getItem("user"));
  const response = await fetch(urlApi, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  if (response.ok) {
    const arrayRobots = await response.json();
    dispatch(loadRobotsAction(arrayRobots));
  }
};

export const loadRobotByIdThunk = (id) => async (dispatch) => {
  const { token } = JSON.parse(localStorage.getItem("user"));

  const response = await fetch(`${urlApi}${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const robotById = await response.json();

  dispatch(loadRobotByIdAction(robotById));
};

export const deleteRobotByIdThunk = (id) => async (dispatch) => {
  const { token } = JSON.parse(localStorage.getItem("user"));

  const response = await fetch(`${urlApi}delete/${id}${tokenAntiguo}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (response.ok) {
    dispatch(deleteRobotByIdAction(id));
  }
};

export const createRobotThunk = (robot) => async (dispatch) => {
  const { token } = JSON.parse(localStorage.getItem("user"));

  const response = await fetch(`${urlApi}create${tokenAntiguo}`, {
    method: "POST",
    body: JSON.stringify(robot),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const newRobot = await response.json();

  dispatch(createRobotAction(newRobot));
};
