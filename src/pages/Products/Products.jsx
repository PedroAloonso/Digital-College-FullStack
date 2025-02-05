import style from "./products.module.scss";

import ProductCard from "../../components/ProductCard/ProductCard";
import ProductFilterPanel from "../../components/Filter/ProductFilterPanel/ProductFilterPanel";

import { useState } from "react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/dropdown";
import { Link } from "react-router-dom";

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

    const [selectedItem, setSelectedItem] = useState("Mais relevante");

    // Função para atualizar o estado quando um item for selecionado
    const handleSelect = (item) => {
        setSelectedItem(item); // Atualiza o item selecionado
    };

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
                <p></p>
                <div>
                    <Dropdown>
                        <DropdownTrigger className={style.dropdownTrigger}>
                            <div>
                                <p className={style.orderByTitle}>
                                    Ordenar por:
                                    <span>{selectedItem}</span>
                                </p>
                            </div>
                        </DropdownTrigger>
                        <DropdownMenu className={style.dropdownMenu}>
                            {DropdownItems.map((item) => {
                                return (
                                    <DropdownItem
                                        key={item}
                                        className={style.dropdownItem}
                                        onPress={() => handleSelect(item)}
                                    >
                                        <Link to={`/${item}`}>{item}</Link>
                                    </DropdownItem>
                                );
                            })}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </section>
            <section className={style.bottomSection}>
                <div className={style.filtersContainer}>
                    <ProductFilterPanel />
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
