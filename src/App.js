import "./App.css";
import ListRobots from "./components/ListRobots/ListRobots";
import Form from "./components/Form/Form";
import useRobot from "./hooks/useRobot";

function App() {
  const { createNewRobot } = useRobot();
  return (
    <>
      <h1>Los Perretes Robot</h1>
      <ListRobots />
      <Form createNewRobot={createNewRobot} />
    </>
  );
}

export default App;
