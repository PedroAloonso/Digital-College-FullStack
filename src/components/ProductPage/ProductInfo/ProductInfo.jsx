import style from "./productInfo.module.scss";

import Rating from "react-rating-stars-component";

import PropTypes from "prop-types";

export default function ProductInfo({ product }) {
    return (
        <div className={style.container}>
            <h1 className={style.title}>{product.title}</h1>
            <h4 className={style.infos}>
                {`${product.category} | ${product.brand} | REF: ${product.id}`}
            </h4>
            <div className={style.ratingContainer}>
                <Rating
                    count={5}
                    value={4.7}
                    size={35}
                    activeColor="#f6aa1c"
                    isHalf={true}
                    edit={false}
                />
                <div>
                    <p className={style.rateBadge}>4.7</p>
                    <span className={style.rateCount}>(90 avaliações)</span>
                </div>
            </div>
            <div className={style.valueContainer}>
                <h2>{`$${product.value}`}</h2>
            </div>
        </div>
    );
}

ProductInfo.propTypes = {
    product: PropTypes.shape({
        brand: PropTypes.string,
        category: PropTypes.string,
        id: PropTypes.number,
        title: PropTypes.string,
        value: PropTypes.number,
    }),
};
