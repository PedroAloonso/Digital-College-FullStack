import sequelize from "../setup.js";
import DataTypes from "sequelize"
import User from "./User.js";

const Order = sequelize.define(
    "Order",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    },
    {
        engine: 'MyISAM'
    }
);

export default Order