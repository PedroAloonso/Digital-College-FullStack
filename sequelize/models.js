import User from './models/User.js';
import Order from './models/Order.js';
import ItensOrder from './models/ItensOrder.js';
import Product from './models/Product.js';
import ProductVariation from './models/ProductVariation.js';
import sequelize from './setup.js';

const syncTables = async () => {
    try {
        await sequelize.sync({}); // Cria a tabela (se não existir)
        console.log("Tabelas sincronizada com sucesso!");
    } catch (error) {
        console.error("Erro ao sincronizar tabela:", error);
    }
}

export default syncTables;
