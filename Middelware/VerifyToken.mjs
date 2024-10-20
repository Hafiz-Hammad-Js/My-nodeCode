import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({ path: './Secret/Secret.env' });

const jwtSecret = process.env.JWT_SECRET;

function verifyToken(req, res, next) {
    try {
        const token = req.headers.authorization.slice(7)
        jwt.verify(token,jwtSecret);

       
        next()
    } catch (e) {
        res.send({ message: "Invalid Token hai " })
    }
}

export default verifyToken;