import style from "./table.module.scss";

import EditModal from "../modal/EditModal/EditModal";
import CreateModal from "../modal/CreateModal/CreateModal";

import dateFormatter from "../../../utils/ptBrDateFormatter";

import PropTypes from "prop-types";
import { useState } from "react";

export default function Table({
    columnsInfo,
    data,
    tableTitle,
    handleDelete,
    handleCreate,
    handleEdit,
}) {
    // TODO: Implementar uma paginação nas tabelas, por enquanto usando o scroll

    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const handleToggleEditModal = (data) => {
        setSelectedData(data);
        setEditModalIsOpen((prevValue) => !prevValue);
    };

    const handleToggleCreateModal = () => {
        setCreateModalIsOpen((prevValue) => !prevValue);
        console.log(createModalIsOpen);
    };

    return (
        <table className={style.table}>
            <caption>
                {tableTitle}
                <button
                    className={style.add}
                    onClick={() => handleToggleCreateModal()}
                >
                    +
                </button>
                {createModalIsOpen && (
                    <CreateModal
                        handleCreate={handleCreate}
                        handleToggleModal={handleToggleCreateModal}
                        modalIsOpen={createModalIsOpen}
                        inputInfos={columnsInfo}
                    />
                )}
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
                                            ? dateFormatter(
                                                  dataColumn[column.name],
                                              )
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
                                <button
                                    onClick={() =>
                                        handleToggleEditModal(dataColumn)
                                    }
                                    className={style.editBtn}
                                >
                                    Edit
                                </button>
                                {editModalIsOpen &&
                                    selectedData === dataColumn && (
                                        <EditModal
                                            modalIsOpen={editModalIsOpen}
                                            handleToggleModal={
                                                handleToggleEditModal
                                            }
                                            ElementData={dataColumn}
                                            inputInfos={columnsInfo}
                                            handleEdit={handleEdit}
                                        />
                                    )}
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
    handleCreate: PropTypes.func,
    handleEdit: PropTypes.func,
    columnsInfo: PropTypes.array,
    data: PropTypes.array,
    tableTitle: PropTypes.string,
};
