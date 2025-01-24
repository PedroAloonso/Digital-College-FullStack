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
            allowNull: false
        }
    },
    {
        engine: 'MyISAM'
    }
);

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
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        discount: {
            type: DataTypes.FLOAT
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantitySold: {
            type: DataTypes.INTEGER
        },
        photoURL: {
            type: DataTypes.STRING
        }
    },
    {
        engine: 'MyISAM'
    }
)

const ProductOrder = sequelize.define(
    "ProductOrder", 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true, 
            primaryKey: true
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: Product.id
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: User.id
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false, 
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            primaryKey: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }
)

// Product          // ProductOrder  
// id               // id               
// name             // productId       
// description      // userId          
// price            // quantity         
// discount         // price            
// quantity         // createdAt       
// quantitySold     // updatedAt        
// photoURL         // status
// createdAt
// updatedAt

const models = { User: User, Product: Product, ProductOrder: ProductOrder };


export default models;