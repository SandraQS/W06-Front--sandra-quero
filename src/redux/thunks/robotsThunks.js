import {
  loadRobotByIdAction,
  loadRobotsAction,
} from "../actions/actionCreators";

const urlApi = process.env.REACT_APP_URL_API_ROBOTS;
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
