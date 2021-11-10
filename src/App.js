import "./App.css";
import ListRobots from "./components/ListRobots/ListRobots";
import Form from "./components/Form/Form";
import useRobot from "./hooks/useRobot";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import useUser from "./hooks/useUser";
import Logout from "./components/Logout/Logout";

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
  console.log(user);
  return isAuth ? (
    <>
      <h1>Los Perretes Robot</h1>
      <Logout user={user} />
      <ListRobots />
      <Form createNewRobot={createNewRobot} />
    </>
  ) : (
    <Login />
  );
}

export default App;
