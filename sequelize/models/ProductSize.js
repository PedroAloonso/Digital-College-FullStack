import sequelize from "../setup.js";
import DataTypes from "sequelize"

const ProductSize = sequelize.define(
    "Product_Size",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { timestamps: false }
)

export default ProductSize