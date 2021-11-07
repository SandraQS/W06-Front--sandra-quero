import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createRobotThunk,
  deleteRobotByIdThunk,
  loadRobotsActionThunk,
} from "../redux/thunks/robotsThunks";

const useRobot = () => {
  const dispatch = useDispatch();
  const robots = useSelector(({ robots }) => robots);

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsActionThunk());
  }, [dispatch]);

  const deleteRobots = (id) => {
    dispatch(deleteRobotByIdThunk(id));
  };

  const createNewRobot = (robot) => {
    dispatch(createRobotThunk(robot));
  };

  return {
    dispatch,
    robots,
    loadRobots,
    deleteRobots,
    createNewRobot,
  };
};

export default useRobot;
