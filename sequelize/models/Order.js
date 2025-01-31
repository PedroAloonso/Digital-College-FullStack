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

Order.belongsTo(User, {
    foreignKey: {
        name: "user_id"
    },
})
User.hasMany(Order, {foreignKey: {
    name: "user_id"
}})

export default Order