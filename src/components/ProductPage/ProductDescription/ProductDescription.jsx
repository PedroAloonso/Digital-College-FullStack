import style from "./productDescription.module.scss";

import PropTypes from "prop-types";

export default function ProductDescription({
    description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, asperiores et architecto dolor ut impedit sint nisi ea optio temporibus ipsum atque illo sit iure dolores quisquam qui error laborum!",
}) {
    return (
        <div className={style.descriptionContainer}>
            <h3 className={style.descriptionTitle}>Descrição do produto</h3>
            <p className={style.description}>{description}</p>
        </div>
    );
}

ProductDescription.propTypes = {
    description: PropTypes.string,
};
