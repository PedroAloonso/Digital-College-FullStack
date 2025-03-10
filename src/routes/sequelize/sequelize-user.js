import { Router } from "express";
import User from "../../../sequelize/models/User.js";

const router = Router();

// Criar um novo usuário
router.post("/", async (req, res) => {
    const { name, email } = req.body;
    console.log(req, "requisição")
    try {
        const user = await User.create({ name, email });
        res.status(200).json(user);
    } catch (error) {
        console.log(error)
        res.status(400);
    }
});

// Listar todos os usuários
router.get("/", async (req, res) => {
    const users = await User.findAll();
    const columnNames = Object.entries(User.getAttributes()).map(([columnName, detais]) => ({
            name: columnName,
            type: detais.type.key
        }))

    res.status(200).json({columnNames, users});
});

// Buscar um usuário por ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    res.status(200).json(user);
});

// Deletar um produto por ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    await user.destroy();
    res.status(200).json(user);
});

// Atualizar um produto por ID
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    user.set(req.body)
    user.save()
    res.status(200).json(user);
});


export default router;
