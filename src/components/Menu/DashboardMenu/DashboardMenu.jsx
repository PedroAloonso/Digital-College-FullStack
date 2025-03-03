import { NavLink } from "react-router-dom";
import style from "./dashboardMenu.module.scss";

export default function DashboardMenu() {
    const menuItems = [
        { title: "Dashboard", route: "dashboard/" },
        { title: "Produtos", route: "dashboard/product" },
        { title: "Client", route: "dashboard/client" },
    ];

    return (
        <div className={style.container}>
            <nav>
                <ul>
                    {menuItems.map((value, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? style.selected : ""
                                    }
                                    to={`/${value.route}`}
                                    end
                                >
                                    {value.title}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
