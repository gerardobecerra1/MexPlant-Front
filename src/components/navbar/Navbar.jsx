import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setisScrolled] = useState(false);
  window.onscroll = () => {
    setisScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://res.cloudinary.com/becerra-media/image/upload/v1653344389/images/MexPlant-Lower_vt3kcn.png"
            alt="MexPlantLogo"
          />
          <Link to="/" className="link">
            <span>Inicio</span>
          </Link>
          <Link to="/plantas" className="link">
            <span>Plantas</span>
          </Link>
          <Link to="/animales" className="link">
            <span>Animales</span>
          </Link>
        </div>
        <div className="right">
          <Search className="icon" />
          <Notifications className="icon" />
          <img
            src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/plant.png"
            alt="Imagen de Usuario"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
