import style from "./productDashboard.module.scss";

import Table from "../Table/Table";

import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductDashboard() {
    const [productList, setProductList] = useState([]);
    const [tableColumns, setTableColumns] = useState([]);

    const createProduct = (data) => {
        axios
            .post("http://localhost:3000/sequelize-products/", {
                name: "sla cara",
                describe: "alguma coisa",
                price: 1,
            })
            .then((response) => console.log(`Produto ${response.data} criado`))
            .catch((error) => console.error("Erro no addUser:", error));
    };

    const getProductsFromDB = () => {
        axios
            .get(`http://localhost:3000/sequelize-products`)
            .then((response) => {
                setTableColumns(Object.keys(response.data.columnNames));
                setProductList(response.data.product);
            })
            .catch((error) => console.log(error));
    };

    const deleteProductById = (id) => {
        // TODO: Mudar para que só deletar quando marcar sim num pop-up
        axios
            .delete(`http://localhost:3000/sequelize-products/${id}`)
            .then((response) => {
                alert(`Elemento ${JSON.stringify(response.data)} foi excluido`);
            })
            .catch((error) => console.log(error));

        setProductList(productList.filter((element) => element.id != id));
    };

    const editProductById = (id, data) => {
        // TODO: Mudar para que só enviar quando marcar sim num pop-up
        axios
            .put(`http://localhost:3000/sequelize-products/${id}`, {
                name: "sla",
                stock: 10,
                describe: "adasdsadas",
                price: 123,
            })
            .then((response) => {
                console.log(response.data);
                // alert(`Elemento ${JSON.stringify(response.data)} foi excluido`);
            });
    };

    useEffect(() => {
        getProductsFromDB("products");
        editProductById("products", 11);
    }, []);

    return (
        <div className={style.externalContainer}>
            <Table
                columns={tableColumns}
                handleDelete={deleteProductById}
                handleEdit={editProductById}
                data={productList}
                tableTitle={"Products"}
            />
        </div>
    );
}
