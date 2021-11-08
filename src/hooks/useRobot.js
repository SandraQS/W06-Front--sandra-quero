import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createRobotThunk,
  deleteRobotByIdThunk,
  loadRobotsActionThunk,
} from "../redux/thunks/robotsThunks";
import { loginUserActionThunk } from "../redux/thunks/userThunk";

const useRobot = () => {
  const dispatch = useDispatch();
  const { robots, user } = useSelector(({ robots, user }) => ({
    robots,
    user,
  }));

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsActionThunk());
  }, [dispatch]);

  const deleteRobots = (id) => {
    dispatch(deleteRobotByIdThunk(id));
  };

  const createNewRobot = (robot) => {
    dispatch(createRobotThunk(robot));
  };

  const loginUser = (user) => {
    dispatch(loginUserActionThunk(user));
  };

  return {
    dispatch,
    robots,
    user,
    loadRobots,
    deleteRobots,
    createNewRobot,
    loginUser,
  };
};

export default useRobot;
