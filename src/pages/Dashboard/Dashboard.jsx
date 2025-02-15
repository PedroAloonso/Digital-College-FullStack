import style from "./dashboard.module.scss";

import { useState, useEffect } from "react";
import Table from "../../components/Table/Table";

export default function Dashboard() {
    const [productList, setProductList] = useState([]);
    const createProduct = () => {
        fetch("http://localhost:3000/sequelize-products")
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                console.log(Object.keys(response[0]));
                setProductList(response);
            });
    };

    const deleteProduct = (id) => {
        console.log(id);
        fetch(`http://localhost:3000/sequelize-products/${id}`, {
            method: "DELETE",
        }).then((response) => response.json());

        setProductList(productList.filter((element) => element.id != id));
    };

    useEffect(() => {
        createProduct();
    }, []);
    return (
        <div className={style.container}>
            <div className={style.tablesContainer}>
                <Table
                    columns={["id", "name", "description", "stock"]}
                    HandleDelete={deleteProduct}
                    data={productList}
                    tableName={"Users"}
                />
            </div>
        </div>
    );
}
