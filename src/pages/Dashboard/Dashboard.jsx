import style from "./dashboard.module.scss"

import DashboardMenu from "../../components/Menu/DashboardMenu/DashboardMenu";

export default function Dashboard() {
    return (
        <div className={style.container}>
            <DashboardMenu/>
            <h1>Dashboard</h1>
        </div>
    );
};
