import style from "./productDashboard.module.scss";

import Table from "../Table/Table";

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProductDashboard() {
    const navigate = useNavigate();
    const [productList, setProductList] = useState([]);
    const [tableColumns, setTableColumns] = useState([]);

    const createProduct = (data) => {
        axios
            .post("http://localhost:3000/sequelize-products/", data)
            .then((response) => {
                console.log(`Produto ${response.data} criado`);
                setProductList((prevList) => [...prevList, data]);
            })
            .catch((error) => console.error("Erro no product:", error));
    };

    const getProductsFromDB = async () => {
        const jwtToken = localStorage.getItem("token");
        try {
            const response = await axios.get(
                `http://localhost:3000/sequelize-products`,
                {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                },
            );
            setTableColumns(response.data.columnNames);
            setProductList(response.data.product);
        } catch (error) {
            // TODO: perguntar
            const userConfirmed = window.confirm(
                `${error.response.data}\nDeseja ser redirecionado para a página de login?`,
            );
            if (userConfirmed) {
                navigate("../../login");
            }
        }
    };

    const deleteProductById = (id) => {
        const isConfirmed = window.confirm("Tem certeza que deseja deletar?");
        if (isConfirmed) {
            axios
                .delete(`http://localhost:3000/sequelize-products/${id}`)
                .then((response) => {
                    alert(
                        `Elemento ${JSON.stringify(response.data)} foi excluido`,
                    );
                })
                .catch((error) => {
                    console.log(error);
                });

            setProductList(productList.filter((element) => element.id != id));
        }
    };

    const editProductById = (id, data) => {
        // TODO:  adicionar o que foi mudado no pop up

        const isConfirmed = window.confirm("Tem certeza que deseja editar?");
        if (isConfirmed) {
            axios
                .put(`http://localhost:3000/sequelize-products/${id}`, data)
                .then((response) => {
                    alert(
                        `Elemento ${JSON.stringify(response.data)} foi editado`,
                    );
                    setProductList((prevList) =>
                        prevList.map((product) =>
                            product.id === id
                                ? { ...product, ...data }
                                : product,
                        ),
                    );
                })
                .catch((error) => console.log(error));
        }
    };

    useEffect(() => {
        getProductsFromDB();
    }, []);

    return (
        <div className={style.externalContainer}>
            <Table
                columnsInfo={tableColumns}
                handleDelete={deleteProductById}
                handleEdit={editProductById}
                handleCreate={createProduct}
                data={productList}
                tableTitle={"Products"}
            />
        </div>
    );
}
