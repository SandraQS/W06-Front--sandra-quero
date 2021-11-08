import "./App.css";
import ListRobots from "./components/ListRobots/ListRobots";
import Form from "./components/Form/Form";
import useRobot from "./hooks/useRobot";
import Login from "./components/Login/Login";

function App() {
  const { createNewRobot, user } = useRobot();

  return user.isAuth ? (
    <>
      (<h1>Los Perretes Robot</h1>
      <ListRobots />
      <Form createNewRobot={createNewRobot} />
    </>
  ) : (
    <Login />
  );
}

export default App;
