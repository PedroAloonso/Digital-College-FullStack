import style from "./productFilterPanel.module.css";
import FilterGroup from "../FilterGroup/FilterGroup";
import FilterItem from "../FilterItem/FilterItem";
import { useState } from "react";

export default function ProductFilterPanel() {
    const [brand, setBrand] = useState([]);
    const [category, setCategory] = useState([]);
    const [gender, setGender] = useState([]);
    const [state, setState] = useState(null);

    const handleBrandChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setBrand([...brand, value]);
            console.log(brand);
        } else {
            setBrand(brand.filter((item) => item !== value));
            console.log(brand);
        }
        
    }

    const brands = [
        { title: "adidas", name: "marca", type: "checkbox" },
        { title: "k-kwiss", name: "marca", type: "checkbox" },
        { title: "nike", name: "marca", type: "checkbox" },
        { title: "puma", name: "marca", type: "checkbox" },
    ];
    const categories = [
        {
            title: "esporte e lazer",
            name: "categoria",
            type: "checkbox",
        },
        { title: "casual", name: "categoria", type: "checkbox" },
        { title: "utilitário", name: "categoria", type: "checkbox" },
        { title: "corrida", name: "categoria", type: "checkbox" },
    ];
    const genders = [
        { title: "masculino", name: "gênero", type: "checkbox" },
        { title: "feminino", name: "gênero", type: "checkbox" },
        { title: "unisex", name: "gênero", type: "checkbox" },
    ];
    const states = [
        { title: "usado", name: "estado", type: "radio" },
        { title: "novo", name: "estado", type: "radio" },
    ];


    return (
        <>
            <div className={style.externalContainer}>
                <h3 className={style.title}>Filtrar por</h3>
                <div className={style.container}>
                    <FilterGroup title={"Marca"}>
                        {brands.map((brand, index) => (
                            <FilterItem
                                key={index}
                                title={brand.title}
                                name={brand.name}
                                type={brand.type}
                                handle={handleBrandChange}
                            />
                        ))}
                    </FilterGroup>
                    <FilterGroup title={"Categoria"}>
                        {categories.map((category, index) => (
                            <FilterItem
                                key={index}
                                title={category.title}
                                name={category.name}
                                type={category.type}
                            />
                        ))}
                    </FilterGroup>
                    <FilterGroup title={"Gênero"}>
                        {genders.map((genders, index) => (
                            <FilterItem
                                key={index}
                                title={genders.title}
                                name={genders.name}
                                type={genders.type}
                            />
                        ))}
                    </FilterGroup>
                    <FilterGroup title={"Estado"}>
                        {states.map((state, index) => (
                            <FilterItem
                                key={index}
                                title={state.title}
                                name={state.name}
                                type={state.type}
                            />
                        ))}
                    </FilterGroup>
                </div>
            </div>
        </>
    );
}
