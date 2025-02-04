import ItensOrder from "./models/ItensOrder.js";
import Order from "./models/Order.js";
import Product from "./models/Product.js";
import Category from "./models/Category.js";
import Brand from "./models/Brand.js";
import ProductVariation from "./models/ProductVariation.js";
import User from "./models/User.js";
import ProductGender from "./models/ProductGender.js";
import ProductSize from "./models/ProductSize.js";
import ProductState from "./models/ProductState.js";

export default function setupAssociations() {
    // 1 Usuário pode ter vários Pedidos
    User.hasMany(Order, { foreignKey: "user_id" });
    Order.belongsTo(User, { foreignKey: "user_id" });

    // 1 Pedido pode ter vários Itens de Pedido
    Order.hasMany(ItensOrder, { foreignKey: "order_id" });
    ItensOrder.belongsTo(Order, { foreignKey: "order_id" });

    // 1 Categoria pode ter vários Produtos
    Category.hasMany(Product, { foreignKey: "category_id" });
    Product.belongsTo(Category, { foreignKey: "category_id" });

    // 1 Marca pode ter vários Produtos
    Brand.hasMany(Product, { foreignKey: "brand_id" });
    Product.belongsTo(Brand, { foreignKey: "brand_id" });

    // 1 Produto pode ter várias Variações
    Product.hasMany(ProductVariation, { foreignKey: "product_id" });
    ProductVariation.belongsTo(Product, { foreignKey: "product_id" });

    // 1 Variação de Produto pode estar em vários Itens de Pedido
    ProductVariation.hasMany(ItensOrder, { foreignKey: "product_variation_id" });
    ItensOrder.belongsTo(ProductVariation, { foreignKey: "product_variation_id" });

    // 1 Variação de Produto pode ter vários Genêros
    ProductVariation.hasMany(ProductGender, { foreignKey: "product_variation_id" });
    ProductGender.belongsTo(ProductVariation, { foreignKey: "product_variation_id" });

    // 1 Variação de Produto pode ter vários tamanhos
    ProductVariation.hasMany(ProductSize, { foreignKey: "product_variation_id" });
    ProductSize.belongsTo(ProductVariation, { foreignKey: "product_variation_id" });

    // 1 Variação de Produto pode ter vários estados
    ProductVariation.hasMany(ProductState, { foreignKey: "product_variation_id" });
    ProductState.belongsTo(ProductVariation, { foreignKey: "product_variation_id" });
}