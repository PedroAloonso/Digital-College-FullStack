import style from "./productPage.module.scss";

import { Navigate, useParams } from "react-router-dom";

import products from "../../assets/data/products.json";
import SliderWithPreview from "./SliderWithPreview/SliderWithPreview";

const slugToName = (slug) => slug.replace(/-/g, " ").toLowerCase();

export default function ProductPage() {
    const { category } = useParams();
    const productName = slugToName(category);
    const product = products.find((p) => p.title === productName);

    if (!product) {
        console.log("deu ruim");
        return <Navigate to="/" replace />;
    }

    const sizes = [39, 40, 41, 42, 43];
    const colors = ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"];
    return (
        // #TODO: Adicionar o caminho formatado depois que tudo estiver funcionando

        // #TODO: Componetizar os elementos
        <div className={style.externalContainer}>
            <div className={style.leftContainer}>
                <SliderWithPreview colors={colors} />
            </div>
            <div className={style.rigthContainer}>
                {/* Top */}
                <div>
                    <div className={style.rigthTopContainer}>
                        <h1 className={style.title}>{product.title}</h1>
                        <h4
                            className={style.infos}
                        >{`${product.category} | ${product.brand} | REF: ${product.id}`}</h4>

                        <div className={style.ratingContainer}>
                            {/* TODO: fazer a barrinha de estrelas */}
                            <div>
                                <p className={style.rateBadge}>4.7</p>
                                <span className={style.rateCount}>
                                    (90 avaliações)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.valueContainer}>
                    <h2>{`$${product.value}`}</h2>
                    {/* TODO: Criar o elemento do desconto */}
                </div>

                {/* Middle */}
                <div className={style.descriptionContainer}>
                    <h3 className={style.descriptionTitle}>
                        Descrição do produto
                    </h3>
                    <p className={style.description}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nesciunt, asperiores et architecto dolor ut
                        impedit sint nisi ea optio temporibus ipsum atque illo
                        sit iure dolores quisquam qui error laborum!
                    </p>
                </div>

                {/* Bottom */}
                <div className={style.externalInputContainer}>
                    <div>
                        <h3 className={style.inputCategorie}>Tamanho</h3>
                        <div className={style.inputContainer}>
                            {sizes.map((size) => (
                                <div
                                    key={size}
                                    className={style.inputItem}
                                >
                                    <input
                                        type="radio"
                                        name="size"
                                        value={size}
                                        className={style.sizeInput}
                                    />
                                    <label htmlFor="">{size}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className={style.inputCategorie}>Cores</h3>
                        <div className={style.inputContainer}>
                            {colors.map((color) => (
                                <div
                                    key={color}
                                    className={style.inputItem}
                                >
                                    <input
                                        type="radio"
                                        name="color"
                                        value={color}
                                        className={style.colorInput}
                                        style={{"--color": color }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className={style.rigthContainer}>Comprar</button>
                </div>
            </div>
        </div>
    );
}
