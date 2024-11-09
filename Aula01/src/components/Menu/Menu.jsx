import style from "./Menu.module.css"

export default function Menu({setCurrentPage, currentPage}) {
  return (
    <>
      <ul className={style.menu}>
        <li
          onClick={() => {
            setCurrentPage("home");
          }}
          className={currentPage === "home" ? style.selected : 0}
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
