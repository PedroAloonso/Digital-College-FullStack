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
        brand: {
            type: DataTypes.STRING,
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
            allowNull: false
        }
    },
    {
        engine: 'MyISAM'
    }
);

export default Product