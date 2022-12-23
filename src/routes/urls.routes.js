import { Router } from "express";
import { shortenUrl, urlById } from "../controllers/urls.controllers.js";
import { verifyToken } from "../middlewares/auth.middlewares.js";
import { validateUrl } from "../middlewares/urls.middlewares.js";

const router = Router();

router.post("/urls/shorten", verifyToken, validateUrl, shortenUrl);

router.get("/urls/:id", urlById);

export default router;
