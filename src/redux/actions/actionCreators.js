import actionTypes from "./actionTypes";

export const loadRobotAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const loadRobotByIdAction = (id) => ({
  type: actionTypes.loadRobotById,
  id,
});
