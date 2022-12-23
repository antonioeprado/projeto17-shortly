import { nanoid } from "nanoid";
import { connection } from "../database/db.js";
export const shortenUrl = async (req, res) => {
	const shortUrl = nanoid();
	try {
		await connection.query(
			`INSERT INTO urls (user_id, url, short_url) VALUES ($1, $2, $3)`,
			[res.locals.user_id, res.locals.url, shortUrl]
		);
		res.status(200).send({ shortUrl });
	} catch (error) {
		console.log(error);
	}
};

export const urlById = async (req, res) => {
	try {
		const url = await connection.query(
			`SELECT url_id, short_url, url FROM urls WHERE url_id=$1`,
			[req.params.id]
		);
		if (!url.rowCount) return res.sendStatus(404);
		res.status(200).send(url.rows[0]);
	} catch (error) {
		console.log(error);
	}
};
