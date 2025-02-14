import { Router } from "express";
import Product from "../../../sequelize/models/Product.js";

const router = Router();

// Criar um novo produto
router.post("/", async (req, res) => {
    const { name, brand, description, stock } = req.body;
    // console.log(req, "corpo da requisição")
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
    const product = await Product.findAll();
    res.json(product);
});

// Buscar um produto por ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: "Produto não encontrado" });
    res.json(product);
});

// Deleta um produto
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: "Produto não encontrado" });
    await product.destroy();
    res.json(product);
});
export default router;