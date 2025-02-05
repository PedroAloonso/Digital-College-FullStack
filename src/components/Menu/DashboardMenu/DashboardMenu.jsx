import style from "./dashboardMenu.module.scss"

export default function DashboardMenu() {
    return (
        <div className={style.container}>
            <nav>
                <ul>
                    <li>Dashboard</li>
                    <li>Produtos</li>
                    <li>Client</li>
                </ul>
            </nav>
        </div>
    );
};
