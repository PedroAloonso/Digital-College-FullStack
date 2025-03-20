import User from "../../../sequelize/models/User.js";
import authMiddleware from "../../../middlewares/authToken.js";

import { Router } from "express";
import jwt from "jsonwebtoken";
import bycrypt from "bcrypt";

const router = Router();

const saltRounds = 10;
const jwtSecret = "chave_secreta";

// Login de usuário
router.post("/login", async (req, res) => {
    const { password, email } = req.body;

    try {
        const user = await User.findOne({
            where: {
                email: email,
            },
        });
        if (!user)
            return res
                .status(401)
                .json({ message: "Usuário ou senha inválidos!" });

        const senhaCorreta = bycrypt.compareSync(password, user.password);
        if (!senhaCorreta)
            return res
                .status(401)
                .json({ message: "Usuário ou senha inválidos!" });


        if (user.role === "admin") {
            const token = jwt.sign(
                {
                    id: user.id,
                    name: user.name,
                    role: user.role,
                },
                jwtSecret,
                { expiresIn: "4h" }
            );
            return res.json({ token, role: user.role });

        } else {
            const token = jwt.sign(
                {
                    id: user.id,
                    name: user.name,
                    role: user.role,
                },
                jwtSecret,
                { expiresIn: "1h" }
            );
            return res.json({ token, role: user.role });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Erro no servidor!", error });
    }
});

// Criar um novo usuário
router.post("/register", async (req, res) => {
    const { email, password } = req.body;
    try {
        const userExists = await User.findOne({ where: { email } });
        if (userExists)
            return res.status(400).json({ error: "Usuário já cadastrado" });

        const hashedPassword = bycrypt.hashSync(password, saltRounds);
        const user = await User.create({ ...req.body, password: hashedPassword });

        res.status(200).json("Usuário criado com sucesso!");
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Erro no servidor!", error });
    }
});


// Listar todos os usuários
router.get("/", authMiddleware, async (req, res) => {
    const users = await User.findAll();
    const columnNames = Object.entries(User.getAttributes()).map(
        ([columnName, detais]) => ({
            name: columnName,
            type: detais.type.key,
        })
    );

    res.status(200).json({ columnNames, users });
});

// Buscar um usuário por ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    res.status(200).json(user);
});

// Deletar um usuário por ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    await user.destroy();
    res.status(200).json(user);
});

// Atualizar um usuário por ID
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    user.set(req.body);
    user.save();
    res.status(200).json(user);
});

export default router;
