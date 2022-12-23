import express from "express";
import dotenv from "dotenv";
import UserRoute from "./routes/users.routes.js";
import UrlsRoute from "./routes/urls.routes.js";
import RankingRoute from "./routes/ranking.routes.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(UserRoute);
app.use(UrlsRoute);
app.use(RankingRoute);

const PORT = 5000 | process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
