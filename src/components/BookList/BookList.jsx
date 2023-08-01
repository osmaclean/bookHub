import "./index.scss";
import { livros } from "../../api/movies";
import Card from "../Card/Card";

export default function BookList() {
  return (
    <main>
      <h1 className="main__section__text">Livros</h1>
      <div className="book__section">
        {livros.map((item) => {
          return <Card livro={item} key={item.nome}></Card>;
        })}
      </div>
    </main>
  );
}
