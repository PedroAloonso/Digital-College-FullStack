import sequelize from './setup.js';
import setupAssociations from './associations.js';

const syncTables = async () => {
    try {
        setupAssociations();
        //await sequelize.sync({force: false}); // Cria a tabela (se não existir)
        console.log("Tabelas sincronizada com sucesso!");
    } catch (error) {
        console.error("Erro ao sincronizar tabela:", error);
    }
}

// TODO: Adicionar CPF de até 11

export default syncTables;
