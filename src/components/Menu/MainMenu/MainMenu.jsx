import style from "./mainMenu.module.css";
import { NavLink } from "react-router-dom";

export default function MainMenu() {
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
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? style.selected : ""
                                }
                                to={`/${value.route}`}
                            >
                                {value.name}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
