import sequelize from './setup.js';
import setupAssociations from './associations.js';

const syncTables = async () => {
    try {
        await sequelize.sync(); // Cria a tabela (se não existir)
        console.log("Tabelas sincronizada com sucesso!");
    } catch (error) {
        console.error("Erro ao sincronizar tabela:", error);
    }
}

export default syncTables;
