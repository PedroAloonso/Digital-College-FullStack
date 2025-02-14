import sequelize from "../setup.js";
import DataTypes from "sequelize"

const Product = sequelize.define(
    "Product",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
        },
        stock: {
            type: DataTypes.INTEGER,
        },
        price: {
            type: DataTypes.FLOAT
        }
    }
);

export default Product