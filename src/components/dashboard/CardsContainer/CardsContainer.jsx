import style from "./cardsContainer.module.scss";

import HightlightsCard from "../HightlightsCard/HightlightsCard";

const cardsData = [
    {
        title: "Faturamento Mensal",
        value: 500,
        preview: 459,
        prefix: "R$",
        sufix: "K",
    },
    {
        title: "Pedidos Realizados",
        value: 9870,
        preview: 9400,
        prefix: "",
        sufix: "",
    },
    {
        title: "Novos Clientes",
        value: 5432,
        preview: 5900,
        prefix: "",
        sufix: "",
    },
    {
        title: "Satisfação dos Clientes",
        value: 88.4,
        preview: 85.2,
        prefix: "",
        sufix: "%",
    },
];
export default function CardsContainer() {
    return (
        <div className={style.cardsContainer}>
            {cardsData.map((value, index) => {
                return (
                    <HightlightsCard
                        key={index}
                        title={value.title}
                        preview={value.preview}
                        value={value.value}
                        prefix={value.prefix}
                        sufix={value.sufix}
                    />
                );
            })}
        </div>
    );
}
