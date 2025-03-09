import notFoundDraw from "../../assets/not-found-draw.svg";

import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-container">
      <img
        className="not-found-draw"
        src={notFoundDraw}
        alt="Ilustração simbolizando cadastro ou listagem de endereço no sistema"
      />
      <h1>Página não encontrada.</h1>
    </div>
  );
}

export default NotFound;
