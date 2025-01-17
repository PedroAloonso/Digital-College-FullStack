import { DataTypes } from 'sequelize';
import sequelize from './setup.js';

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
            unique: true,
            allowNull: false
        }
    },
    {
        engine: 'MyISAM',
        timestamps: false
    });

export default User;