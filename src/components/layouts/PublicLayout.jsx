import style from "./layout.module.scss";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { Outlet } from "react-router-dom";

export default function PublicLayout() {
    return (
        <div className={style.publicExternalContainer}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}
