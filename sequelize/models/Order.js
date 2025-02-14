import sequelize from "../setup.js";
import DataTypes from "sequelize"

const Order = sequelize.define(
    "Order",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        status: {
            type: DataTypes.STRING
        },
        total_price: {
            type: DataTypes.FLOAT
        }
    }
);

export default Order