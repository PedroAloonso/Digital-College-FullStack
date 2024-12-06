import style from "./filtersMenu.module.css";
import FilterGroup from "../FilterGroup/FilterGroup";
import FilterItem from "../FilterItem/FilterItem";

export default function FiltersMenu() {
    const filters = [
        {
            title: "Marca",
            items: [
                { title: "adidas", name: "marca", type: "checkbox" },
                { title: "k-kwiss", name: "marca", type: "checkbox" },
                { title: "nike", name: "marca", type: "checkbox" },
                { title: "puma", name: "marca", type: "checkbox" },
            ],
        },
        {
            title: "Categoria",
            items: [
                {
                    title: "esporte e lazer",
                    name: "categoria",
                    type: "checkbox",
                },
                { title: "casual", name: "categoria", type: "checkbox" },
                { title: "utilitário", name: "categoria", type: "checkbox" },
                { title: "corrida", name: "categoria", type: "checkbox" },
            ],
        },
        {
            title: "Gênero",
            items: [
                { title: "masculino", name: "gênero", type: "checkbox" },
                { title: "feminino", name: "gênero", type: "checkbox" },
                { title: "unisex", name: "gênero", type: "checkbox" },
            ],
        },
        {
            title: "Estado",
            items: [
                { title: "usado", name: "estado", type: "radio" },
                { title: "novo", name: "estado", type: "radio" },
            ],
        },
    ];
    return (
        <>
            <div className={style.externalContainer}>
                <h3 className={style.title}>Filtrar por</h3>
                <div className={style.container}>
                    {filters.map((value, filterGroupIndex) => {
                        return (
                            <>
                                <FilterGroup
                                    title={value.title}
                                    key={filterGroupIndex}
                                >
                                    {value.items.map((value, itemIndex) => {
                                        return (
                                            <FilterItem
                                                key={itemIndex}
                                                title={value.title}
                                                name={value.name}
                                                type={value.type}
                                            ></FilterItem>
                                        );
                                    })}
                                </FilterGroup>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
