import style from "./trendingProducts.module.scss";
import ProductCard from "../ProductCard/ProductCard";

export default function TrendingProducts() {
    return (
        <>
            <section className={style.container}>
                <div className={style.trendingProductsTop}>
                    <h2>Produtos em alta</h2>
                    <h4>Ver todos →</h4>
                </div>
                <div className={style.trendingProductBotton}>
                    <ProductCard
                        category={"Tênis"}
                        title={"K-Swiss V8 - Masculino"}
                        value={200}
                        newValue={100}
                        discount={30}
                    ></ProductCard>
                    <ProductCard
                        category={"Tênis"}
                        title={"K-Swiss V8 - Masculino"}
                        value={200}
                    ></ProductCard>
                    <ProductCard
                        category={"Tênis"}
                        title={"K-Swiss V8 - Masculino"}
                        value={200}
                    ></ProductCard>
                    <ProductCard
                        category={"Tênis"}
                        title={"K-Swiss V8 - Masculino"}
                        value={200}
                    ></ProductCard>
                    <ProductCard
                        category={"Tênis"}
                        title={"K-Swiss V8 - Masculino"}
                        value={200}
                    ></ProductCard>
                    <ProductCard
                        category={"Tênis"}
                        title={"K-Swiss V8 - Masculino"}
                        value={200}
                    ></ProductCard>
                    <ProductCard
                        category={"Tênis"}
                        title={"K-Swiss V8 - Masculino"}
                        value={200}
                    ></ProductCard>
                    <ProductCard
                        category={"Tênis"}
                        title={"K-Swiss V8 - Masculino"}
                        value={200}
                    ></ProductCard>
                </div>
            </section>
        </>
    );
}
