import { connection } from "../database/db.js";

export const signUp = async (req, res) => {
	try {
		const { name, email, password } = res.locals.user;
		await connection.query(
			`INSERT INTO users (Username, Email, Password) VALUES ($1, $2, $3)`,
			[name, email, password]
		);
		res.sendStatus(201);
	} catch (error) {
		console.log(error);
	}
};

export const signIn = async (req, res) => {};

export const userProfile = async (req, res) => {};
