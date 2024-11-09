import style from "./FeaturedCollectionsCard.module.css";

export default function FeaturedCollectionsCard({ title, image}) {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <p className={style.discount}>30 % OFF</p>
        <h2 className={style.title}>{title}</h2>
        <button className={style.buyBtn}>Comprar</button>
      </div>
      <div className={style.imgContainer}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}
