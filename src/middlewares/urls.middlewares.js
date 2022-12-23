import { connection } from "../database/db.js";
import ValidateModel from "../validateModel.js";

export const validateUrl = (req, res, next) => {
	const url = new ValidateModel(req.body, "url");
	if (!url.status) return res.status(422).send(url.errors);
	res.locals.url = req.body.url;
	next();
};

export const findUrl = async (req, res, next) => {
	try {
		const urlQuery = await connection.query(
			`SELECT url_id, url, user_id FROM urls WHERE short_url=$1`,
			[req.params.shortUrl]
		);
		if (!urlQuery.rowCount) return res.sendStatus(404);
		res.locals.url = {
			url: urlQuery.rows[0].url,
			id: urlQuery.rows[0].url_id,
		};
		next();
	} catch (error) {
		console.log(error);
	}
};

export const findUrlById = async (req, res, next) => {
	const urlQuery = await connection.query(
		`SELECT * FROM urls WHERE url_id=$1`,
		[req.params.id]
	);
	if (!urlQuery.rowCount) return res.sendStatus(404);
	res.locals.urlOwner = urlQuery.rows[0].user_id;
	next();
};

export const validateOwnership = (req, res, next) => {
	if (res.locals.urlOwner != res.locals.user_id) return res.sendStatus(401);
	next();
};
