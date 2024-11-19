import style from "./productCard.module.css";
import defaultImg from "/src/assets/img/products/tennis.png";
import propTypes from "prop-types";

export default function ProductCard({
    discount,
    img = defaultImg,
    category,
    title,
    value,
    newValue,
}) {
    return (
        <>
            <div className={style.container}>
                {discount ? <h4 className={style.discount}>{discount}</h4> : ""}
                <div className={style.imgContainer}>
                    <img src={img} alt="" />
                </div>
                <h5 className={style.category}>{category}</h5>
                <h2 className={style.title}>{title}</h2>
                <div>
                    <h3 className={newValue ? style.withNewValue : style.value}>{`$${value}`}</h3>
                    <h3 className={style.newValue}>{`${
                        newValue ? "$" + newValue : ""
                    }`}</h3>
                </div>
            </div>
        </>
    );
}

ProductCard.propTypes = {
    discount: propTypes.number,
    img: propTypes.object,
    category: propTypes.string,
    title: propTypes.string,
    value: propTypes.number,
    newValue: propTypes.number,
};