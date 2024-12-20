import style from "./products.module.scss";

import ProductCard from "../../components/ProductCard/ProductCard";
import FiltersMenu from "./FilterMenu/FiltersMenu";

import { useState } from "react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/dropdown";

import products from "../../assets/data/products.json";
import calça from "../../assets/img/products/calças.jpg";
import camisa from "../../assets/img/products/camiseta.jpg";
import tenis from "../../assets/img/products/tennis.png";

export default function Products() {
    // TODO: Refatorar para que funcione com o react route e futuramente com o express

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
    // const handleSelect = (item) => {
    //     setSelectedItem(item); // Atualiza o item selecionado
    // };

    const DropdownItems = [
        "Mais relevante",
        "Menos relevante",
        "Menor preço",
        "Maior preço",
        "Ordem alfabetica",
    ];
    return (
        <>
            <section className={style.topSection}>
                <p>Resultados para “...”</p>
                <div>
                    <Dropdown>
                        <DropdownTrigger className={style.dropdownTrigger}>
                            <div>
                                <p className={style.orderByTitle}>
                                    Ordenar por:
                                    <span>Mais relevantes</span>
                                </p>
                            </div>
                        </DropdownTrigger>
                        <DropdownMenu className={style.dropdownMenu}>
                            <DropdownItem className={style.dropdownItem}>
                                Mais relevantes
                            </DropdownItem>
                            {DropdownItems.map((item) => {
                                return (
                                    <DropdownItem
                                        key={item}
                                        className={style.dropdownItem}
                                    >
                                        {item}
                                    </DropdownItem>
                                );
                            })}
                        </DropdownMenu>
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
