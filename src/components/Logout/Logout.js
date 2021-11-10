const Logout = ({ user }) => {
  const usuario = user.user.usuario;

  return (
    <div className="logout-container row">
      <h2 className="logout-container__user-name col-5">
        Nombre de usuario: {usuario}{" "}
      </h2>
      <button
        type="button"
        className="btn btn-dark logout-container__logout-button col-7"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
