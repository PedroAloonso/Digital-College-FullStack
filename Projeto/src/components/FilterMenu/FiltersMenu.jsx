import style from "./filtersMenu.module.css";

export default function FiltersMenu() {
    const filters = [
        { title: "Marca", items: ["adidas", "k-kwiss", "nike", "puma"] },
        {
            title: "Categoria",
            items: ["esporte e lazer", "casual", "utilitário", "corrida"],
        },
        { title: "Gênero", items: ["masculino", "feminino", "unisex"] },
    ];
    return (
        <>
            <div className={style.externalContainer}>
                <h3 className={style.title}>Filtrar por</h3>
                <div className={style.container}>
                    {filters.map((value, filterIndex) => {
                        return (
                            <>
                                <div
                                    className={style.filterGroup}
                                    key={filterIndex}
                                >
                                    <h5 className={style.filterGroupTitle}>{value.title}</h5>
                                    {value.items.map((value, itemIndex) => {
                                        return (
                                            <div
                                                key={itemIndex}
                                                className={style.filterItem}
                                            >
                                                <input
                                                    type="checkbox"
                                                    name={value}
                                                    id=""
                                                />
                                                <label htmlFor="">
                                                    {value}
                                                </label>
                                            </div>
                                        );
                                    })}
                                </div>
                            </>
                        );
                    })}
                    <div className={style.categorieContainer}>
                        <h5>Estado</h5>
                        <div className={style.filterItem}>
                            <input type="radio" name="usado" id="" />
                            <label htmlFor="">usado</label>
                        </div>
                        <div className={style.filterItem}>
                            <input type="radio" name="novo" id="" />
                            <label htmlFor="">novo</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
