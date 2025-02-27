import PropTypes from "prop-types";
import style from "./hightlightsCard.module.scss";

export default function HightlightsCard({ title, icon, value }) {
    return (
        <div className={style.cardContainer}>
            <div className={style.cardHead}>{icon}</div>
            <div className={style.cardBody}>
                <h2>{title}</h2>
                <p> R$ {value}</p>
            </div>
        </div>
    );
}

HightlightsCard.propTypes = {
    icon: PropTypes.object,
    title: PropTypes.string,
    value: PropTypes.number,
};
