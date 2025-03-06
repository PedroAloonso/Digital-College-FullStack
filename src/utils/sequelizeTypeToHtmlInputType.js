/**
 * Função para mapear tipos de dados do Sequelize para tipos de input HTML.
 * @param {string} sequelizeType - O tipo de dado do Sequelize.
 * @returns {string} - O tipo de input HTML correspondente.
 */
const sequelizeTypeToHtmlInputType = (sequelizeType) => {
    switch (sequelizeType) {
        case "STRING":
            return "text";
        case "INTEGER":
            return "number";
        case "DECIMAL":
            return "number";
        case "FLOAT":
            return "number";
        case "DATE":
            return "text";
        case "BOOLEAN":
            return "checkbox";
        default:
            return "text"; // Padrão para outros tipos desconhecidos
    }
};

export default sequelizeTypeToHtmlInputType;
