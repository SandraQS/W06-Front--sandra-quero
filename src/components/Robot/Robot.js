const Robot = () => {
  return (
    <article className="card-robot">
      <h2 className=" card-robot__title">nombre robot</h2>
      <img
        src="url robot"
        alt="nombre robot"
        className="card-robot__image"
        whith="150"
      />
      <h3 className="card-robot__title-features">Características:</h3>
      <ul className="card-robot__list-features">
        <li className="card-robot__feature">Velocidad: </li>
        <li className="card-robot__feature">Resistencia: </li>
        <li className="card-robot__feature">Fecha de creación: </li>
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
