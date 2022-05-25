import { VisibilityOutlined, AddOutlined } from "@material-ui/icons";
import "./listItem.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ListItem({ index, item, classification }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link to={"/watch"} state={{ plant: item, classification: classification }}>
      <div
        className="listItem"
        style={{
          display: !item.activated && "none",
          left: isHovered && index * 225 - 50 + index * 2.5,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={item.image} alt="Imagen de la Planta" />
        <div className="itemInfo">
          <div className="icons">
            <VisibilityOutlined className="icon" />
            <AddOutlined className="icon" />
          </div>
        </div>
        <div className="name">
          {item.name} / {item.scientificName}
        </div>
        <div className="itemInfoTop">
          <span className="classification">{classification}</span>
        </div>
        <div className="desc line-clamp">{item.description}</div>
      </div>
    </Link>
  );
}
