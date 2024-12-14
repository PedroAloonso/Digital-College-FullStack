import style from "./featuredCollectionsCard.module.css";
import DiscountLabel from "../../Label/DiscountLabel";
import SecondaryButton from "../../Buttons/SecondaryButton";
import propTypes from "prop-types";

export default function FeaturedCollectionsCard({
    title,
    image,
    imagePosition,
    imageSize,
    imageRotation,
}) {
    const customStyle = {
        width: imageSize.width,
        height: imageSize.height,

        position: "absolute",
        top: imagePosition.top,
        right: imagePosition.right,
        bottom: imagePosition.bottom,
        left: imagePosition.left,

        transform: `rotate(${imageRotation})`,
    };
    return (
        <div className={style.container}>
            <div className={style.infoContainer}>
                <DiscountLabel>30</DiscountLabel>
                <h2 className={style.title}>{title}</h2>
                <SecondaryButton className={style.buyBtn}>
                    Comprar
                </SecondaryButton>
            </div>
            <div className={style.imgContainer}>
                <img src={image} style={customStyle} alt="" />
            </div>
        </div>
    );
}

FeaturedCollectionsCard.propTypes = {
    title: propTypes.string,
    image: propTypes.string,
    imagePosition: propTypes.object,
    imageSize: propTypes.string,
    imageRotation: propTypes.string,
};
