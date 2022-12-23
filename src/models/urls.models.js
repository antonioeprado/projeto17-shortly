import Joi from "joi";

export const urlToShorten = Joi.object({
	url: Joi.string().uri().required(),
});
