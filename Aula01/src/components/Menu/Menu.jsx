import style from "./Menu.module.css";

export default function Menu({ setCurrentPage, currentPage }) {
    return (
        <>
            <ul className={style.menu}>
                {["Home", "Produtos", "Categorias", "Meus pedidos"].map(
                    (value, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => {
                                    setCurrentPage(index);
                                }}
                                className={
                                    currentPage === index ? style.selected : 0
                                }
                            >
                                {value}
                            </li>
                        );
                    }
                )}
            </ul>
        </>
    );
}
