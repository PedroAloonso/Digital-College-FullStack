import express from "express";
import prismaUserRoutes from "./routes/prisma-user.js";
import sequelizeUserRoutes from "./routes/sequelize-user.js";

const app = express();
app.use(express.json());

app.use("/prisma-users", prismaUserRoutes);
app.use("/sequelize-users", sequelizeUserRoutes);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
