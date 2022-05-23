import { useState, useRef } from "react";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://res.cloudinary.com/becerra-media/image/upload/v1653344389/images/MexPlant-Lower_vt3kcn.png"
            alt="MexPlantLogo"
          />
          <button className="loginButton">Login</button>
        </div>
      </div>
      <div className="container">
        <h1>Información de plantas que se acabna de descubrir.</h1>
        <h2>Lee y aprendre en cualquier luga.</h2>
        <p>¿Queres aprender?, Introduce tu correo para crear una cuenta.</p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Correo" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Registrate Aquí
            </button>
          </div>
        ) : (
          <div className="input">
            <input type="password" placeholder="Contraseña" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Aprende
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
