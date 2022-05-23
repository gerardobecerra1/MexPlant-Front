import { InfoOutlined } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "planta" ? "Plantas" : "Animales"}</span>
          <select name="classification" id="classification">
            <option>Classification</option>
            <option value="asd89f76asd9f876asdf">Plantas con Flores</option>
            <option value="zxc89v76zxcv987xzcvv">Coníferas Y Parientes</option>
          </select>
        </div>
      )}
      <img
        src="https://inaturalist-open-data.s3.amazonaws.com/photos/144585/large.jpg"
        alt="Imagen de la Planta"
      />
      <div className="info">
        <div className="name">
          <h1>Huizache</h1>
          <div className="scientific=name">
            <h3>Acacia farnesiana</h3>
          </div>
        </div>
        <span className="desc">
          La Acacia farnesiana, comúnmente conocida como Espinillo blanco, es
          así nombrada debido a las numerosas espinas distribuidas a lo largo de
          sus ramas, es conocido también como Huisache o Huizache o Vinorama.
        </span>
        <div className="buttons">
          {/* <button className="favorite">
            <FavoriteOutlined />
            <span>Favorito</span>
          </button> */}
          <button className="mas-info">
            <InfoOutlined />
            <span>Mas Informacion</span>
          </button>
        </div>
      </div>
    </div>
  );
}
