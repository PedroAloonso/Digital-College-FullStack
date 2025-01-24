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

const ProductCategory = sequelize.define(
    "ProductCategory",
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
    },
    {
        engine: 'MyISAM'
    }
)

const ProductBrand = sequelize.define(
    "ProductBrand",
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
    },
    {
        engine: 'MyISAM'
    }
)


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
            type: DataTypes.FLOAT,
            defaultValue: 0.0
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sold: {
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
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        engine: 'MyISAM'
    }
)

User.hasMany(ProductOrder, { foreignKey: 'userId' });
ProductOrder.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(ProductOrder, { foreignKey: 'productId' });
ProductOrder.belongsTo(Product, { foreignKey: 'productId' });

Product.belongsTo(ProductCategory, { foreignKey: 'categoryId' });
ProductCategory.hasMany(Product, { foreignKey: 'categoryId' });

Product.belongsTo(ProductBrand, { foreignKey: 'brandId' });
ProductBrand.hasMany(Product, { foreignKey: 'brandId' });

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

(async () => { 
    try {
        await sequelize.sync(); // Cria a tabela (se não existir)
        console.log("Tabela Users sincronizada com sucesso!");
    } catch (error) {
        console.error("Erro ao sincronizar tabela:", error);
    }
})();

export default { User, ProductCategory, ProductBrand, Product, ProductOrder };