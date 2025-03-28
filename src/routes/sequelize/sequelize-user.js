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
                email,
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
        console.log(error);
        res.status(500).json({ message: "Erro no servidor!", error });
    }
});

// Criar um novo usuário
router.post("/register", async (req, res) => {
    const {
        email,
        password,
        name,
        cpf,
        phone,
        address,
        neighborhood,
        city,
        cep,
        complement,
        getNews,
    } = req.body;
    if (!email || !password || !cpf) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const userExists = await User.findOne({ where: { email } });
        if (userExists)
            return res.status(400).json({ error: "Usuário já cadastrado" });
        if (!password) return res.status(400).json({ error: "Sem senha" });

        /**
         * Contains 8 characters
         * Contains special character @$!%*#?&
         * Contains uppercase and lowercase characters
         * Contains number
        */
        // TODO: depois adicionar 
        //     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm
        //     const passwordIsValid = passwordRegex.test(password);
        // if (!passwordIsValid) {
        //         return response..status(400).json({ message: "Password is not valid" })
        //     }

        const hashedPassword = bycrypt.hashSync(password, saltRounds);
        const user = await User.create({
            email,
            password,
            name,
            cpf,
            phone,
            address,
            neighborhood,
            city,
            cep,
            complement,
            getNews,
            password: hashedPassword,
        });
        const token = jwt.sign(
            {
                id: user.id,
                name: user.name,
                role: user.role,
            },
            jwtSecret,
            { expiresIn: "4h" }
        );
        res.status(200).json({
            message: "Usuário criado com sucesso!",
            token: `Bearer ${token}`,
        });
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

// const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm

// https://excalidraw.com/#json=N6iO3H22G2cWvnHdhcCuc,AOwQ1CkNX89-2BLIfDj5Vw

// /*  */
// import express from "express";
// import User from "../model/User.js";
// import bcrypt from "bcrypt";

// const authRouter = express.Router();

// authRouter.post("/login", (request, response) => {
//     const { password, email } = request.body;

//     if (!password || !email) {
//       return response.json("User not found", 422);
//     }

//     // TODO: Verificar se usuário existe

//     const jwtToken = jwt.sign(email, secretKey);
//     return response.json(jwtToken, 200);
// });

// authRouter.post("/register", async (request, response) => {
//     const {
//         name,
//         birthdate,
//         password,
//         email
//     } = request.body;

//     const userAlreadyExists = await User.findOne({
//         where: {
//             email
//         }
//     });

//     if (userAlreadyExists !== null) {
//         return response.json({ message: "User already exists" }, 400)
//     }

//     

//    

//     const encryptedPassword = bcrypt.hashSync(password, 10);
//     const createdUser = await User.create({
//         name,
//         birthdate,
//         email,
//         password: encryptedPassword
//     })

//     return response.json(createdUser)
// })

// export default authRouter;

// export default authRouter;

export default router;
