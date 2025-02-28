import style from "./dashboard.module.scss";

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
