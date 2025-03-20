import sequelize from "../setup.js";

import DataTypes from "sequelize";
import bycrypt from "bcrypt";

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM("user", "admin"),
            allowNull: false,
            defaultValue: "user"
        },
        phone: {
            type: DataTypes.CHAR,
        },
        cpf: {
            type: DataTypes.CHAR(11),
            allowNull: false,
            unique: true,
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
        },
    },
    { updatedAt: "lastAccess" }
);

User.create({
    name: "ADM",
    password: `${bycrypt.hashSync("123456", 10)}`,
    email: "adm@adm.com",
    role: "admin",
    cpf: "11111111111",
}).catch((err) => console.log("Ja existe conta ADM"));
User.create({
    name: "Pão",
    password: `${bycrypt.hashSync("123456", 10)}`,
    email: "user@adm.com",
    cpf: "11111111112",
}).catch((err) => console.log("Ja existe conta Pão"));

export default User;
