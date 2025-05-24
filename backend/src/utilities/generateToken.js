import jwt from "jsonwebtoken"

const generateToken = (userId, res) => {
    const payload = { userId }
    const secretKey = process.env.SECRET_KEY
    const token = jwt.sign(payload, secretKey, { expiresIn: '7d' });

    res.cookie("jwt", token, {
        httpOnly: true,     // Can't access with JS
        secure: process.env.NODE_ENV != "development",       // Send only over HTTPS
        sameSite: 'Strict', // Helps prevent CSRF
        maxAge: 7 * 24 * 60 * 60 * 1000    // 1 hour
    })
    return token
}

export default generateToken