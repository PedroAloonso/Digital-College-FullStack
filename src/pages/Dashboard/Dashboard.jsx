import style from "./dashboard.module.scss";

import { useState, useEffect } from "react";

import Table from "./Table/Table"
import HightlightsCard from "./HightlightsCard/HightlightsCard";

import MoneyIcon from "../../assets/img/dashboard/money.svg?react"

export default function Dashboard() {
    const [productList, setProductList] = useState([]);
    const getAllDataFromDB = (dataName) => {
        fetch(`http://localhost:3000/sequelize-${dataName}`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                console.log(Object.keys(response[0]));
                setProductList(response);
            })
            .catch(error => console.log(error))
    };

    const deleteDataById = (dataName, id) => {
        fetch(`http://localhost:3000/sequelize-${dataName}/${id}`, {
            method: "DELETE",
        }).then((response) => response.json());

        setProductList(productList.filter((element) => element.id != id));
    };

    useEffect(() => {
        getAllDataFromDB("products");
    }, []);


    return (
        <div className={style.externalContainer}>
            <div className={style.container}>
                {/* <Table
                    columns={["id", "name", "description", "stock"]}
                    HandleDelete={deleteDataById}
                    data={productList}
                    tableTitle={"Products"}
                /> */}
                <HightlightsCard icon={<MoneyIcon fill="var(--white)" />} title={"Renda mensal"} value={1232.30}/>
            </div>
        </div>
    );
}
