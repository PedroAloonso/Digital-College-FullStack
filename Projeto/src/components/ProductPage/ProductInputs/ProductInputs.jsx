import style from "./ProductInputs.module.scss";

import PropTypes from "prop-types";

export default function ProductInputs({ sizes, colors }) {
    return (
        <div className={style.container}>
            <div>
                <h3 className={style.inputCategorie}>Tamanho</h3>
                <div className={style.inputContainer}>
                    {sizes.map((size) => (
                        <div key={size} className={style.inputItem}>
                            <input
                                type="radio"
                                name="size"
                                value={size}
                                className={style.sizeInput}
                            />
                            <label htmlFor="">{size}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3 className={style.inputCategorie}>Cores</h3>
                <div className={style.inputContainer}>
                    {colors.map((color) => (
                        <div key={color} className={style.inputItem}>
                            <input
                                type="radio"
                                name="color"
                                value={color}
                                className={style.colorInput}
                                style={{ "--color": color }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button className={style.button}>Comprar</button>
        </div>
    );
}

ProductInputs.propTypes = {
    colors: PropTypes.array,
    sizes: PropTypes.array,
};
