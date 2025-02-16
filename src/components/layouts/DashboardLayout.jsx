import style from "./layout.module.scss"

import DashboardMenu from "../menu/DashboardMenu/DashboardMenu";

import { Outlet } from "react-router-dom";


export default function DashboardLayout() {
    return (
        <div className={style.dashboardExternalContainer}>
            <DashboardMenu />
            <Outlet />
        </div>
    );
};
