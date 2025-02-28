import style from "./dashboard.module.scss";

import MoneyIcon from "../../assets/img/dashboard/money.svg?react";
import CardsContainer from "../../components/dashboard/CardsContainer/CardsContainer";
import ChartsContainer from "../../components/dashboard/ChartsContainer/ChartsContainer";

export default function Dashboard() {
    return (
        <div className={style.externalContainer}>
            <CardsContainer />
            <ChartsContainer />
        </div>
    );
}
