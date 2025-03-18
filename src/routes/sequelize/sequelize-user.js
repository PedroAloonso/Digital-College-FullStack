import User from "../../../sequelize/models/User.js";

import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

// Validar token
const authMiddleware = (request, response, next) => {
    try {
        const jwtToken = request.headers;
        console.log("Auth: ", jwtToken);
        if (!jwtToken) {
            return response.json("Unauthorized", 403);
        }
        jwt.verify(jwtToken, secretKey);
        next();
    } catch (error) {
        return response.json(`Unauthorized. Error: ${error.message}`, 401);
    }
};

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

        const senhaCorreta = user.password === password;
        if (!senhaCorreta)
            return res
                .status(401)
                .json({ message: "Usuário ou senha inválidos!" });

        const token = jwt.sign(
            {
                id: user.id,
                name: user.name,
                role: user.role,
            },
            "chave_secreta",
            { expiresIn: "1h" }
        );
        res.json({ token, role: user.role });
    } catch {
        res.status(500).json({ message: "Erro no servidor!", error });
    }
});

// Criar um novo usuário
router.post("/register", async (req, res) => {
    const { name, email } = req.body;
    console.log(req, "requisição");
    try {
        const user = await User.create({ ...req.body });
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(400);
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
