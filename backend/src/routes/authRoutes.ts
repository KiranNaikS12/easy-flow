import  express from "express";
import { AuthController } from "../controllers/auth/authController";
import container from "../config/di-container";
import { validate } from "../middleware/validate";
import { baseAuthValidationSchema } from "../utils/authValidation";

const router = express.Router();

//Calling controllers
const authController = container.get<AuthController>('AuthController');

//Public routes
router.post('/register', validate(baseAuthValidationSchema),(req, res) => authController.register(req, res));
router.post('/login', validate(baseAuthValidationSchema),(req, res) => authController.login(req,res));
router.post('/logout', (req, res) => authController.logout(req, res))

export default router;

