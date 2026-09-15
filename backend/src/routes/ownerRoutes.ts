import express from "express"
import container from "../config/di-container";
import { ManageClientController } from "../controllers/owner/manageClientController";
import { validate } from "../middleware/validate";
import { clientRegisterSchema } from "../utils/clientValidation";
import { ManageOwnerController } from "../controllers/owner/manageOwnerController";


const router = express.Router();

const manageClientController = container.get<ManageClientController>('ManageClientController');
const manageOwnerController = container.get<ManageOwnerController>('ManageOwnerController')


router.post('/account-setup', (req, res) => manageOwnerController.setupAccount(req, res))
router.post('/clients',validate(clientRegisterSchema), (req, res) => manageClientController.registerClient(req, res))


export default router;