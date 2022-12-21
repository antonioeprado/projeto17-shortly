import { connection } from "../database/db.js";
import jwt from "jsonwebtoken";
// import dotenv from 'dotenv';
// dotenv.config();

export const signUp = async (req, res) => {
	try {
		const { name, email, password } = res.locals.user;
		await connection.query(
			`INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`,
			[name, email, password]
		);
		res.sendStatus(201);
	} catch (error) {
		console.log(error);
	}
};

export const signIn = (req, res) => {
	const token = jwt.sign(res.locals.id, process.env.JWT_SECRET);
	res.status(200).send({ token });
};

export const userProfile = async (req, res) => {};
