import { useNavigate } from "react-router";

import PrimaryButton from "../PrimaryButton";
import heroDraw from "../../assets/hero-draw.svg";

import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className="hero-content-primary">
        <h1>Bem-vindo!</h1>
        <img
          className="hero-draw"
          src={heroDraw}
          alt="Ilustração simbolizando cadastro ou listagem de endereço no sistema"
        />
      </div>
      <div className="hero-content-secondary">
        <p>Vamos começar?</p>
        <div className="hero-buttons-container">
          <PrimaryButton onClick={() => navigate("/users/list")}>
            Visualizar usuários
          </PrimaryButton>
          <PrimaryButton onClick={() => navigate("/users/new")}>
            Cadastrar usuário
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default Hero;
