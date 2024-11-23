import ProductCard from "../../components/TredingProducts/ProductCard/ProductCard";
import style from "./products.module.css";

export default function Products() {
    return (
        // DEPOIS COMPONETIZAR
        <>
            <section className={style.topSection}>
                <p>Resultados para “...”</p>
                <div>
                    <p>Ordenar por...</p>
                </div>
            </section>
            <section className={style.bottomSection}>
                <div className={style.filterContainer}>
                    <p>Filtrar por</p>
                </div>
                <div className={style.productContainer}>
                    <ProductCard
                        className = {style.customProductCard}
                        category={"Tênis"}
                        title={"K-Swiss V8 - Masculino"}
                        value={200}
                        newValue={100}
                        discount={30}
                    />
                    <ProductCard
                        category={"Tênis"}
                        title={"K-Swiss V8 - Masculino"}
                        value={200}
                        newValue={100}
                    />
                    <ProductCard
                        category={"Tênis"}
                        title={"K-Swiss V8 - Masculino"}
                        value={200}
                        newValue={100}
                    />
                    <ProductCard
                        category={"Tênis"}
                        title={"K-Swiss V8 - Masculino"}
                        value={200}
                        newValue={100}
                    />
                </div>
            </section>
        </>
    );
}
