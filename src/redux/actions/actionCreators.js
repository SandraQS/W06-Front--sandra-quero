import actionTypes from "./actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const loadRobotByIdAction = (id) => ({
  type: actionTypes.loadRobotById,
  id,
});
