import style from "./layout.module.scss";

import RegisterLoginHeader from "../registerLogin/RegisterLoginHeader/RegisterLoginHeader.jsx";
import Footer from "../Footer/Footer";

import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className={style.publicExternalContainer}>
            <RegisterLoginHeader />
            <Outlet />
            <Footer />
        </div>
    );
}
