import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
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

  return {
    dispatch,
    robots,
    loadRobots,
    deleteRobots,
  };
};

export default useRobot;
