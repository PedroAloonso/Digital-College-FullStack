import sequelize from "../setup.js";
import DataTypes from "sequelize"

const Brand = sequelize.define(
    "Brand",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

export default Brand