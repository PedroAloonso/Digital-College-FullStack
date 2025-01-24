import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// Criar um novo usuário
router.post("/", async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await prisma.users.create({
            data: { name, email },
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: "Erro ao criar usuário" });
    }
});

// Listar todos os usuários
router.get("/", async (req, res) => {
    const users = await prisma.users.findMany();
    res.json(users);
});

// Buscar um usuário por ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await prisma.users.findUnique({
        where: { id: parseInt(id) },
    });
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(user);
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await prisma.users.delete({
        where: { id: parseInt(id) },
    });
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    res.status(200).json(user);
});

export default router;
