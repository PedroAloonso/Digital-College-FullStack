import style from "./firstBanner.module.css";
import Ornament from "/src/assets/img/carousel/ornament1.png";
import Carousel from "../Carousel/Carousel";
import { useState } from "react";

export default function FirstBanner() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [length] = useState(4);

    return (
        <section className={style.container}>
            <div className={style.info}>
                <h3>Melhores ofertas personalizadas</h3>
                <h1>Queima de stoque Nike 🔥</h1>
                <p>
                    Consequat culpa exercitation mollit nisi excepteur do do
                    tempor laboris eiusmod irure consectetur.
                </p>
            </div>
            <Carousel
                setActiveIndex={setActiveIndex}
                length={length}
                activeIndex={activeIndex}
            />
            <img src={Ornament} className={style.ornament} />
        </section>
    );
}
