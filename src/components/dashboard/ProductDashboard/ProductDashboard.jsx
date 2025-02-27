import style from "./productDashboard.module.scss";

import Table from "../Table/Table";

import { useState, useEffect } from "react";

export default function ProductDashboard() {
    const [productList, setProductList] = useState([]);
    const getAllDataFromDB = (dataName) => {
        fetch(`http://localhost:3000/sequelize-${dataName}`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                console.log(Object.keys(response[0]));
                setProductList(response);
            })
            .catch((error) => console.log(error));
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
            <Table
                columns={["id", "name", "description", "stock"]}
                HandleDelete={deleteDataById}
                data={productList}
                tableTitle={"Products"}
            />
        </div>
    );
}
