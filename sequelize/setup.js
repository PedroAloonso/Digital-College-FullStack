import { Sequelize} from "sequelize";

const sequelize = new Sequelize("mysql://root:@localhost:3306/test_db")

const testConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log("conectado")
    } catch (error) {
        console.log("Erro ao conectar: ", error)
    }
}

export default sequelize;