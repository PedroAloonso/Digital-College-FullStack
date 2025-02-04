import PropTypes from "prop-types"
import style from "./filterItem.module.scss"

export default function FilterItem({title, name, type}) {
    return (
        <div className={style.container}>
            <input type={type} name={name} />
            <label htmlFor="">{title}</label>
        </div>
    );
}

FilterItem.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
};


