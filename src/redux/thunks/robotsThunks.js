import {
  loadRobotByIdAction,
  loadRobotsAction,
} from "../actions/actionCreators";

export const loadRobotsActionThunk = () => async (dispatch) => {
  const response = await fetch("https://robots-api-sqs.herokuapp.com/robots");
  const arrayRobots = await response.json();

  dispatch(loadRobotsAction(arrayRobots));
};

export const loadRobotByIdThunk = (id) => async (dispatch) => {
  const response = await fetch(
    `https://robots-api-sqs.herokuapp.com/robots/${id}`
  );
  const robotById = await response.json();

  dispatch(loadRobotByIdAction(robotById));
};
