import express from "express";
import cors from "cors"
import prismaUserRoutes from "./src/routes/prisma-user.js";
import sequelizeUserRoutes from "./src/routes/sequelize/sequelize-user.js";
import sequelizeProductRoutes from "./src/routes/sequelize/sequelize-product.js";
import syncTables from "./sequelize/modelSync.js";

syncTables();

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("src"))

app.use("/prisma-users", prismaUserRoutes);

app.use("/sequelize-users", sequelizeUserRoutes);
app.use("/sequelize-products", sequelizeProductRoutes);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
