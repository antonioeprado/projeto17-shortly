import ValidateModel from "../validateModel.js";

export const validateUrl = (req, res, next) => {
	const url = new ValidateModel(req.body, "url");
	if (!url.status) return res.status(422).send(url.errors);
	res.locals.url = req.body.url;
	next();
};
