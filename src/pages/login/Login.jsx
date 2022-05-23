import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://res.cloudinary.com/becerra-media/image/upload/v1653344389/images/MexPlant-Lower_vt3kcn.png"
            alt="MexPlantLogo"
          />
        </div>
      </div>
      <div className="container">
        <form action="">
          <h1>Inicio de Sesión</h1>
          <input type="email" placeholder="Correo" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Iniciar Sesión</button>
          <span>
            ¿Nuevo en MexPlant? <b>Registrate ahora.</b>
          </span>
          <small>
            Esta página está protegido por Google reCAPTCHA para aestar seguros
            de que no eres un robot. <b>Más Información</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
