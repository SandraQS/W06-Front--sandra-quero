import actionTypes from "./actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const loadRobotByIdAction = (id) => ({
  type: actionTypes.loadRobotById,
  id,
});

export const deleteRobotByIdAction = (id) => ({
  type: actionTypes.deleteRobotById,
  id,
});

export const createRobotAction = (robot) => ({
  type: actionTypes.createRobot,
  robot,
});

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});

export const logoutUserAction = () => ({
  type: actionTypes.logoutUser,
});
