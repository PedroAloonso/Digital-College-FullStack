import sequelize from "../setup.js";
import DataTypes from "sequelize"

const ItensOrder = sequelize.define(
    "Itens_Order",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
);


export default ItensOrder