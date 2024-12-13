import style from "./sliderWithPreview.module.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import propTypes from "prop-types";

import tennis from "../../../assets/img/products/tennis.png";

export default function SliderWithPreview({colors}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    // #TODO: Tentar refazer o slider depois, ou mexendo na doc do swiper ou instalar outra biblioteca
    return (
        <div className={style.externalContainer}>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                navigation={true}
                thumbs={{
                    swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                            ? thumbsSwiper
                            : null,
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={style.imagesSwiper}
            >
                {colors.map((color) => (
                    <SwiperSlide key={color}>
                        <div
                            key={`slide-${color}`}
                            style={{ backgroundColor: color }}
                            className={style.imageSliderContainer}
                        >
                            <img src={tennis} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={style.previewSwiper}
            >
                {colors.map((color) => (
                    <SwiperSlide
                        key={color}
                        className={style.customSwiperSlidePreview}
                    >
                        <div
                            key={`preview-${color}`}
                            style={{ backgroundColor: color }}
                            className={style.imagePreviewContainer}
                        >
                            <img src={tennis} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

SliderWithPreview.propTypes = {
    colors: propTypes.array,
};
