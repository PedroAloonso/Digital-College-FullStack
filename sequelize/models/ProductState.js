import sequelize from "../setup.js";
import DataTypes from "sequelize"

const ProductState = sequelize.define(
    "Product_State",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

export default ProductState;