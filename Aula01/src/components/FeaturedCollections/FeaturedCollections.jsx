import style from "./FeaturedCollections.module.css";
import FeaturedCollectionsCard from "../FeaturedCollectionsBanner/FeaturedCollectionsCard";
import t_shirt from "/src/assets/img/featuredCollections/t-shirt.png";
import headphone from "/src/assets/img/featuredCollections/headphone.png";
import tenis from "/src/assets/img/featuredCollections/tenis.png";

export default function FeaturedCollections() {
    return (
        <>
            <div className={style.featuredCollectionsTop}>
                <h1>Coleções em destaque</h1>
                <div>
                    <FeaturedCollectionsCard
                        title={"Novo drop Supreme"}
                        image={t_shirt}
                        imagePosition={{
                            top: "30%",
                            right: "none",
                            bottom: "none",
                            left: "none",
                        }}
                        imageSize={{
                            width: "auto",
                            height: "236px",
                        }}
                        imageRotation={"-20deg"}
                    />
                    <FeaturedCollectionsCard
                        title={"Novo Beats Bass"}
                        image={tenis}
                        imagePosition={{
                            top: "20%",
                            right: "-45%",
                            botton: "none",
                            left: "none",
                        }}
                        imageSize={{
                            width: "263px",
                            height: "200px",
                        }}
                        imageRotation={`-10deg`}
                    />
                    <FeaturedCollectionsCard
                        title={"Coleção Adidas"}
                        image={headphone}
                        imagePosition={{
                            top: "none",
                            right: "none",
                            bottom: "-10%",
                            left: "none",
                        }}
                        imageSize={{
                            width: "auto",
                            height: "250px",
                        }}
                        imageRotation={"30deg"}
                    />
                </div>
            </div>
            <div className={style.featuredCollectionsBotton}></div>
        </>
    );
}
