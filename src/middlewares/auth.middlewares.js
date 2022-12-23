import jwt from "jsonwebtoken";
import { connection } from "../database/db.js";
import { Hash } from "../hashPassword.js";
import ValidateModel from "../validateModel.js";

export const validateSignInPayload = async (req, res, next) => {
	const user = new ValidateModel(req.body, "signin");
	if (!user.status) return res.status(422).send(user.errors);
	if (!(await user.isUsed)) return res.sendStatus(401);
	next();
};

export const compareHash = async (req, res, next) => {
	const query = await connection.query(
		`SELECT password FROM users WHERE Email=$1`,
		[req.body.email]
	);
	const password = query.rows[0].password;
	const isCorrect = Hash.decrypt(req.body.password, password);
	if (!isCorrect) return res.status(401).send("Incorrect email or password");
	next();
};

export const createSession = async (req, res, next) => {
	try {
		const query = await connection.query(
			`SELECT "user_id" FROM users WHERE email=$1`,
			[req.body.email]
		);
		const userId = query.rows[0].user_id;
		const token = jwt.sign(userId, process.env.JWT_SECRET);
		await connection.query(
			`INSERT INTO sessions (user_id, token) VALUES ($1, $2)`,
			[userId, token]
		);
		res.locals.token = token;
		next();
	} catch (error) {
		console.log(error);
	}
};

export const verifyToken = async (req, res, next) => {
	const token = req.headers.authorization.replace("Bearer ", "");
	try {
		const userId = jwt.verify(token, process.env.JWT_SECRET);
		res.locals.user_id = userId;
		next();
	} catch (error) {
		res.sendStatus(401);
	}
};
