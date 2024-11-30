import style from "./featuredCollections.module.css";
import FeaturedCollectionsCard from "./FeaturedCollectionsCard/FeaturedCollectionsCard";
import FeaturedItemCategory from "./FeaturedItemCategory/FeaturedItemCategory";

import t_shirt from "/src/assets/img/featuredCollections/t-shirt.png";
import headphone from "/src/assets/img/featuredCollections/headphone.png";
import tenis from "/src/assets/img/featuredCollections/tenis.png";

import t_shirt_icon from "/src/assets/img/featuredItemCategory/t-shirt-icon.png";
import pants_icon from "/src/assets/img/featuredItemCategory/pants-icon.png";
import cap_icon from "/src/assets/img/featuredItemCategory/cap-icon.png";
import headPhones_icon from "/src/assets/img/featuredItemCategory/headphones-icon.png";
import tennis_icon from "/src/assets/img/featuredItemCategory/tennis-icon.png";

export default function FeaturedCollections() {
    return (
        <section className={style.container}>
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
            <div className={style.featuredCollectionsBotton}>
                <h2>Coleções em destaque</h2>
                <div>
                    <FeaturedItemCategory text={"Camisetas"}>
                        {t_shirt_icon}
                    </FeaturedItemCategory>
                    <FeaturedItemCategory text={"Calças"}>
                        {pants_icon}
                    </FeaturedItemCategory>
                    <FeaturedItemCategory text={"Bonés"}>
                        {cap_icon}
                    </FeaturedItemCategory>
                    <FeaturedItemCategory text={"Headphones"}>
                        {headPhones_icon}
                    </FeaturedItemCategory>
                    <FeaturedItemCategory text={"Tênis"}>
                        {tennis_icon}
                    </FeaturedItemCategory>
                </div>
            </div>
        </section>
    );
}
