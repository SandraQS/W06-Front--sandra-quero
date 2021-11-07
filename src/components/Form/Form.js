import { useEffect, useMemo, useState } from "react";

const Form = ({ createNewRobot }) => {
  const initialData = useMemo(
    () => ({
      caracteristicas: {
        velocidad: "",
        resistencia: "",
        creacion: "",
      },
      nombre: "",
      imagen: "",
    }),
    []
  );

  const [newRobot, setNewRobot] = useState(initialData);

  const infoRobot = (event) => {
    event.preventDefault();
    setNewRobot({ ...newRobot, [event.target.id]: event.target.value });
  };

  const featuresRobot = (event) => {
    event.preventDefault();
    setNewRobot({
      ...newRobot,
      caracteristicas: {
        ...newRobot.caracteristicas,
        [event.target.id]: event.target.value,
      },
    });
  };

  const clickCreate = (event) => {
    event.preventDefault();
    createNewRobot(newRobot);
    setNewRobot(initialData);
  };
  return (
    <form
      onSubmit={(event) => {
        clickCreate(event);
      }}
    >
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Nombre: </label>
        <input
          type="nombre"
          className="form-control"
          id="nombre"
          placeholder="Nombre"
          onChange={infoRobot}
        />
      </div>
      <div className="form-group">
        <label htmlFor="imagen">Url: </label>
        <input
          type="url"
          className="form-control"
          id="imagen"
          placeholder="Escribe la url de la imagen"
          onChange={infoRobot}
        />
      </div>
      <div className="form-group">
        <label htmlFor="velocidad">Velocidad </label>
        <select
          className="form-control"
          id="velocidad"
          onChange={featuresRobot}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="resistencia">Resistencia </label>
        <select
          className="form-control"
          id="resistencia"
          onChange={featuresRobot}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="creacion">Fecha de creación </label>
        <input
          type="date"
          className="form-control"
          id="creacion"
          placeholder="fecha de creación"
          onChange={featuresRobot}
        />
      </div>
      <button type="submit" className="btn btn-dark">
        Crear mi robot
      </button>
    </form>
  );
};

export default Form;
