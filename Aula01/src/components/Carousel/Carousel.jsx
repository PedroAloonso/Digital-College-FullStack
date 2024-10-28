import style from "./Carousel.module.css"
import Snearks from '/src/assets/img/carousel/White-Sneakers-PNG-Clipart 1.png'
import { useEffect } from "react";

export default function Carousel({ setActiveIndex, activeIndex, length }) {
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [length, setActiveIndex]);
    return (
        <>
            <div className={style.carouselContainer}>
                <img src={Snearks} alt="" className={style.carouselImage} />
                <div className={style.carrouselDots}>
                    {[...Array(length)].map((_, index) => (
                        <span
                            key={index}
                            className={`${style.dots} ${
                                index === activeIndex ? style.active : ""
                            }`}
                            onClick={() => setActiveIndex(index)}
                        ></span>
                    ))}
                    {/* <span className={`${style.dots}  ${style.active}`}></span>
                    <span className={style.dots}></span>
                    <span className={style.dots}></span>
                    <span className={style.dots}></span> */}
                </div>
            </div>
        </>
    );
}