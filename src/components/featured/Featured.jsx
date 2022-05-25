import { InfoOutlined } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";

export default function Featured({ type }) {
  const [plant, setPlant] = useState([]);

  useEffect(() => {
    const getRandomPlant = async () => {
      try {
        const res = await axios.get("https://mexplant-api.herokuapp.com/api/plants/random", {
          headers: {
            "x-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjhjMzFlNThmZWM5MjRhMjU2Nzk3YWYiLCJpYXQiOjE2NTM0MzA2NDksImV4cCI6MTY1MzUxNzA0OX0.pBAtgHjIb5d4Gf-mc9YXpLXHDBjSsu1qMlVx4BfSReA",
          },
        });
        setPlant(res.data.randomPlant[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomPlant();
  }, [type]);

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
      <img src={plant.image} alt="Imagen de la Planta" />
      <div className="info">
        <div className="name">
          <h1>{plant.name}</h1>
          <div className="scientific=name">
            <h3>{plant.scientificName}</h3>
          </div>
        </div>
        <span className="desc line-clamp">{plant.description}</span>
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
