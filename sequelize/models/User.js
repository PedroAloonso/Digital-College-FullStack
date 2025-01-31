import sequelize from "../setup.js";
import DataTypes from "sequelize"

const User = sequelize.define(
    "User",
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
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
        },
        birthdate: {
            type: DataTypes.DATE
        }
    },
    {
        engine: 'MyISAM'
    }
);


export default User

