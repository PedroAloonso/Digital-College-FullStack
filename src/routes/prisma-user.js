import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// Criar um novo usuário
router.post("/", async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await prisma.user.create({
            data: { name, email },
        });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: "Erro ao criar usuário" });
    }
});

// Listar todos os usuários
router.get("/", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

// Buscar um usuário por ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
        where: { id: parseInt(id) },
    });
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(user);
});

export default router;
