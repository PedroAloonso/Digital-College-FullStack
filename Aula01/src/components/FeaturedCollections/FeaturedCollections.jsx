import style from "./FeaturedCollections.module.css";
import FeaturedCollectionsCard from "../FeaturedCollectionsBanner/FeaturedCollectionsCard";
import t_shirt from "/src/assets/img/featuredCollections/t-shirt.png"
import headphone from "/src/assets/img/featuredCollections/headphone.png"
import tenis from "/src/assets/img/featuredCollections/tenis.png"

export default function FeaturedCollections() {
    return (
        <>
            <div className={style.featuredCollectionsTop}>
                <h1>Coleções em destaque</h1>
                <div>
                    <FeaturedCollectionsCard title={"Novo drop Supreme"} image={t_shirt} />
                    <FeaturedCollectionsCard title={"Coleção Adidas"} image={headphone} />
                        <FeaturedCollectionsCard title={"Novo Beats Bass"} image={tenis} />
                </div>
            </div>
            <div className={style.featuredCollectionsBotton}></div>
        </>
    );
}
