import sequelize from "../setup.js";
import DataTypes from "sequelize"
import Product from "./Product.js";

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
        stock: {
            type: DataTypes.INTEGER,
        },
        color: {
            type: DataTypes.STRING,
        },
        size: {
            type: DataTypes.DATE
        }
    }
);


export default ProductVariation