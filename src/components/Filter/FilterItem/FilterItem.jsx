import PropTypes from "prop-types"
import style from "./filterItem.module.scss"

export default function FilterItem({ title, name, type, handle }) {
    return (
        <div className={style.container}>
            <input
                type={type}
                name={name}
                value={title.toLowerCase()}
                onChange={handle}
            />
            <label htmlFor={title.toLowerCase()}>{title}</label>
        </div>
    );
}

FilterItem.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    handle: PropTypes.func,
};


