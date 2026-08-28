import  express from "express";
import { AuthController } from "../controllers/auth/authController";
import container from "../config/di-container";

const router = express.Router();

//Calling controllers
const authController = container.get<AuthController>('AuthController');

//Public routes
router.post('/initiate-register', (req, res) => authController.register(req, res));
router.post('/login', (req, res) => authController.login(req,res));

export default router;

