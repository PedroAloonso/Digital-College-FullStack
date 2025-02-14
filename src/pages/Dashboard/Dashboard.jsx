import style from "./dashboard.module.scss";

import DashboardMenu from "../../components/Menu/DashboardMenu/DashboardMenu";
import Table from "../../components/Table/Table";

export default function Dashboard() {
    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita o comportamento padrão do formulário

        const form = event.target;
        const formData = new FormData(form);

        // Converte os dados do formulário para um objeto JSON
        const json = JSON.stringify(Object.fromEntries(formData.entries()));

        await addProduct(json);

        form.reset(); // Limpa os inputs do formulário
    };

    const addProduct = async (data) => {
        try {
            const response = await fetch(
                "http://localhost:3000/sequelize-products/",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: data,
                },
            );

            if (!response.ok) {
                throw new Error("Erro ao enviar os dados");
            }
        } catch (error) {
            console.error("Erro no addUser:", error);
        }
    };

    return (
        <div className={style.container}>
            <DashboardMenu />

            <div className={style.tablesContainer}>
                <Table
                    columns={["id", "name"]}
                    data={[
                        [1, "Genilto"],
                        [2, "Diego"],
                        [3, "Genilto"],
                    ]}
                    tableName={"Users"}
                />
                <Table
                    columns={["id", "name"]}
                    data={[
                        [1, "Genilto"],
                        [2, "Diego"],
                        [3, "Genilto"],
                    ]}
                    tableName={"Users"}
                />
            </div>

            {/* <form action="POST" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div>
                    <label htmlFor="brand">Marca: </label>
                    <input type="text" name="brand" id="brand" required />
                </div>
                <div>
                    <label htmlFor="description">Descrição: </label>
                    <input type="text" name="description" id="description" />
                </div>
                <div>
                    <label htmlFor="stock">Descrição: </label>
                    <input type="number" name="stock" id="stock" />
                </div>
                <button type="submit">Adicionar</button>
            </form> */}
        </div>
    );
}

