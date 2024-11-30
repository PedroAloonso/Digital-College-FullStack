import style from "./productCard.module.css";
import defaultImg from "/src/assets/img/products/tennis.png";
import propTypes from "prop-types";

import DiscountLabel from "../../Label/DiscountLabel";

export default function ProductCard({
  discount,
  img = defaultImg,
  category,
  title,
  value,
  newValue,
  className='',
}) {
  return (
    <>
      <div className={`${style.container} ${className}`}>
        <div className={style.imgContainer}>
          <img src={img} alt="" />
          {discount ? (
            <DiscountLabel className={style.label}>{discount}</DiscountLabel>
          ) : (
            ""
          )}
        </div>
        <h5 className={style.category}>{category}</h5>
        <h2 className={style.title}>{title}</h2>
        <div>
          <h3
            className={newValue ? style.withNewValue : style.value}
          >{`$${value}`}</h3>
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
  img: propTypes.string,
  category: propTypes.string,
  title: propTypes.string,
  value: propTypes.number,
  newValue: propTypes.number,
  className: propTypes.string,
};
