import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Inicio
      </div>
      <img
        className="image"
        src="https://inaturalist-open-data.s3.amazonaws.com/photos/1380863/large.jpg"
        alt="Imagen de la Planta"
      />
      <div className="infoTop">
        <div className="name">
          <h1>Huizache</h1>
          <div className="scientific=name">
            <h3>Acacia farnesiana</h3>
          </div>
        </div>
      </div>

      <div className="infoBottom">
        <div className="content">
          <span className="classification">Plantas con Flores</span>
          <span className="desc">
            La Acacia farnesiana, comúnmente conocida como Espinillo blanco, es
            así nombrada debido a las numerosas espinas distribuidas a lo largo
            de sus ramas, es conocido también como Huisache o Huizache o
            Vinorama.
          </span>
          <span>Creado por: </span>
          <div className="creator">
            <img
              src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/plant.png"
              alt="Imagen de Usuario"
            />
            <span className="name">Luis Gerardo Becerra Jiménez</span>
          </div>
        </div>
      </div>
    </div>
  );
}
