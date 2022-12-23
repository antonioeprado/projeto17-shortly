import { Router } from "express";
import {
	signIn,
	signUp,
	userProfile,
} from "../controllers/users.controllers.js";
import {
	compareHash,
	createSession,
	validateSignInPayload,
	verifyToken,
} from "../middlewares/auth.middlewares.js";
import {
	encryptPassword,
	validatePayload,
} from "../middlewares/users.middlewares.js";

const router = Router();

router.post("/signup", validatePayload, encryptPassword, signUp);
router.post(
	"/signin",
	validateSignInPayload,
	compareHash,
	createSession,
	signIn
);
router.get("/users/me", verifyToken, userProfile);

export default router;
