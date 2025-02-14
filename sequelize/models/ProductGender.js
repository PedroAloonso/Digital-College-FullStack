import sequelize from "../setup.js";
import DataTypes from "sequelize"

const ProductGender = sequelize.define(
    "Product_Gender",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { timestamps: false }
)

export default ProductGender