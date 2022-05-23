import { VisibilityOutlined, AddOutlined } from "@material-ui/icons";
import "./listItem.scss";
import { useState } from "react";

export default function ListItem({ index }) {
  const [isHovered, setisHovered] = useState(false);
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      <img
        src="https://inaturalist-open-data.s3.amazonaws.com/photos/1380863/large.jpg"
        alt="Imagen de la Plantas"
      />
      <div className="itemInfo">
        <div className="icons">
          <VisibilityOutlined className="icon" />
          <AddOutlined className="icon" />
        </div>
      </div>
      <div className="name">Huizache / Acacia farnesiana</div>
      <div className="itemInfoTop">
        <span className="classification">Plantas con Flores</span>
      </div>
      <div className="desc line-clamp">
        La Acacia farnesiana, comúnmente conocida como Espinillo blanco, es así
        nombrada debido a las numerosas espinas distribuidas a lo largo de sus
        ramas, es conocido también como Huisache o Huizache o Vinorama.
      </div>
    </div>
  );
}
