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
    }
);

export default Order