import "./notfound.scss";

export default function NotFound() {
  return (
    <div className="notfound">
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
        <h1>Error 404</h1>
        <h2>Página no encontrada</h2>
        <div className="input">
          <button className="backButton">Volver a la página Principal</button>
        </div>
      </div>
    </div>
  );
}
