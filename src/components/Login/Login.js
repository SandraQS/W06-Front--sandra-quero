import { useState } from "react";

const Login = () => {
  const ClickLogin = (event) => {
    event.preventDefault();
    console.log("yes");
  };

  const InitialLogin = {
    usuario: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(InitialLogin);

  const changeDataLogin = (event) => {
    event.preventDefault();
    setLoginData({
      ...loginData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <form onSubmit={ClickLogin}>
        <div className="form-group">
          <label htmlFor="usuario">Usuario: </label>
          <input
            value={loginData.usuario}
            onChange={changeDataLogin}
            autoComplete="off"
            type="text"
            className="form-control"
            id="usuario"
            placeholder="usuario"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña: </label>
          <input
            value={loginData.password}
            onChange={changeDataLogin}
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
