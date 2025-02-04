import PropTypes from "prop-types";
import style from "./filterGroup.module.scss";

export default function FilterGroup({ title, children }) {
    return (
        <div className={style.container}>
            <h5 className={style.title}>{title}</h5>
            <div className={style.itemsContainer}>{children}</div>
        </div>
    );
}

FilterGroup.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};
