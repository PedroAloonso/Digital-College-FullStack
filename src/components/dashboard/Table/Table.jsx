import PropTypes from "prop-types";
import style from "./table.module.scss";
import { Link } from "react-router-dom";

export default function Table({ columns, data, tableTitle, HandleDelete }) {
    // TODO: Implementar uma paginação nas tabelas, por enquanto usando o scroll
    // TODO: Adicionar o botão de adicionar que chama um modal
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
                    {columns.map((value, index) => {
                        return (
                            <th key={index} scope="col">
                                {value}
                            </th>
                        );
                    })}
                    <th scope="col" colSpan={2}>
                        Ações
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((element, index) => {
                    return (
                        <tr key={index}>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.description}</td>
                            <td>{element.stock}</td>
                            <td>
                                <button
                                    onClick={() =>
                                        HandleDelete("products", element.id)
                                    }
                                >
                                    Delete
                                </button>
                            </td>
                            <td>Edit</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

Table.propTypes = {
    HandleDelete: PropTypes.func,
    columns: PropTypes.array,
    data: PropTypes.array,
    tableTitle: PropTypes.string,
};
