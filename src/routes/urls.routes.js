import { Router } from "express";
import {
	redirect,
	shortenUrl,
	urlById,
} from "../controllers/urls.controllers.js";
import { verifyToken } from "../middlewares/auth.middlewares.js";
import { findUrl, validateUrl } from "../middlewares/urls.middlewares.js";

const router = Router();

router.post("/urls/shorten", verifyToken, validateUrl, shortenUrl);

router.get("/urls/:id", urlById);

router.get("/urls/open/:shortUrl", findUrl, redirect);

export default router;
