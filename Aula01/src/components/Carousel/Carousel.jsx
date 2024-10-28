import style from "./Carousel.module.css"
import Snearks from '/src/assets/img/carousel/White-Sneakers-PNG-Clipart 1.png'

export default function Carousel() {
    return (
        <>
            <div className={style.carouselContainer}>
                <img src={Snearks} alt="" className={style.carouselImage} />
                <div className={style.carrouselDots}>
                    <span className={`${style.dots} active`}></span>
                    <span className={style.dots}></span>
                    <span className={style.dots}></span>
                    <span className={style.dots}></span>
                </div>
            </div>
        </>
    );
}