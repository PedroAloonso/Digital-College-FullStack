import style from "./table.module.scss";

export default function Table({ columns, data, tableName }) {
    // TODO: Implementar uma paginação nas tabelas, por enquanto usando o scroll
    // TODO: Adicionar o botão de adicionar que chama um modal
    return (
        <table className={style.table}>
            <caption>{tableName}</caption>
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
                            {element.map((value, valueIndex) => {
                                return <td key={valueIndex}>{value}</td>;
                            })}
                            <td>Delete</td>
                            <td>Edit</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
