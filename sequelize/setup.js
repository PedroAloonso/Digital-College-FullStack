import { Sequelize} from "sequelize";

const sequelize = new Sequelize("mysql://root:@localhost:3306/test_db")

const testConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log("conectado")
    } catch (error) {
        console.log("Erro ao conectar: ", error)
    }
}

(async () => {
    try {
        await sequelize.sync(); // Cria a tabela (se não existir)
        console.log("Tabela Users sincronizada com sucesso!");
    } catch (error) {
        console.error("Erro ao sincronizar tabela:", error);
    }
})();

export default sequelize;