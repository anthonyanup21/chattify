import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.router.js"
import { connectDB } from "./lib/db.js"
import cookieParser from "cookie-parser"
import messageRoutes from "./routes/message.router.js"
import cors from "cors"
import path from "path"
import { fileURLToPath } from "url"



import { app, io, server } from "./lib/socket.io.js"

dotenv.config()

const PORT = process.env.PORT

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(express.json())
app.use(cookieParser()) //it is used to get hold of cookie in the update protected route
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

console.log("Mounting /api/auth");
app.use("/api/auth", authRoutes)

console.log("Mounting /api/message");
app.use("/api/message", messageRoutes)


try {
    if (process.env.NODE_ENV === "production") {
        const frontendPath = path.join(__dirname, "../../frontend/dist")

        console.log("Using static frontend from:", frontendPath)

        app.use(express.static(frontendPath))

        app.get("*", (req, res) => {
            try {
                res.sendFile(path.join(frontendPath, "/index.html"))
            } catch (err) {
                console.error("Error serving index.html:", err)
                res.status(500).send("Frontend not available.")
            }
        })
    }


} catch (error) {
    console.log("this is the error anup", error)

}


server.listen(PORT, () => {
    connectDB()
    console.log("port listining at ", PORT)

})