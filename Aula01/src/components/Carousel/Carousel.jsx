import style from "./carousel.module.css"
import Snearks from '/src/assets/img/carousel/White-Sneakers-PNG-Clipart 1.png'
import { useEffect } from "react";
import propTypes from "prop-types"

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

                </div>
            </div>
        </>
    );
}

Carousel.propTypes = {
    setActiveIndex: propTypes.func.isRequired,
    activeIndex: propTypes.number.isRequired,
    length: propTypes.number.isRequired,
};
