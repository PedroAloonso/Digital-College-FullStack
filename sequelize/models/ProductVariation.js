import sequelize from "../setup.js";
import DataTypes from "sequelize"

const ProductVariation = sequelize.define(
    "product_variation",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        sale_price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
        },
        color: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
    }
);


export default ProductVariation