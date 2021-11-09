import useRobot from "../../hooks/useRobot";
import Robot from "../Robot/Robot";

const ListRobots = () => {
  const { robots } = useRobot();

  return (
    <section className="section-robots row">
      {robots.map((robot) => (
        <Robot
          infoRobot={robot}
          key={robot._id}
          day={new Date(robot.caracteristicas.creacion).getDate()}
          month={new Date(robot.caracteristicas.creacion).getMonth()}
          year={new Date(robot.caracteristicas.creacion).getFullYear()}
        />
      ))}
    </section>
  );
};

export default ListRobots;
