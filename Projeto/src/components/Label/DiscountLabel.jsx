import style from "./discountLabel.module.css";
import propTypes from "prop-types";

export default function DiscountLabel({ children, className }) {
    return (
        <>
            <p className={`${style.label} ${className}`}>{children}% OFF</p>
        </>
    );
}

DiscountLabel.propTypes = {
    children: propTypes.number || propTypes.string,
    className: propTypes.string,
};
