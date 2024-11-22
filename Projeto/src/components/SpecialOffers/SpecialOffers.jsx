import style from "./specialOffers.module.css";
import PrimaryButton from "../Buttons/PrimaryButton";
import Tennis from "/src/assets/img/specialOffers/Laye.png"

export default function SpecialOffers() {
    return (
        <>
            <section className={style.container}>
                <div className={style.imageContainer}>
                    <img src={Tennis} alt="" />
                </div>
                <div className={style.aboutContainer}>
                    <div>
                        <h3 className={style.subTitle}>Oferta especial</h3>
                        <h1 className={style.title}>
                            Air Jordan edição de colecionador
                        </h1>
                        <p className={style.about}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip
                        </p>
                    </div>
                    <PrimaryButton className={style.btnOffers}>
                        Ver Oferta
                    </PrimaryButton>
                </div>
            </section>
        </>
    );
}
