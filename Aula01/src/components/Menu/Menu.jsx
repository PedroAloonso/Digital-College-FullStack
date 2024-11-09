import style from "./Menu.module.css"

export default function Menu({ setCurrentPage, currentPage }) {
  // REFAZER USANDO O map em array
  return (
    <>
      <ul className={style.menu}>
        <li
          onClick={() => {
            setCurrentPage(0);
          }}
          className={currentPage === 0 ? style.selected : 0}
        >
          Home
        </li>
        <li
          onClick={() => {
            setCurrentPage("produtos");
          }}
          className={currentPage === "produtos" ? style.selected : 0}
        >
          Produtos
        </li>
        <li
          onClick={() => {
            setCurrentPage("categorias");
          }}
          className={currentPage === "categorias" ? style.selected : 0}
        >
          Categorias
        </li>
        <li
          onClick={() => {
            setCurrentPage("meusPedidos");
          }}
          className={currentPage === "meusPedidos" ? style.selected : 0}
        >
          Meus pedidos
        </li>
      </ul>
    </>
  );
}
