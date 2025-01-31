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

ItensOrder.belongsTo(Order, {
    foreignKey: {
        name: "order_id"
    }
})
Order.hasMany(ItensOrder, {
    foreignKey: {
        name: "order_id"
    }
})


ItensOrder.belongsTo(ProductVariation, {
    foreignKey: {
        name: "product_variation_id"
    }
})


export default ItensOrder
// FK: Order.id - order_id 
// FK: ProductVariation.id - product_variation 