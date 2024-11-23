import style from "./Menu.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Menu() {
    const [currentPage, setCurrentPage] = useState(0);
    const menuItems = [
        { name: "Home", route: "" },
        { name: "Produtos", route: "products" },
        { name: "Categorias", route: "categories" },
        { name: "Meus pedidos", route: "my-orders" },
    ];
    return (
        <>
            <ul className={style.menu}>
                {menuItems.map((value, index) => {
                    return (
                        <li key={index}>
                            <Link
                                onClick={() => {
                                    setCurrentPage(index);
                                }}
                                className={
                                    currentPage === index ? style.selected : ""
                                }
                                to={`/${value.route}`}
                            >
                                {value.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}