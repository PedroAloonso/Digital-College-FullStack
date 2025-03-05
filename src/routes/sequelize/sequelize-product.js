import { Router } from "express";
import Product from "../../../sequelize/models/Product.js";

const router = Router();

// Criar um novo produto
router.post("/", async (req, res) => {
    const { name, brand, description, stock } = req.body;
    try {
        const product = await Product.create({ name, brand, description, stock });
        res.status(200).json(product);
    } catch (error) {
        console.log(error)
        res.status(400);
    }
});

// Listar todos os produtos
router.get("/", async (req, res) => {
    const columnNames = Object.entries(Product.getAttributes()).map(([columnName, detais]) => ({
        name: columnName,
        type: detais.type.key
    }))

    const product = await Product.findAll();
    res.status(200).json({columnNames,product});
});

// Buscar um produto por ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: "Produto não encontrado get" });
    res.status(200).json(product);
});

// Deleta um produto
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: "Produto não encontrado delete" });
    await product.destroy();
    res.status(200).json(product);
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: "Produto não encontrado Put" });
    product.set(req.body)
    product.save()
    res.status(200).json(product);
});
export default router;