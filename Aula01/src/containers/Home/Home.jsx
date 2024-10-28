import style from "./home.module.css";
import Carousel from "../../components/Carousel/Carousel";
import Ornament from "/src/assets/img/carousel/ornament1.png";
import { useState } from "react";

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [length, setlength] = useState(4);

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
                <Carousel
                    setActiveIndex={setActiveIndex}
                    length={length}
                    activeIndex={activeIndex}
                />
                <img src={Ornament} className={style.firstSectionOrnament} />
            </section>
        </>
    );
}
