import style from "./mainSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import PrimaryButton from "../Buttons/PrimaryButton";
import Ornament from "/src/assets/img/slider/ornament1.png";
import Tennis from "/src/assets/img/slider/White-Sneakers.png";

import "swiper/css";
import "swiper/css/pagination";

export default function MainSlider() {
    const sliderContent = [
        {
            subtitle: "Melhores ofertas personalizadas",
            title: "Queima de stoque Nike 🔥",
            about: "Consequat conta exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
            image: Tennis,
        },
        {
            subtitle: "Melhores ofertas que você ja viu ",
            title: "Queima de stoque olympikus 🔥",
            about: "Consequat até exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
            image: Tennis,
        },
        {
            subtitle: "Melhores ofertas personalizadas",
            title: "Queima de stoque Adidas ",
            about: "Consequat o pegar exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
            image: Tennis,
        },
        {
            subtitle: "Melhores ofertas personalizadas",
            title: "Queima de stoque Lacoste 🐊",
            about: "Consequat dez exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
            image: Tennis,
        },
    ];
    return (
        <section className={style.container}>
            <Swiper
                pagination={true}
                modules={[Pagination]}
                className={`mySwiper ${style.customSwiper}`}
            >
                {sliderContent.map((value, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={style.slideContainer}>
                                <div className={style.info}>
                                    <h3>{value.subtitle}</h3>
                                    <h1>{value.title}</h1>
                                    <p>{value.about}</p>
                                    <PrimaryButton className={style.offersBtn}>
                                        Ver Ofertas
                                    </PrimaryButton>
                                </div>
                                <div className={style.imageContainer}>
                                    <img src={value.image} alt="" />
                                </div>
                            </div>
                            <img src={Ornament} className={style.ornament} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}
