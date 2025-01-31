import ItensOrder from "./models/ItensOrder.js";
import Order from "./models/Order.js";
import Product from "./models/Product.js";
import ProductVariation from "./models/ProductVariation.js";
import User from "./models/User.js";

export default function setupAssociations() {
    // 1 Usuário pode ter vários Pedidos
    User.hasMany(Order, { foreignKey: "user_id" });
    Order.belongsTo(User, { foreignKey: "user_id" });

    // 1 Pedido pode ter vários Itens de Pedido
    Order.hasMany(ItensOrder, { foreignKey: "order_id" });
    ItensOrder.belongsTo(Order, { foreignKey: "order_id" });

    // 1 Produto pode ter várias Variações
    Product.hasMany(ProductVariation, { foreignKey: "product_id" });
    ProductVariation.belongsTo(Product, { foreignKey: "product_id" });

    // 1 Variação de Produto pode estar em vários Itens de Pedido
    ProductVariation.hasMany(ItensOrder, { foreignKey: "product_variation_id" });
    ItensOrder.belongsTo(ProductVariation, { foreignKey: "product_variation_id" });
}