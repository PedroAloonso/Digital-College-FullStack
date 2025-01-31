import sequelize from "../setup.js";
import DataTypes from "sequelize"
import Product from "./Product.js";

const ProductVariation = sequelize.define(
    "product_variation",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        sale_price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
        },
        color: {
            type: DataTypes.STRING,
        },
        size: {
            type: DataTypes.DATE
        }
    },
    {
        engine: 'MyISAM'
    }
);

ProductVariation.belongsTo(Product, {
    foreignKey: {
        name: "product_id"
    }
})

Product.hasMany(ProductVariation, {
    foreignKey: {
        name: "product_id"
    }
})

export default ProductVariation

// FK: Product.id - product_id