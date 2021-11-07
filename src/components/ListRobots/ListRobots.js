import { useEffect } from "react";
import useRobot from "../../hooks/useRobot";
import Robot from "../Robot/Robot";

const ListRobots = () => {
  const { robots, loadRobots } = useRobot();
  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <section className="section-robots">
      <ul>
        <li>
          {robots.map((robot) => (
            <Robot
              infoRobot={robot}
              key={robot._id}
              day={new Date(robot.caracteristicas.creacion).getDate()}
              month={new Date(robot.caracteristicas.creacion).getMonth()}
              year={new Date(robot.caracteristicas.creacion).getFullYear()}
            />
          ))}
        </li>
      </ul>
    </section>
  );
};

export default ListRobots;
