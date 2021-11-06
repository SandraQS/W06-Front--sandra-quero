const Robot = ({ infoRobot }) => {
  return (
    <article className="card-robot">
      <img
        src={infoRobot.imagen}
        alt={infoRobot.nombre}
        className="card-robot__image"
        whith="150"
      />
      <h2 className=" card-robot__title">{infoRobot.nombre}</h2>
      <h3 className="card-robot__title-features">
        Características de {infoRobot.nombre}
      </h3>
      <ul className="card-robot__list-features">
        <li className="card-robot__feature">
          Velocidad: {infoRobot.caracteristicas.velocidad}
        </li>
        <li className="card-robot__feature">
          Resistencia: {infoRobot.caracteristicas.resistencia}
        </li>
        <li className="card-robot__feature">
          Fecha de creación: {infoRobot.caracteristicas.creacion}
        </li>
      </ul>
      <button type="button" className="btn btn-dark card-robot__edit">
        Editar
      </button>
      <button type="button" className="btn btn-danger card-robot__delete">
        Eliminar
      </button>
    </article>
  );
};

export default Robot;
