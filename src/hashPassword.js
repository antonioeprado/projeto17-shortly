import bcrypt from "bcrypt";

export const Hash = {
	encrypt: (password) => bcrypt.hashSync(password, 10),
	compare: (password, hash) => bcrypt.compareSync(password, hash),
};
