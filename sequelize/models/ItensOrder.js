import sequelize from "../setup.js";
import DataTypes from "sequelize"
import Order from "./Order.js";
import ProductVariation from "./ProductVariation.js";

const ItensOrder = sequelize.define(
    "itens_order",
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
    },
    {
        engine: 'MyISAM'
    }
);


export default ItensOrder