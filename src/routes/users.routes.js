import { Router } from "express";
import { signUp } from "../controllers/users.controllers.js";
import {
	encryptPassword,
	validatePayload,
} from "../middlewares/users.middlewares.js";

const router = Router();

router.post("/signup", validatePayload, encryptPassword, signUp);

export default router;
