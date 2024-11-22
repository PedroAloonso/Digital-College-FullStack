import style from "./featuredItemCategory.module.css"

export default function FeaturedItemCategory({text, children}) {
    return (
      <>
        <div className={style.externalContainer}>
          <div className={style.container}>
            <img src={children} alt="" />
          </div>
            <h3>{text}</h3>
        </div>
      </>
    );
}

