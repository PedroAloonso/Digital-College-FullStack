import style from "./home.module.css";
import Carousel from "../../components/Carousel/Carousel";
import Ornament from "/src/assets/img/carousel/ornament1.png";

export default function Home() {
    return (
        <>
            <section className={style.firstSection}>
                <div className={style.firstSectionInfo}>
                    <h3>Melhores ofertas personalizadas</h3>
                    <h1>Queima de stoque Nike 🔥</h1>
                    <p>
                        Consequat culpa exercitation mollit nisi excepteur do do
                        tempor laboris eiusmod irure consectetur.
                    </p>
                    <button className={style.firstSectionSeeOffers}>
                        Ver Ofertas
                    </button>
                </div>
                <Carousel></Carousel>
                <img src={Ornament} className={style.firstSectionOrnament} />
            </section>
        </>
    );
}
