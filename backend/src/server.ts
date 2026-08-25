import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conntectdb from './config/conntectdb';
import authRoutes from './routes/authRoutes'

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

app.use('/api/auth', authRoutes)


app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})