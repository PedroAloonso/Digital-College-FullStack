import style from "./buttons.module.css";
import propTypes from "prop-types";

export default function SecondaryButton({ children, className }) {
    return (
        <button className={`${style.secondaryButton} ${className}`}>
            {children}
        </button>
    );
}

SecondaryButton.propTypes = {
    children: propTypes.string,
    className: propTypes.string,
};
