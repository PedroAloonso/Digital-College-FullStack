import ProductCard from "../../components/TredingProducts/ProductCard/ProductCard";
import style from "./products.module.css";

export default function Products() {
  const filters = [
    { title: "Marca", items: ["Adidas", "K-Swiss", "Nike", "Puma"] },
    {
      title: "Categoria",
      items: ["Esporte e lazer", "Casual", "Utilitário", "Corrida"],
    },
    { title: "Gênero", items: ["Masculino", "Feminino", "Unisex"] },
  ];
  return (
    // DEPOIS COMPONETIZAR
    // Renomear as classes
    <>
      <section className={style.topSection}>
        <p>Resultados para “...”</p>
        <div>
          <p>Ordenar por...</p>
        </div>
      </section>
      <section className={style.bottomSection}>
        <div className={style.filtersContainer}>
          <h3 className={style.title}>Filtrar por</h3>
          <div className={style.categoriesContainer}>
            {filters.map((value, index) => {
              return (
                <>
                  <div className={style.categorieContainer}>
                    <h5>{value.title}</h5>
                    <div>
                    <input type="radio" name={value.title} id="" />
                    <label htmlFor="">{value.items}</label>
                    </div>
                  </div>
                </>
              );
            })}
            <div className={style.categorieContainer}>
              <h5>Estado</h5>
              <input type="radio" name="" id="" />
              <input type="radio" name="" id="" />
            </div>
          </div>
        </div>
        <div className={style.productContainer}>
          <ProductCard
            className={style.customProductCard}
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
