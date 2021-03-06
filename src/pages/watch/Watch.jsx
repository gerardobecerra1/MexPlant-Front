import { ArrowBackOutlined } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const { state } = useLocation();
  const plant = state.plant;
  const classification = state.classification;

  const [user, setUser] = useState({});

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `https://mexplant-api.herokuapp.com/api/search/users/${plant.user}`,
          {
            headers: {
              "x-token":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjhjMzFlNThmZWM5MjRhMjU2Nzk3YWYiLCJpYXQiOjE2NTM0MzA2NDksImV4cCI6MTY1MzUxNzA0OX0.pBAtgHjIb5d4Gf-mc9YXpLXHDBjSsu1qMlVx4BfSReA",
            },
          }
        );
        setUser(res.data.results[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomList();
  });

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Inicio
        </div>
      </Link>
      <img className="image" src={plant.image} alt="Imagen de la Planta" />
      <div className="infoTop">
        <div className="name">
          <h1>{plant.name}</h1>
          <div className="scientific=name">
            <h3>{plant.scientificName}</h3>
          </div>
        </div>
      </div>

      <div className="infoBottom">
        <div className="content">
          <span className="classification">{classification}</span>
          <span className="desc">{plant.description}</span>
          <span>Creado por: </span>
          <div className="creator">
            <img src={user.image} alt="Imagen de Usuario" />
            <span className="name">
              {user.name} {user.surname}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
