import express from "express"
import container from "../config/di-container";
import { ManageClientController } from "../controllers/owner/manageClientController";
import { validate } from "../middleware/validate";
import { clientRegisterSchema } from "../utils/clientValidation";

const router = express.Router();

const manageClientController = container.get<ManageClientController>('ManageClientController');

router.post('/clients',validate(clientRegisterSchema), (req, res) => manageClientController.registerClient(req, res))


export default router;