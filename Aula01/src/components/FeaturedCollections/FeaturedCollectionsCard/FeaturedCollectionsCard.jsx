import style from "./featuredCollectionsCard.module.css";

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

        position: 'absolute',
        top: imagePosition.top,
        right: imagePosition.right,
        bottom: imagePosition.bottom,
        left: imagePosition.left,

        transform: `rotate(${imageRotation})`,
    };
    return (
        <div className={style.container}>
            <div className={style.infoContainer}>
                <p className={style.discount}>30 % OFF</p>
                <h2 className={style.title}>{title}</h2>
                <button className={style.buyBtn}>Comprar</button>
            </div>
            <div className={style.imgContainer}>
                <img src={image} style={customStyle} alt="" />
            </div>
        </div>
    );
}
