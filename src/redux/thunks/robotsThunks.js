import {
  createRobotAction,
  deleteRobotByIdAction,
  loadRobotByIdAction,
  loadRobotsAction,
} from "../actions/actionCreators";

const urlApi = process.env.REACT_APP_URL_API_ROBOTS;
const token = `?token=${process.env.REACT_APP_TOKEN}`;
export const loadRobotsActionThunk = () => async (dispatch) => {
  const response = await fetch(urlApi);
  const arrayRobots = await response.json();

  dispatch(loadRobotsAction(arrayRobots));
};

export const loadRobotByIdThunk = (id) => async (dispatch) => {
  const response = await fetch(`${urlApi}${id}`);
  const robotById = await response.json();

  dispatch(loadRobotByIdAction(robotById));
};

export const deleteRobotByIdThunk = (id) => async (dispatch) => {
  const response = await fetch(`${urlApi}delete/${id}${token}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteRobotByIdAction(id));
  }
};

export const createRobotThunk = (robot) => async (dispatch) => {
  const response = await fetch(`${urlApi}create${token}`, {
    method: "POST",
    body: JSON.stringify(robot),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const newRobot = await response.json();

  dispatch(createRobotAction(newRobot));
};
