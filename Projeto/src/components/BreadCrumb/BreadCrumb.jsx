import style from "./breadCrumb.module.scss"

import { Link, useLocation } from "react-router-dom";

export default function BreadCrumb() {
    const location = useLocation();

    // Quebra a URL em partes para montar a breadcrumb
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <nav className={style.breadcrumb}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {pathnames.map((value, index) => {
                    const pathTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <li key={value}>
                            {!isLast ? (
                                <Link to={pathTo}>
                                    {decodeURIComponent(value)}
                                </Link>
                            ) : (
                                <span>{decodeURIComponent(value)}</span>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
