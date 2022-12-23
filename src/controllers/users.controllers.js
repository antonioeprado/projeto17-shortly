import { connection } from "../database/db.js";
import jwt from "jsonwebtoken";
// import dotenv from 'dotenv';
// dotenv.config();

export const signUp = async (req, res) => {
	try {
		const { name, email, password } = res.locals.user;
		await connection.query(
			`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,
			[name, email, password]
		);
		res.sendStatus(201);
	} catch (error) {
		console.log(error);
	}
};

export const signIn = (req, res) => {
	const token = res.locals.token;
	res.status(200).send({ token });
};

export const userProfile = async (req, res) => {
	try {
		const profileQuery = await connection.query(
			`SELECT
				u.user_id AS "id",
				u.name,
				SUM(v.visit_count) AS "visitCount",
				ARRAY_TO_JSON
				(
					ARRAY_AGG
					(
						JSON_BUILD_OBJECT('id', urls.id, 'shortUrl', urls."shortUrl", 'url', urls.url, 'visitCount', urls."visitCount")
					)
				) AS "shortenedUrls"
			FROM users u
			JOIN
			(
				SELECT
					urls.url_id AS id,
					urls.url,
					urls.short_url AS "shortUrl",
					urls.user_id,
					SUM(visits.visit_count) AS "visitCount"
					FROM urls
					JOIN visits
						ON urls.url_id = visits.url_id
					GROUP BY urls.url_id
			) AS urls
				ON u.user_id = urls.user_id
			JOIN visits v
				ON urls.id = v.url_id
			WHERE u.user_id = $1
			GROUP BY u.user_id
			`,
			[res.locals.user_id]
		);
		if (!profileQuery.rowCount) return res.sendStatus(404);
		res.status(200).send(profileQuery.rows[0]);
	} catch (error) {
		console.log(error);
	}
};
