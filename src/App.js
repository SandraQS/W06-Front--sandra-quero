import "./App.css";
import ListRobots from "./components/ListRobots/ListRobots";
import Form from "./components/Form/Form";
import useRobot from "./hooks/useRobot";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import useUser from "./hooks/useUser";

function App() {
  const { createNewRobot, loadRobots } = useRobot();
  const { user, userRegitered } = useUser();
  const isAuth = user.isAuth;

  useEffect(() => {
    userRegitered();
    if (isAuth) {
      loadRobots();
    }
  }, [loadRobots, isAuth, userRegitered]);
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
