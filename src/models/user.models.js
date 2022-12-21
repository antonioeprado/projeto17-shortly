import Joi from "joi";

export const userSignUpModel = Joi.object({
	name: Joi.string().min(3).required(),
	email: Joi.string().email().required(),
	password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{4,24}$")).required(),
	repassword: Joi.ref("password"),
});

export const userSignInModel = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{4,24}$")).required(),
});
