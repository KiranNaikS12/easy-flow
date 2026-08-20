import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conntectdb from './config/conntectdb';


dotenv.config();
conntectdb();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true,
}))

app.get("/api/test/", (req, res) => {
    console.log("GET /api/test received");

    res.json({
        message: "Backend received the request"
    })
})


app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})