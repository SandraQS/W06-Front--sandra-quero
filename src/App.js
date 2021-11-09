import "./App.css";
import ListRobots from "./components/ListRobots/ListRobots";
import Form from "./components/Form/Form";
import useRobot from "./hooks/useRobot";
import Login from "./components/Login/Login";
import { useEffect } from "react";

function App() {
  const { createNewRobot, user, loadRobots } = useRobot();
  const isAuth = user.isAuth;
  useEffect(() => {
    if (isAuth) {
      loadRobots();
    }
  }, [loadRobots, isAuth]);
  return isAuth ? (
    <>
      <h1>Los Perretes Robot</h1>
      <ListRobots />
      <Form createNewRobot={createNewRobot} />
    </>
  ) : (
    <Login />
  );
}

export default App;
