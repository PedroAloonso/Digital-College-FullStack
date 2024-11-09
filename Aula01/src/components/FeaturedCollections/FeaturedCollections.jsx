import style from "./FeaturedCollections.module.css";
import FeaturedCollectionsCard from "../FeaturedCollectionsBanner/FeaturedCollectionsCard";

export default function FeaturedCollections() {
    return (
        <>
            <div className={style.featuredCollectionsTop}>
                <h1>Coleções em destaque</h1>
                <div>
                    <FeaturedCollectionsCard title={"Novo drop Supreme"} />
                    <FeaturedCollectionsCard title={"Coleção Adidas"} />
                    <FeaturedCollectionsCard title={"Novo Beats Bass"} />
                </div>
            </div>
            <div className={style.featuredCollectionsBotton}></div>
        </>
    );
}
