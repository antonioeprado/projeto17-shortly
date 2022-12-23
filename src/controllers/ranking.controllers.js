import { connection } from "../database/db.js";

export const getRanking = async (req, res) => {
	try {
		const rankingQuery = await connection.query(
			`
	    SELECT 
	        u.user_id AS id, 
	        u.name, 
	        COUNT(urls.url) AS "linksCount",
	        COALESCE(SUM(v.visit_count), 0) AS "visitCount"
	    FROM users u 
	    LEFT JOIN urls 
	        ON u.user_id = urls.user_id
	    LEFT JOIN visits v
	        ON u.user_id = v.user_id
	    GROUP BY u.user_id
	    ORDER BY "visitCount" DESC
	    LIMIT 10
	
	    `
		);
		res.status(200).send(rankingQuery.rows);
	} catch (error) {
		console.log(error);
	}
};
