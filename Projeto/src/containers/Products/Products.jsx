import ProductCard from "../../components/TredingProducts/ProductCard/ProductCard";
import FiltersMenu from "./FilterMenu/FiltersMenu";
import { Dropdown } from "react-bootstrap";
import style from "./products.module.css";
import products from "../../assets/data/products.json";
import calça from "../../assets/img/products/calças.jpg";
import camisa from "../../assets/img/products/camiseta.jpg";
import tenis from "../../assets/img/products/tennis.png";

export default function Products() {
    const classifyTitle = (title) => {
        const firstWord = title.split(" ")[0].toLowerCase();

        if (["calça", "short", "bermuda"].includes(firstWord)) {
            return calça;
        } else if (
            [
                "camiseta",
                "jaqueta",
                "moletom",
                "regata",
                "camisa",
                "blusa",
            ].includes(firstWord)
        ) {
            return camisa;
        } else if (["tênis", "bota"].includes(firstWord)) {
            return tenis;
        }

        return null; 
    };
    return (
        // DEPOIS COMPONETIZAR
        // Renomear as classes
        // Customizar o dropdown com classes
        <>
            <section className={style.topSection}>
                <p>Resultados para “...”</p>
                <div>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Ordenar Por: mais relevante
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                menor preço
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                maior preço
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                ordem alfabetica
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </section>
            <section className={style.bottomSection}>
                <div className={style.filtersContainer}>
                    <FiltersMenu />
                </div>
                <div className={style.productContainer}>
                    {products.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                category={product.category}
                                value={product.value}
                                img={classifyTitle(product.title)}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
}
