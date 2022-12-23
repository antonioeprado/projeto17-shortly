import { Hash } from "../hashPassword.js";
import ValidateModel from "../validateModel.js";

export const validatePayload = async (req, res, next) => {
	const user = new ValidateModel(req.body, "signup");
	if (!user.status) return res.status(422).send(user.errors);
	if (await user.isUsed) return res.sendStatus(409);
	delete req.body.repassword;
	next();
};

export const encryptPassword = (req, res, next) => {
	const { password, ...rest } = req.body;
	res.locals.user = {
		...rest,
		password: Hash.encrypt(password),
	};
	next();
};
