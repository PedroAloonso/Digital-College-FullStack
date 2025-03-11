import style from "./buttons.module.css";
import propTypes from "prop-types";

export default function PrimaryButton({ children, className, handleOnClick }) {
    return (
        <button
            className={`${style.primaryButton} ${className}`}
            onClick={handleOnClick}
        >
            {children}
        </button>
    );
}

PrimaryButton.propTypes = {
    children: propTypes.string,
    className: propTypes.string,
};
