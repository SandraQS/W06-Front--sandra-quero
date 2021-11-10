import useUser from "../../hooks/useUser";
import "./Logout.css";

const Logout = ({ user }) => {
  const { logoutUser } = useUser();
  const usuario = user.user.usuario;

  const logoutClick = () => {
    logoutUser();
  };

  return (
    <div className="logout-container row justify-content-end">
      <h2 className="logout-container__user-name col-3">
        Nombre de usuario: {usuario}
      </h2>
      <button
        type="button"
        className="btn btn-dark logout-container__logout-button col-2"
        onClick={logoutClick}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
