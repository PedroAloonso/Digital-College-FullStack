import ProductCard from "../../components/TredingProducts/ProductCard/ProductCard";
import FiltersMenu from "./FilterMenu/FiltersMenu";

import { Dropdown } from "react-bootstrap";
import { useState } from "react";

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

    const [selectedItem, setSelectedItem] = useState(" ");

    // Função para atualizar o estado quando um item for selecionado
    const handleSelect = (item) => {
        setSelectedItem(item); // Atualiza o item selecionado
    };

    const DropdownItems = ["Mais relevante", "Menos relevante", "Menor preço", "Maior preço", "Ordem alfabetica"]
    return (
        <>
            <section className={style.topSection}>
                <p>Resultados para “...”</p>
                <div>
                    <Dropdown>
                        <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                            className={style.dropdownToggle}
                        >
                            <p className={style.orderByTitle}>Ordenar Por:</p>
                            {selectedItem}
                        </Dropdown.Toggle>

                        <Dropdown.Menu className={style.dropdownMenu}>
                            {DropdownItems.map((value, index) => {
                                return (
                                    <Dropdown.Item
                                        key={index}
                                        href={`#/action-${index + 1}`}
                                        onClick={() => handleSelect(value)}
                                        className={style.dropdownItem}
                                    >
                                        {value}
                                    </Dropdown.Item>
                                );
                            })}
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
                                className={style.customProductCard}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
}
