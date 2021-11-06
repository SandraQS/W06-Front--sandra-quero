import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRobotsActionThunk } from "../redux/thunks/robotsThunks";

const useRobot = () => {
  const dispatch = useDispatch();
  const robots = useSelector(({ robots }) => robots);

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsActionThunk());
  }, [dispatch]);

  return {
    dispatch,
    robots,
    loadRobots,
  };
};

export default useRobot;
