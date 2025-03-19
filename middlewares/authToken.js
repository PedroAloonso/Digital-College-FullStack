import jwt from "jsonwebtoken";


const jwtSecret = "chave_secreta";

/**
 * Middleware para validar o token de autenticação 
 */  
const authMiddleware = (request, response, next) => {
    console.log(request.headers);
    try {
        const jwtToken = request.headers.authorization?.replace("Bearer ", "");
        if (!jwtToken) {
            return response.status(403).json("Unauthorized");
        }

        const authInfo = jwt.verify(jwtToken, jwtSecret);
        if (!authInfo) {
            return response.status(403).json("Unauthorized");
        }

        if (authInfo.role !== "admin") {
            return response.status(403).json("Unauthorized");
        }

        next();
    } catch (error) {
        return response.status(401).json(`Unauthorized. Error: ${error.message}`);
    }
};

export default authMiddleware;