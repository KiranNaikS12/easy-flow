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

}))


app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})