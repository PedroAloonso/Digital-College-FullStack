import style from "./table.module.scss";

import EditModal from "../modal/EditModal";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Table({ columnsInfo, data, tableTitle, handleDelete }) {
    // TODO: Implementar uma paginação nas tabelas, por enquanto usando o scroll

    const [modalIsOpen1, setModalIsOpen] = useState(false);
    const handleToggleModal1 = () => {
        setModalIsOpen((prevValue) => !prevValue);
    };

    return (
        <table className={style.table}>
            <caption>
                {tableTitle}
                <Link className={style.add} to={"/dashboard/create"}>
                    +
                </Link>
            </caption>
            <thead>
                <tr>
                    {columnsInfo.map((value, index) => {
                        return (
                            <th key={index} scope="col">
                                {value.name}
                            </th>
                        );
                    })}
                    <th scope="col" colSpan={2}>
                        Ações
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((dataColumn, index) => {
                    return (
                        <tr key={index}>
                            {columnsInfo.map((column, index) => {
                                return (
                                    <td key={index}>
                                        {column.name === "updatedAt" ||
                                        column.name === "createdAt"
                                            ? new Date(
                                                  dataColumn[column.name],
                                              ).toLocaleDateString("pt-BR")
                                            : dataColumn[column.name]}
                                    </td>
                                );
                            })}
                            <td>
                                <button
                                    onClick={() => handleDelete(dataColumn.id)}
                                    className={style.deleteBtn}
                                >
                                    Delete
                                </button>
                            </td>
                            <td>
                                <button onClick={handleToggleModal1}>
                                    Edit
                                </button>
                                <EditModal
                                    modalIsOpen={modalIsOpen1}
                                    handleToggleModal={handleToggleModal1}
                                    ElementData={dataColumn}
                                    inputInfos={columnsInfo}
                                />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

Table.propTypes = {
    handleDelete: PropTypes.func,
    handleEdit: PropTypes.func,
    columnsInfo: PropTypes.array,
    data: PropTypes.array,
    tableTitle: PropTypes.string,
};
