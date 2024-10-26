import style from "./home.module.css";

export default function Home() {
  return (
    <>
      <div className={style.homeHeader}>
        <div>
          <h3>Melhores ofertas personalizadas</h3>
          <h1>Queima de stoque Nike 🔥</h1>
          <p>
            Consequat culpa exercitation mollit nisi excepteur do do tempor
            laboris eiusmod irure consectetur.
          </p>
          <button>Ver Ofertas</button>
        </div>
        <img src="" alt="" />
        <div className="carrouselDots">
          <span className={style.dots}></span>
          <span className={style.dots}></span>
          <span className={style.dots}></span>
          <span className={style.dots}></span>
        </div>
      </div>
    </>
  );
}
