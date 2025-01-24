import { Router } from "express";
import models from "../../sequelize/models.js";

const router = Router();

const { User } = models;



// Criar um novo usuário
router.post("/", async (req, res) => {
    const { name, email } = req.body;
    console.log(req, "requisição")
    try {
        const user = await User.create({ name, email });
        console.log(user)
        res.status(200).json(user);
    } catch (error) {
        console.log(error)
        res.status(400);
    }
});

// Listar todos os usuários
router.get("/", async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

// Buscar um usuário por ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(user);
});


router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    await user.destroy();
    res.json(user);
});
export default router;