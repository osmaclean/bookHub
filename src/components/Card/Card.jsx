import PropTypes from "prop-types";

export default function Card({ livro }) {
  return (
    <div className="card">
      <img src={livro.imagem}></img>
      <h2 className="book__title">{livro.nome}</h2>
      <h3 className="book__author">{livro.autor}</h3>
    </div>
  );
}

Card.propTypes = {
  livro: PropTypes.object,
};
