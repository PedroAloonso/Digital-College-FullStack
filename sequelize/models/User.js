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
            type: DataTypes.CHAR,
        },
        cpf: {
            type: DataTypes.CHAR(11),
        },
        address: {
            type: DataTypes.STRING,
        },
        neighborhood: {
            type: DataTypes.CHAR,
        },
        city: {
            type: DataTypes.STRING,
        },
        cep: {
            type: DataTypes.CHAR,
        },
        complement: {
            type: DataTypes.STRING,
        },
        getNews: {
            type: DataTypes.BOOLEAN,
        }
    }, { updatedAt: "last_access"}
);

export default User

