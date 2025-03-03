import style from "./productDashboard.module.scss";

import Table from "../Table/Table";

import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductDashboard() {
    const [productList, setProductList] = useState([]);
    const getProductsFromDB = (dataName) => {
        axios
            .get(`http://localhost:3000/sequelize-${dataName}`)
            .then((response) => setProductList(response.data))
            .catch((error) => console.log(error));
    };

    const deleteDataById = (dataName, id) => {
        axios
            .delete(`http://localhost:3000/sequelize-${dataName}/${id}`)
            .then((response) => {
                console.log(response.data);
                alert(`Elemento ${JSON.stringify(response.data)} foi excluido`);
            })
            .catch((error) => console.log(error));

        setProductList(productList.filter((element) => element.id != id));
    };

    useEffect(() => {
        getProductsFromDB("products");
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
