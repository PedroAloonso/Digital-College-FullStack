import style from "./tredingProducts.module.css"
import ProductCard from "./ProductCard/ProductCard";

export default function TredingProducts() {
  return (
    <>
      <section className={style.container}>
        <div className={style.tredingProductsTop}>
          <h2>Produtos em alta</h2>
          <h4>Ver todos →</h4>
        </div>
        <div className={style.tredingProductBotton}>
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
