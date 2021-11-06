import { useEffect } from "react";
import "./App.css";
import Robot from "./components/Robot/Robot";
import useRobot from "./hooks/useRobot";

function App() {
  const { robots, loadRobots } = useRobot();
  useEffect(() => {
    loadRobots();
  }, [loadRobots]);
  return (
    <>
      <h1>Los Perretes Robot</h1>
      {robots.map((robot) => (
        <Robot infoRobot={robot} key={robot._id} />
      ))}
    </>
  );
}

export default App;
