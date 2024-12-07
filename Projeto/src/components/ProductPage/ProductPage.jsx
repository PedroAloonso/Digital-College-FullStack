import style from "./productPage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductPage() {
    return (
        // #TODO Adicionar o caminho formatado depois que tudo estiver funcionando
        <div>
            <div>
                <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className={`mySwiper ${style.customSwiper}`}
                >
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
                </Swiper>
            </div>
            <div>
                <h1></h1>
                <h3></h3>
            </div>
        </div>
    );
}
