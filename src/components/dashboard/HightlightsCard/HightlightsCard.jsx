import style from "./hightlightsCard.module.scss";

import PropTypes from "prop-types";
import { useState } from "react";

export default function HightlightsCard({
    title,
    preview,
    value,
    prefix = "",
    sufix = "",
}) {
    const [PorcentageChange, setPorcentageChange] = useState(
        (value - preview) / 100,
    );
    return (
        <div className={style.cardContainer}>
            <div className={style.cardTop}>
                <h3>{title}</h3>
                <h1>
                    {prefix} {value}
                    {sufix}
                </h1>
            </div>
            <div className={style.cardBotton}>
                <div className={style.comparationContainer}>
                    <h4>Anteriormente</h4>
                    <p>
                        {prefix} {preview}
                        {sufix}
                    </p>
                </div>
                <div className={style.comparationContainer}>
                    <h4>%</h4>
                    <p>
                        {PorcentageChange > 0 ? "+" : ""}
                        {PorcentageChange.toPrecision(3)}
                    </p>
                </div>
                <div className={style.comparationContainer}>
                    <h4>Tendência</h4>
                    <p>{PorcentageChange > 0 ? ">" : "<"}</p>
                </div>
            </div>
        </div>
    );
}

HightlightsCard.propTypes = {
    prefix: PropTypes.string,
    preview: PropTypes.number,
    sufix: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.number,
};
