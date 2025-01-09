import { Router } from "express";
import User from "../../sequelize/models.js";

const router = Router();


(async () => {
    try {
        await User.sync(); // Cria a tabela (se não existir)
        console.log("Tabela Users sincronizada com sucesso!");
    } catch (error) {
        console.error("Erro ao sincronizar tabela:", error);
    }
})();

// Criar um novo usuário
router.post("/", async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await User.create({ name, email });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: "Erro ao criar usuário" });
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

export default router;